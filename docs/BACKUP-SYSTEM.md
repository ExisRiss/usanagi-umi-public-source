# Sistem Backup Otomatis 10 Menit

Dokumen ini menjelaskan implementasi nyata di repo ini: bukan sistem baru yang
berdiri sendiri, melainkan lapisan backup yang menempel pada bot WhatsApp
(`bot/`) dan website (`website/`) yang sudah berjalan.

## 1. Arsitektur

```
┌──────────────────────────── bot (Pterodactyl) ────────────────────────────┐
│ main.js → lib/backup/service.js                                           │
│   ├── scheduler.js   slot 10 menit, lock, retensi                         │
│   ├── pipeline.js    snapshot → manifest → tar.gz → (AES-256-GCM) → verify│
│   ├── restore.js     validasi → konfirmasi → backup dulu → terapkan       │
│   ├── telegram.js    bot admin (long polling)                             │
│   └── api.js         /api/backup-system/*  (dipasang di server HTTP bot)  │
│                                                                           │
│ data/backup-system/                                                       │
│   ├── archives/  backup_*.tar.gz[.enc]                                    │
│   ├── index.json state.json logs/*.jsonl                                  │
│   └── locks/     backup.lock                                              │
└───────────────────────────────────────────────────────────────────────────┘
            ▲  HTTPS + x-backup-secret                 │ Vercel Blob / S3
            │                                          ▼
┌───────────┴─────────── website (Vercel) ────────┐   storage eksternal
│ /backup  → public/backup.html + assets/backup.js│
│ /api/backup/* → api/backup.js (cek sesi + owner)│
└─────────────────────────────────────────────────┘
```

- Scheduler berjalan **di dalam proses bot**, jadi tetap jalan walau dashboard
  ditutup. Setelah restart, slot dihitung ulang dari jam dinding (UTC) dan slot
  yang terlewat dicatat, bukan dikejar dengan proses paralel.
- Website hanya membaca/memerintah lewat API. Tidak ada state di browser.
- Tidak ada dependensi baru selain `tar` (sudah tersedia di `node_modules` bot).

## 2. Apa yang dicadangkan

| Komponen | Isi |
|---|---|
| `database` | snapshot konsisten `data/database/usanagi.sqlite` (API backup `better-sqlite3` + `PRAGMA quick_check`), `database.json`, `data/jadibot-platform.json` |
| `config` | `bot-config.json` tiap sesi, berkas JSON/JSONL non-rahasia di `data/` |
| `files` | plugin kustom per sesi (`sessions/jadibot/<nomor>/plugins/**`) |

**Tidak pernah masuk arsip:** `.env*`, `creds.json`, `tunnel-creds*.json`,
`webgame.json` (berisi token game), kunci privat, `node_modules`, `tmp`,
`.cache`, dan folder backup itu sendiri. Penyaring ada di
`bot/lib/backup/sources.js` (`isSecretPath`).

## 3. Struktur arsip

```
backup_bk_20261019T113000000Z_ab12cd34_full.tar.gz
├── manifest.json        id, waktu, versi app, komponen, daftar berkas + sha256
├── checksums.sha256     sha256  path (format sha256sum)
├── database/
│   ├── usanagi.sqlite
│   └── database.json
├── config/
│   ├── platform/jadibot-platform.json
│   ├── sessions/<nomor>/bot-config.json
│   └── data/*.json
└── files/sessions/<nomor>/plugins/**
```

Jika `BACKUP_ENCRYPTION_KEY` diisi, arsip disimpan sebagai `.tar.gz.enc` dengan
AES-256-GCM (`magic UMIBK1`, header berisi salt+IV, tag 16 byte di akhir).

## 4. Alur satu backup

1. Ambil lock `locks/backup.lock` (menolak backup kedua; lock > 25 menit dianggap basi).
2. Cek kapasitas disk dan kuota arsip.
3. Snapshot sumber → direktori staging.
4. Tulis `manifest.json` + `checksums.sha256`.
5. Buat `tar.gz` streaming (tidak memuat arsip ke RAM).
6. Enkripsi bila diaktifkan.
7. Verifikasi: buka arsip, cocokkan `manifest.id`, baca ulang header.
8. Pindahkan ke `archives/`, hitung sha256 arsip.
9. Unggah eksternal bila mode mengizinkan (default: sekali per jam).
10. Retensi + notifikasi Telegram.
11. Hapus staging.

Kegagalan di langkah mana pun → status `failed` + `errorCode` (mis.
`EMPTY_SOURCE`, `NO_CAPACITY`, `VERIFY_FAILED`), arsip tidak valid dipindah ke
`*.invalid` dan tidak pernah dicatat sebagai sukses.

## 5. Retensi

- `BACKUP_RETENTION_COUNT=144` — 144 snapshot terbaru (10 menit × 24 jam).
- `BACKUP_RETENTION_DAILY=7`, `WEEKLY=4`, `MONTHLY=3`.

Snapshot tertua pada tiap bucket hari/minggu/bulan **dipromosikan** (tidak
dihapus), jadi selalu ada arsip harian/mingguan/bulanan walau snapshot
10-menitan sudah terhapus. Kebijakan diuji di
`bot/tests/backup/retention.test.mjs`.

## 6. Cara menjalankan

Di panel, `npm start` sudah cukup: `main.js` memanggil `startBackupSystem()`.

Menjalankan worker terpisah (VPS/systemd):

```bash
node scripts/backup-worker.js           # scheduler + Telegram
node scripts/backup-worker.js --once    # satu backup langsung keluar
node scripts/backup-worker.js --once database
```

Konfigurasi dibaca dari `.backup-system.env` (lihat
`bot/.backup-system.example.env`). Berkas ini dimuat otomatis oleh
`lib/backup/config.js`, jadi tidak perlu mengubah startup command panel.

## 7. Memverifikasi bahwa backup benar-benar jalan

```bash
# di server bot
node scripts/backup-worker.js --once
ls -lh data/backup-system/archives | tail
sha256sum data/backup-system/archives/<file>   # bandingkan dengan index.json
```

Atau lewat API (butuh `BACKUP_ADMIN_SECRET`):

```bash
curl -s -H "x-backup-secret: $BACKUP_ADMIN_SECRET" \
  https://api.gwenna.my.id/api/backup-system/status | jq '{scheduler, backups}'
```

Atau lewat halaman `/backup` di website (login owner).

## 8. Batas yang perlu diketahui

- Bot ini adalah bot WhatsApp; sistem backup tidak mengumpulkan riwayat pesan
  Telegram. Endpoint `/api/backup-system/telegram/*` hanya melaporkan chat yang
  benar-benar pernah mengirim update ke bot Telegram admin.
- Backup berjalan di disk server bot. Salinan eksternal default 1×/jam;
  ubah `BACKUP_EXTERNAL_MODE=all` bila ingin setiap snapshot ikut diunggah.
- Backup tidak menyertakan kredensial sesi WhatsApp (`creds.json`) demi
  keamanan; setelah restore, sesi dibangun ulang normal oleh bot.
