# LAPORAN TASK 69 — Sistem Backup & Restore 10 Menit (Telegram + Website + Server)

Tanggal: 2026-10-19 · Status: **LIVE sebagian** (scheduler + API + dashboard + storage eksternal), **bot Telegram BLOCKED** (tanpa token).

## 1. Ringkasan perubahan

Dibangun di atas arsitektur yang sudah ada, bukan project baru:

| Lapisan | Implementasi |
|---|---|
| Worker/scheduler | `bot/lib/backup/*` dijalankan di proses bot (`main.js`) |
| Database | SQLite `data/database/usanagi.sqlite` + `database.json` + registry platform |
| Storage lokal | `data/backup-system/archives` (tar.gz, opsional AES-256-GCM) |
| Storage eksternal | Vercel Blob privat (aktif) atau S3-compatible (siap, belum diuji live) |
| REST API | `/api/backup-system/*` di server HTTP bot yang sudah ada |
| Gerbang web | `website/api/backup.js` (sesi Supabase + role owner + secret server) |
| Dashboard | `website/backup.html` + `assets/backup.js|css` |
| Bot Telegram | `bot/lib/backup/telegram.js` (long polling, siap diaktifkan) |
| Dokumentasi | `docs/BACKUP-SYSTEM.md`, `BACKUP-RESTORE.md`, `BACKUP-API.md`, `BACKUP-TELEGRAM.md` |
| Tes | `bot/tests/backup/*` — **47 tes lulus** |

## 2. File

**Baru**
- `bot/lib/backup/{config,log,store,archive,crypto,sources,retention,external,pipeline,restore,scheduler,status,telegram,service,api}.js`
- `bot/scripts/backup-worker.js`, `bot/.backup-system.example.env`
- `bot/tests/backup/{helpers,archive,crypto,retention,scheduler,pipeline,restore,api}.test.mjs`
- `website/api/backup.js`, `website/public/backup.html`, `website/public/assets/backup.{js,css}`
- `docs/BACKUP-*.md`, laporan ini, `live-patch/2026-10-19-backup-system/`

**Diubah**
- `bot/main.js` — `startBackupSystem()`
- `bot/scripts/boot.js` — menerapkan restore database tertunda sebelum SQLite dibuka
- `bot/lib/jadibot-platform-api.js` — dispatch `/api/backup-system/*`
- `bot/package.json` — dependensi `tar`, skrip `backup:worker|once|test:backup`
- `website/vercel.json` — rewrite `/api/backup/(.*)` + halaman `/backup`
- `bot/.gitignore` — abaikan symlink `node_modules`

## 3. Bukti uji

### Automated (PASS)
```
cd bot && node --test tests/backup/
# tests 47 · pass 47 · fail 0
```
Mencakup: arsip & path traversal, enkripsi (roundtrip + tamper), retensi (144/harian/mingguan/bulanan), slot 10 menit & 144/hari, lock anti-paralel, backup kosong/kapasitas penuh, restore penuh (data SQLite benar-benar kembali), dry-run, checksum salah ditolak, otorisasi API.

### Produksi (PASS)
| Uji | Hasil |
|---|---|
| Scheduler start | `next 11:40:05Z`, interval 10 menit |
| Backup terjadwal | `bk_20261019114019449_3c6e5888` · 3,95 MB · verified |
| Catch-up setelah restart | `bk_20261019113819441_35a53aa7` · verified |
| Backup manual API | `202` + polling status → completed |
| Verifikasi ulang arsip | `ok:true`, checksum cocok, 5 entri |
| Dry-run restore | 3 berkas, 13,2 MB, 3/3 checksum cocok, butuh restart |
| Storage eksternal | unggah ke Vercel Blob privat, **verified**, unduh ulang → sha256 identik |
| Buka arsip eksternal tanpa server | dekripsi OK, manifest cocok, 3/3 checksum, `PRAGMA quick_check: ok`, 31 tabel |
| Dashboard | `/backup` 200, aset CSS/JS 200, API tanpa sesi → 401 |
| Fitur lama | `/api/backup/list` tetap berjalan (tidak tertimpa) |

## 4. Status per komponen

| Komponen | Status | Catatan |
|---|---|---|
| Backup otomatis 10 menit | **PASS** | jadwal 11:40 & 11:50 jalan, 144 slot/hari |
| Retensi 144/7/4/3 | **PASS (uji unit)** | dipromosikan per bucket, hapus arsip + salinan eksternal |
| Restore database | **PASS (uji unit)** | `completed_pending_restart`, aktif saat boot |
| Restore produksi nyata | **NOT RUN** | sengaja: hanya dry-run di produksi (data bot live) |
| REST API | **PASS** | 22 endpoint, auth secret, 401/403/404/409 diuji |
| Dashboard web | **PASS (HTTP)** | login butuh kredensial owner — uji klik manual **BLOCKED** |
| Login owner di dashboard | **BLOCKED** | butuh password akun owner, tidak dipegang agent |
| Bot Telegram | **BLOCKED** | `TELEGRAM_BOT_TOKEN` belum ada |
| S3-compatible | **NOT RUN** | kode SigV4 siap, tidak ada kredensial |
| Notifikasi Telegram | **BLOCKED** | bergantung token |

## 5. Langkah mengaktifkan bot Telegram

```text
1. @BotFather → /newbot → token
2. isi .backup-system.env: TELEGRAM_BOT_TOKEN=..., TELEGRAM_ADMIN_IDS=<id angka>
3. restart bot → log "Bot Telegram @xxx aktif"
```
Detail: `docs/BACKUP-TELEGRAM.md`.

## 6. Konfigurasi produksi saat ini

`.backup-system.env` di server (bukan di repo):
`BACKUP_INTERVAL_MINUTES=10`, retensi 144/7/4/3, kuota 2 GB, `BACKUP_EXTERNAL_BACKEND=vercel-blob`,
`BACKUP_EXTERNAL_MODE=hourly`, enkripsi AES-256-GCM aktif.
`BACKUP_ADMIN_SECRET` juga dipasang di Vercel (production/preview/development).

**Penting:** kunci enkripsi ada di `/home/user/.secrets/task69-backup.env`. Tanpa kunci itu arsip
tidak bisa dibuka. Simpan salinan offline.

## 7. Risiko & catatan

- Backup 144×/hari ≈ 4 MB → arsip lokal ±590 MB pada kondisi stabil (kuota 2 GB, disk sisa 30 GB).
- Salinan eksternal default 1×/jam (mode `all` = setiap snapshot, biaya Blob naik).
- Restore database butuh restart bot (aman: tidak menimpa file SQLite yang sedang terbuka).
- `creds.json` sesi WhatsApp sengaja tidak dibackup; setelah restore sesi dipindai ulang.
- `.backup-system.env` sebaiknya `chmod 600` di server.
