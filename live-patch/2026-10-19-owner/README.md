# Patch akses owner jadibot 2026-10-19 (langsung ke server produksi)

Tujuan: owner sesi Jadibot memakai seluruh fitur bot miliknya (termasuk
`.sitagrup` / `.kudeta` yang sebelumnya `rowner`), tanpa membuka fitur
website/platform atau data lintas akun.

| Berkas live | Perubahan |
|---|---|
| `lib/owner-policy.js` (baru) | daftar `PLATFORM_ONLY_PLUGINS` + `canUseOwnerPlugin()` |
| `handler.js` | gate `plugin.rowner` memakai `canUseOwnerPlugin()`; cek `plugin.platformOnly`; pesan `fail('platform')` |
| `plugins/owner/usanagi-boost.js` | `handler.platformOnly = true` (naikin saham) |
| `plugins/owner/usanagi-jadibotconfig.js` | `handler.platformOnly = true` (sesi jadibot lain) |
| `plugins/owner/self.js` | `handler.platformOnly = true` (mode global) |
| `plugins/pelengkap/umi/owner/umi-sitagrup.js` | `handler.jadibotOwner = true` (kudeta eksplisit) |

Uji: `bot/tests/owner-policy.test.mjs` (8 pass) + skrip live `verify-owner.mjs`.
