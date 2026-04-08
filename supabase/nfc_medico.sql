-- NFC Medico
-- Deploy this in a dedicated Supabase project for NFC Medico.
-- Keep it separate from the wholesale business project so data, keys,
-- analytics, and environments stay easier to manage.

create extension if not exists pgcrypto;

create table if not exists public.medical_profiles (
  id uuid primary key default gen_random_uuid(),
  company_id uuid,
  public_slug text not null unique,
  default_language text not null default 'en' check (default_language in ('en', 'es')),
  full_name text not null,
  blood_type text,
  doctor text,
  clinic text,
  insurance text,
  conditions_en text,
  conditions_es text,
  allergies_en text,
  allergies_es text,
  medications_en text,
  medications_es text,
  devices_en text,
  devices_es text,
  notes_en text,
  notes_es text,
  emergency_contact_1_name text,
  emergency_contact_1_phone text,
  emergency_contact_1_whatsapp text,
  emergency_contact_2_name text,
  emergency_contact_2_phone text,
  emergency_contact_2_whatsapp text,
  full_record_url text,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists medical_profiles_public_slug_idx
  on public.medical_profiles (public_slug);

create or replace function public.set_current_timestamp_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_medical_profiles_updated_at on public.medical_profiles;
create trigger trg_medical_profiles_updated_at
before update on public.medical_profiles
for each row
execute function public.set_current_timestamp_updated_at();

create or replace view public.medical_profiles_public as
select
  public_slug,
  default_language,
  full_name,
  blood_type,
  doctor,
  clinic,
  insurance,
  conditions_en,
  conditions_es,
  allergies_en,
  allergies_es,
  medications_en,
  medications_es,
  devices_en,
  devices_es,
  notes_en,
  notes_es,
  emergency_contact_1_name,
  emergency_contact_1_phone,
  emergency_contact_1_whatsapp,
  emergency_contact_2_name,
  emergency_contact_2_phone,
  emergency_contact_2_whatsapp,
  full_record_url
from public.medical_profiles
where is_public = true;

alter table public.medical_profiles enable row level security;

drop policy if exists "public read medical profiles" on public.medical_profiles;
create policy "public read medical profiles"
on public.medical_profiles
for select
using (is_public = true);

-- Prototype-only policies so the setup portal can write directly with the anon key.
-- For production hardening, replace these with authenticated writes or an Edge Function.
drop policy if exists "prototype insert medical profiles" on public.medical_profiles;
create policy "prototype insert medical profiles"
on public.medical_profiles
for insert
with check (true);

drop policy if exists "prototype update medical profiles" on public.medical_profiles;
create policy "prototype update medical profiles"
on public.medical_profiles
for update
using (true)
with check (true);

create table if not exists public.medical_scan_events (
  id bigint generated always as identity primary key,
  public_slug text not null,
  language text,
  page_url text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists medical_scan_events_slug_idx
  on public.medical_scan_events (public_slug, created_at desc);

alter table public.medical_scan_events enable row level security;

drop policy if exists "allow public insert medical scan events" on public.medical_scan_events;
create policy "allow public insert medical scan events"
on public.medical_scan_events
for insert
with check (true);

-- If you also keep an nfc_tags table in this dedicated project,
-- add the new target type there as part of your existing model.
-- Example when using an enum:
-- alter type public.nfc_target_type add value if not exists 'medical';
