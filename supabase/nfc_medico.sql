-- NFC Medico
-- Deploy this in a dedicated Supabase project for NFC Medico.
-- Keep it separate from the wholesale business project so data, keys,
-- analytics, and environments stay easier to manage.

create extension if not exists pgcrypto;

create table if not exists public.medical_profiles (
  id uuid primary key default gen_random_uuid(),
  company_id uuid,
  public_slug text not null unique,
  default_language text not null default 'en' check (default_language in ('en', 'es', 'fr', 'pt', 'de', 'it', 'ja', 'ko', 'zh')),
  full_name text not null,
  pending_label text,
  chip_reference text,
  workflow_status text not null default 'pending' check (workflow_status in ('pending', 'ready_to_program', 'active', 'update_requested', 'archived')),
  blood_type text,
  age text,
  weight text,
  height text,
  organ_donor boolean,
  doctor text,
  clinic text,
  insurance text,
  conditions_source text,
  conditions_en text,
  conditions_es text,
  allergies_source text,
  allergies_en text,
  allergies_es text,
  food_allergies_source text,
  food_allergies_en text,
  food_allergies_es text,
  medications_source text,
  medications_en text,
  medications_es text,
  devices_source text,
  devices_en text,
  devices_es text,
  notes_source text,
  notes_en text,
  notes_es text,
  emergency_contact_1_name text,
  emergency_contact_1_phone text,
  emergency_contact_1_whatsapp text,
  emergency_contact_2_name text,
  emergency_contact_2_phone text,
  emergency_contact_2_whatsapp text,
  full_record_url text,
  activation_started_at timestamptz,
  activated_at timestamptz,
  nfc_programmed_at timestamptz,
  hybrid_summary text,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.medical_profiles
  add column if not exists pending_label text,
  add column if not exists chip_reference text,
  add column if not exists workflow_status text not null default 'pending',
  add column if not exists age text,
  add column if not exists weight text,
  add column if not exists height text,
  add column if not exists organ_donor boolean,
  add column if not exists conditions_source text,
  add column if not exists allergies_source text,
  add column if not exists food_allergies_source text,
  add column if not exists food_allergies_en text,
  add column if not exists food_allergies_es text,
  add column if not exists medications_source text,
  add column if not exists devices_source text,
  add column if not exists notes_source text,
  add column if not exists activation_started_at timestamptz,
  add column if not exists activated_at timestamptz,
  add column if not exists nfc_programmed_at timestamptz,
  add column if not exists hybrid_summary text;

alter table public.medical_profiles
  drop constraint if exists medical_profiles_default_language_check;

alter table public.medical_profiles
  add constraint medical_profiles_default_language_check
  check (default_language in ('en', 'es', 'fr', 'pt', 'de', 'it', 'ja', 'ko', 'zh'));

alter table public.medical_profiles
  drop constraint if exists medical_profiles_workflow_status_check;

alter table public.medical_profiles
  add constraint medical_profiles_workflow_status_check
  check (workflow_status in ('pending', 'ready_to_program', 'active', 'update_requested', 'archived'));

create index if not exists medical_profiles_public_slug_idx
  on public.medical_profiles (public_slug);

create index if not exists medical_profiles_workflow_status_idx
  on public.medical_profiles (workflow_status, updated_at desc);

create table if not exists public.medical_profile_activation_tokens (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.medical_profiles(id) on delete cascade,
  token_hash text not null unique,
  token_hint text,
  status text not null default 'active' check (status in ('active', 'used', 'revoked', 'expired')),
  expires_at timestamptz,
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists medical_profile_activation_tokens_profile_idx
  on public.medical_profile_activation_tokens (profile_id, status, created_at desc);

create index if not exists medical_profile_activation_tokens_hash_idx
  on public.medical_profile_activation_tokens (token_hash);

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

drop view if exists public.medical_profiles_public;

create view public.medical_profiles_public as
select
  public_slug,
  default_language,
  workflow_status,
  full_name,
  blood_type,
  age,
  weight,
  height,
  organ_donor,
  doctor,
  clinic,
  insurance,
  conditions_source,
  conditions_en,
  conditions_es,
  allergies_source,
  allergies_en,
  allergies_es,
  food_allergies_source,
  food_allergies_en,
  food_allergies_es,
  medications_source,
  medications_en,
  medications_es,
  devices_source,
  devices_en,
  devices_es,
  notes_source,
  notes_en,
  notes_es,
  emergency_contact_1_name,
  emergency_contact_1_phone,
  emergency_contact_1_whatsapp,
  emergency_contact_2_name,
  emergency_contact_2_phone,
  emergency_contact_2_whatsapp,
  full_record_url,
  activated_at,
  nfc_programmed_at,
  hybrid_summary
from public.medical_profiles
where is_public = true;

alter table public.medical_profiles enable row level security;
alter table public.medical_profile_activation_tokens enable row level security;

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
