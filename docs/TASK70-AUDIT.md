# AUDIT TASK 70 — Multi-App Bot Ecosystem (WhatsApp + Telegram)

Tanggal: 2026-10-19 · Basis: repo `usanagi-umi-public-source` @ `0d76f6a` **dan** snapshot live server `d178bf71`.

Dokumen ini adalah hasil pemeriksaan nyata (baca file, hit endpoint, cek DB), bukan asumsi.
Semua yang belum tersedia ditandai **BELUM ADA** — tidak ada yang dianggap ada tanpa bukti.

## 1. Stack & entry point

| Aspek | Temuan |
|---|---|
| Bahasa | JavaScript ESM (`.js` + `"type": "module"`) |
| Runtime | Node.js 20.20.2 di server bot (container Pterodactyl) |
| Framework bot WA | `@rexxhayanasi/elaina-baileys` (fork Baileys) + `simple.js` |
| Database | SQLite `bot/data/database/usanagi.sqlite` via `better-sqlite3` (`core/awang-sqlite.js`) + `database.json` (lowdb) |
| Entry point | `bot/main.js` → `handler.js` (dispatcher plugin) |
| Plugin | `bot/plugins/**` — **2048 file**, 29 kategori (pelengkap 1091, rpg 203, umi-extra 121, fun 110, game 75, tools 73, owner 51, …) |
| Command router | `handler.js`: `plugin.command` (RegExp) cocok dengan teks berprefix; `global.plugins` dimuat dari `pluginFolder` |
| HTTP API bot | `bot/lib/jadibot-platform-api.js` — `http.createServer` di port `2144`, route manual |
| Website | Vercel (static SPA `website/public/index.html` + `assets/app.js`) + serverless `website/api/*.js` |
| Auth website | Supabase Auth (`/auth/v1/user`) + tabel `platform_profiles` (`roles[]`, `locked`) |
| Panel eksternal | Pterodactyl API (`/api/client/servers/<id>/...`) — server bot `d178bf71` |

## 2. Fitur bot WhatsApp yang sudah ada (dipakai ulang)

| Fitur | Lokasi | Bisa dipakai Telegram? |
|---|---|---|
| RPG unified | `lib/rpg/unified-store.js` (SQLite `rpg_users`, alias, transaksi idempoten), `unified-runtime.js` (`runUnifiedCommand`, `unifiedRpg()`), 203 plugin `plugins/rpg/*` | **Ya** — lewat store/transaksi yang sama, wajib identitas tertaut |
| Saham/trading | `plugins/game/trading-umi.js` → API game `game.gwenna.my.id` (`/api/trading/market`, `/session`, `/leaderboard`, `/me`, `/trade`, `/redeem`, `/bot/login-code`) dengan token dari `lib/webgame.json` | **Ya** — klien yang sama, sumber data sama dengan website |
| Jadibot WA | `lib/jadibot.js` (`startSubBot`, `stopSubBot`, `getSubBots`, …), state `data/jadibot-platform.json` | **Ya** — aksi dibatasi pemilik sesi |
| Password/hash, OTP, dsb | — | Tidak dipakai |

## 3. Fitur yang **BELUM ADA** (jujur, sebelum implementasi)

| Fitur | Status awal | Catatan |
|---|---|---|
| Adapter Telegram | **BELUM ADA** | Tidak ada file telegram selain `lib/backup/telegram.js` (khusus notifikasi backup, long-polling terpisah) |
| Tabel identitas lintas platform | **BELUM ADA** | `rpg_unified_aliases` hanya untuk alias WA (`@s.whatsapp.net` / `@lid`) |
| RBAC terpusat | **BELUM ADA** | Role website: `owner/developer/admin/partner/user` di Supabase; bot WA: `global.owner` + `owner-policy.js` |
| Slot server 1–10 | **BELUM ADA** | Hanya kredensial panel tunggal di `.secrets` / env |
| Multi-bot Telegram (token milik user) | **BELUM ADA** | — |
| Object storage internal untuk to-URL | **BELUM ADA** | `lib/uploadImage.js` + `plugins/tools/tools-tourl.js` memakai host pihak ketiga (uguu/0x0/tmpfiles/pone.rs) |
| Panel web ekosistem | **BELUM ADA** | Yang ada: SPA user, `/backup` (Task 69) |
| Reseller panel | **BELUM ADA** (hanya wallet/paket panel di `panel-autoorder.js`) | — |

