// Safe template only. Keep real credentials, phone numbers, channel IDs, and
// runtime configuration outside version control.
global.owner = [['YOUR_OWNER_NUMBER', 'Owner', true]]
global.mainBot = { defaultPrefix: '/', registrationRequired: true }
global.jadibotPlatform = {
  enabled: true,
  apiPort: 3854,
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'YOUR_PUBLIC_ANON_KEY',
  ownerEmails: ['owner@example.com'],
  lockedOwnerNumber: 'YOUR_LOCKED_OWNER_NUMBER',
}
