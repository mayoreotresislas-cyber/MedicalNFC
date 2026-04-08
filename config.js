// Use a dedicated Supabase project for NFC Medico.
// Keep it separate from the wholesale sales environment.
// siteBaseUrl supports:
// - Pretty path: https://med.tudominio.com/med/{slug}
// - Temporary Vercel route: https://nfc-medico.vercel.app/med/{slug}
window.NFC_MEDICO_CONFIG = {
  supabaseUrl: "https://xokyqodchbgjetiemqqt.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhva3lxb2RjaGJnamV0aWVtcXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NTE5NDUsImV4cCI6MjA5MTIyNzk0NX0.09_dJDKRvkEXphwOQK0V1-Pl7YNR3aTDnwIfUhYI6Qc",
  profilesReadTable: "medical_profiles_public",
  profilesWriteTable: "medical_profiles",
  lookupField: "public_slug",
  defaultSlug: "",
  enableScanLogging: false,
  scanEventsTable: "medical_scan_events",
  allowDirectProfileWrite: true,
  siteBaseUrl: "https://medical-k63anqspk-mayoreotresislas-9044s-projects.vercel.app/med/{slug}"
};