## 4. Risiko konflik yang ditemukan

1. **Prefix route API.** `/api/platform/wallet-convert` & `/api/platform/rpg-koin` sudah dipakai. Endpoint baru memakai prefix terpisah `/api/platform-system/*` agar tidak menimpa.
2. **`rpg_unified_aliases`** hanya menerima alias berformat nomor WA. Menulis identitas Telegram ke tabel itu akan merusak invariant → identitas lintas platform disimpan di tabel baru, dan RPG Telegram **hanya** jalan setelah akun ditautkan ke nomor WA (supaya progres benar-benar satu baris data).
3. **`rpg_unified_commands`** memakai hash id pesan sebagai idempotency. ID pesan Telegram (`update_id`) dipakai sebagai bagian kunci agar reward ganda tidak mungkin.
4. **Plugin WA memakai `global.*`** (owner, conn, config). Adapter Telegram **tidak** memuat `global.conn`; semua service dipanggil eksplisit agar kegagalan Telegram tidak mematikan WA dan sebaliknya.
5. **Port 2144 tunggal.** Telegram poller jalan **di dalam** proses bot (bukan proses kedua) → hanya satu worker per token; dijaga juga dengan lock file berisi PID.
6. **Token rahasia.** Disimpan terenkripsi AES-256-GCM dengan kunci dari env server (`PLATFORM_SECRET_KEY`), tidak pernah dikembalikan utuh (hanya `masked`).

## 5. Rencana implementasi (dipakai sebagai peta kerja)

| Tahap | Isi | File |
|---|---|---|
| 2 | Adapter + shared service | `bot/lib/platform/*` |
| 3 | Konfigurasi token & koneksi | `platform/telegram/{client,bots,poller}.js` |
| 4 | Menu, router command, RBAC | `platform/telegram/{router,commands/*}.js`, `platform/roles.js` |
| 5 | Jadibot WA/TG | `platform/jadibot.js`, `telegram/commands/jadibot.js` |
| 6 | Slot server 1–10 | `platform/servers.js` |
| 7 | Saham | `platform/stock.js` |
| 8 | RPG + media to URL | `platform/rpg.js`, `platform/media.js` |
| 9 | Panel web | `website/api/platform.js` + `website/public/platform.html` |
| 10 | Migrasi, audit, health | `platform/db.js`, `platform/audit.js` |
| 11–12 | Tes + perbaikan | `bot/tests/platform/*` |
| 13 | Dokumentasi & laporan | `docs/TASK70-*.md` |

## 6. Definition of Done yang bisa dibuktikan di lingkungan ini

- Token Telegram tervalidasi `getMe` → **@AlzRiss_bot** (`8870227075`).
- Command inti (`/start /menu /profile /status /link /jadibot /server /saham /rpg /tourl /admin /reseller`) benar-benar dijawab bot.
- Slot kosong tidak dianggap server; slot 11 ditolak; aksi server memakai allowlist panel API.
- Saham membaca endpoint yang sama dengan website/game (bukan data karangan).
- RPG menulis lewat transaksi unified + idempotensi.
- Media to URL menghasilkan URL bertanda tangan yang benar-benar bisa diunduh dan menolak tanpa tanda tangan.
- Panel web menampilkan data nyata dari API (bukan angka statis).
- Tes otomatis lulus; fitur WA lama lulus regresi.
