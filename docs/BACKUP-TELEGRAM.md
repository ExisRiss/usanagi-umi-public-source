# Bot Telegram Admin Backup

## Status saat ini

Kode lengkap tersedia (`bot/lib/backup/telegram.js`) dan otomatis aktif bila
`TELEGRAM_BOT_TOKEN` + `TELEGRAM_ADMIN_IDS` diisi. Tanpa token, layanan ini
**dimatikan dengan log jelas**, bukan gagal diam-diam.

Di produksi saat dokumen ini ditulis, token belum tersedia sehingga statusnya
`BLOCKED` (lihat laporan Task 69). Untuk mengaktifkan:

1. Buat bot lewat [@BotFather](https://t.me/BotFather) → `/newbot` → salin token.
2. Kirim satu pesan ke bot, lalu buka
   `https://api.telegram.org/bot<TOKEN>/getUpdates` untuk melihat `from.id`.
3. Isi `.backup-system.env`:

   ```env
   TELEGRAM_BOT_TOKEN=123456789:AA...
   TELEGRAM_ADMIN_IDS=123456789
   TELEGRAM_NOTIFY_SUCCESS=0
   ```

4. Restart bot. Log akan menampilkan `Bot Telegram @namabot aktif`.

Otorisasi hanya memakai **ID numerik**, bukan username. ID lain mendapat
balasan "tidak terdaftar" dan percobaannya tercatat di log.

## Perintah

| Perintah | Fungsi |
|---|---|
| `/start`, `/help` | info & daftar perintah |
| `/status` | worker, database, scheduler, backup terakhir/berikutnya, storage |
| `/backup [full\|database\|config\|files]` | backup manual, menunggu selesai |
| `/backups [n]` | daftar arsip terbaru |
| `/verify <id>` | verifikasi ulang arsip |
| `/restore <id>` | rencana restore + tombol konfirmasi |
| `/confirm <restoreId> <kode>` | eksekusi restore |
| `/cancel <restoreId>` | batalkan restore |
| `/restores` | riwayat restore |
| `/logs [n]` | log tersanitasi |
| `/export` | unduh index backup (JSON) |
| `/settings` | lihat pengaturan |
| `/settings interval <n>` | ubah interval (audit log) |
| `/settings enable\|disable` | nyalakan/matikan scheduler |
| `/settings notify on\|off` | notifikasi sukses tiap 10 menit |
| `/settings external all\|hourly\|promoted` | mode unggah eksternal |

## Notifikasi

- Kegagalan backup **selalu** dikirim.
- Keberhasilan tiap 10 menit terlalu berisik, jadi default
  `TELEGRAM_NOTIFY_SUCCESS=0` (nonaktif). Ringkasan tetap tersedia di `/status`.

## Keamanan

- Long polling, tanpa webhook/port publik.
- Setelah start, tumpukan update lama dibuang agar perintah usang tidak
  dieksekusi.
- Token tidak pernah dikirim ke chat, dashboard, atau log (disanitasi otomatis).
- Restore selalu dua langkah dengan kode 15 menit.
