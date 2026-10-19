# Task 70 — Ekosistem Multi-App (WhatsApp + Telegram)

Ringkasan teknis integrasi Task 70. Semua yang tertulis di sini sudah diuji di
repo; hal yang belum diverifikasi disebut eksplisit di bagian **Batas**.

## Arsitektur

```
WhatsApp (Baileys)  ─┐
Telegram (Bot API)  ─┼─→  satu backend bot (Node ESM, SQLite)  ─→  data yang sama
Website (Vercel)    ─┘        ├─ lib/rpg/*        (mesin RPG produksi)
                              ├─ lib/platform/*   (ekosistem, RBAC, audit)
                              └─ /api/platform-system/*
```

Prinsipnya: **satu backend, satu sumber data, banyak adapter**. Tidak ada
database kedua untuk Telegram, tidak ada salinan engine RPG, tidak ada
perhitungan harga saham sendiri di website.

### Identitas

| Konsep | Nilai |
| --- | --- |
| `platform` | `whatsapp` / `telegram` / `web` |
| `platform_user_id` | JID WA, ID numerik Telegram, `web:<auth uuid>` |
| `user_id` | identitas internal `platform_users.id` (contoh `web:<uuid>`) |
| `role` | `owner` > `developer` > `admin` > `reseller` > `user` |
| `server_id` | slot server 1–10 |
| `session_id` | sesi jadibot WA |
| `correlation_id` | pengikat audit/job |

ID Telegram **tidak pernah** dianggap sama dengan nomor WhatsApp. Penyatuan
hanya lewat kode tautan sekali pakai: dashboard membuat kode →
`/link KODE` di bot Telegram → backend memindahkan identitas Telegram ke user
web tersebut (`platform_link_codes`, hash SHA-256, 10 menit, maksimum
percobaan terbatas). Nomor WhatsApp diambil dari sesi jadibot akun itu, bukan
dari input pengguna.

### Peran

Diverifikasi di backend (`lib/platform/roles.js`) memakai role dari
`platform_users` — bukan username, bukan parameter request. Bootstrap web
memetakan role dari tabel `platform_profiles` **di server** (bukan dari klien),
dengan email owner tetap sebagai jaring pengaman.

## Modul

| File | Isi |
| --- | --- |
| `lib/platform/db.js` | skema v1 + v2 (13 tabel), migrasi non-destruktif, `schemaInfo()` |
| `lib/platform/secrets.js` | AES-256-GCM (`PLATFORM_SECRET_KEY`), mask, HMAC media |
| `lib/platform/roles.js` | daftar permission per role, `canAssignRole` |
| `lib/platform/audit.js` | audit ter-redaksi + `integration_health` |
| `lib/platform/identity.js` | resolve/bootstrap, kode tautan, claim owner, daftar user |
| `lib/platform/servers.js` | 10 slot, allowlist aksi (`status/start/stop/restart/logs`), panel API HTTPS |
| `lib/platform/stock.js` | baca pasar lewat service website yang sama (`lib/webgame.json` + `X-UMI-Game-Token`) |
| `lib/platform/rpg.js` | bungkus `lib/rpg/*` produksi; anti reward ganda lewat `platform_idempotency` |
| `lib/platform/media.js` | sniff magic-bytes, simpan lokal, URL bertanda tangan + kedaluwarsa |
| `lib/platform/wa.js` | jembatan ke main bot + daftar sesi jadibot (tanpa socket kedua) |
| `lib/platform/api.js` | REST `/api/platform-system/*` |
| `lib/platform/telegram/*` | client (timeout/abort), simpan token, router command, poller anti-dobel |

## REST

Publik: `GET /api/platform-system/health`, `GET /api/platform-system/media/:id?e&u&s`.

Sisanya wajib `x-platform-secret` + `x-platform-user-id`:

```
POST   /bootstrap
GET    /session | /dashboard | /users | /audit | /servers | /servers/overview
GET    /telegram/bots            POST /telegram/bots
POST   /telegram/bots/:id/{validate,enable,disable,revoke}
PUT    /servers/:slot            DELETE /servers/:slot
POST   /servers/:slot/action
GET    /rpg/summary              GET  /stock/status
GET    /media                    POST /media/upload
POST   /media/:id/link           DELETE /media/:id
GET    /health/integrations      POST /link/telegram
```

Token bot Telegram tidak pernah dikembalikan: `maskRecord()` hanya
menghasilkan `tokenSet` dan `tokenMasked`.

## Gateway web

`website/api/ecosystem.js`:

1. verifikasi bearer Supabase (`/auth/v1/user`);
2. ambil role dari `platform_profiles` (server-side);
3. `POST /bootstrap` ke bot;
4. teruskan hanya route yang ada di whitelist, dengan `x-platform-secret`.

`/api/ecosystem/(.*)` direwrite **sebelum** `/api/(.*)` di `website/vercel.json`.

## Panel

`/platform` → `website/public/platform.html` + `assets/platform.{css,js}`.
Dark premium, responsif, tanpa resource eksternal. Setiap tombol memanggil
endpoint nyata; tidak ada tombol contoh. Data yang tidak tersedia (mis. modul
reseller) ditampilkan sebagai keterangan, bukan angka karangan.

## Perintah Telegram

`/start /menu /help /profile /status /jadibot /to-url /server /saham /rpg /panel /admin /reseller /link`

- `/status` membaca status nyata (WA, bot, RPG, saham).
- `/jadibot` memakai daftar sesi dari `data/jadibot-platform.json`.
- `/to-url` membalas media yang dikirim/di-reply dengan URL bertanda tangan.
- `/server` memakai allowlist aksi; aksi berisiko wajib konfirmasi tombol
  callback sekali pakai.
- `/admin` hanya untuk owner/developer; `/panel` mengarah ke dashboard.

## Keandalan

- Poller satu per token, offset disimpan per bot, dedup `telegram_updates`.
- Backoff 1→60 detik, berhenti pada 401 (token dicabut).
- Semua panggilan HTTP Telegram memakai timeout + `AbortController`.
- `platform_jobs` + `platform_idempotency` untuk anti-duplikasi.
- Graceful shutdown: `stopPlatform()` dipanggil pada SIGTERM/SIGINT.

## Tes

```
cd bot && node --test tests/platform/*.test.mjs      # 68
cd bot && node --test tests/backup/*.test.mjs        # 51
node --test website/tests/ecosystem-gateway.test.mjs # 8
```

## Batas (jujur)

- Panel web diuji pada level unit/HTTP (mock transport, DB in-memory); uji
  browser pada domain produksi bergantung pada deploy bot yang butuh akses
  panel hosting.
- Modul reseller belum punya tabel pelanggan/komisi; panel menampilkan
  keterangan, bukan data palsu.
- Upload media dari browser panel belum ada (batas body Vercel 4,5 MB);
  jalur unggah yang berfungsi: kirim media ke bot Telegram atau `/to-url` di
  WhatsApp, lalu ambil tautan di panel.
- Aksi daya server dan validasi token bot baru teruji dengan panel/Telegram
  mock; belum diuji ke panel hosting sungguhan dari workspace ini karena
  kredensial panel yang tersedia sudah ditolak (401).
