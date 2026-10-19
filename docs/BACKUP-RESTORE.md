# Restore & Disaster Recovery

## Ringkasan

Restore **tidak** langsung menimpa data saat command diterima. Ada dua langkah:
rencana (`POST /restores`) lalu konfirmasi dengan kode (`POST /restores/:id/confirm`).
Kode berlaku 15 menit dan hanya dikirim ke peminta (dashboard atau chat admin).

## Alur

1. Validasi backup ada dan berstatus `completed`.
2. Hitung ulang sha256 arsip → tolak bila tidak sama dengan index.
3. Dekripsi (jika `.enc`) dan ekstrak ke `data/backup-system/staging/restore-*`.
   Setiap entri diperiksa: path absolut, `..`, symlink/hardlink ditolak, dan
   seluruh arsip ditolak bila ada satu entri berbahaya.
4. Cocokkan isi berkas dengan `manifest.json` (sha256 per berkas).
5. Simpan rencana + kode konfirmasi (status `pending_confirmation`).
6. Saat dikonfirmasi:
   - jalankan **backup kondisi sekarang** lebih dulu (`reason: pre-restore`);
   - terapkan berkas satu per satu secara atomik (tmp + rename), berkas lama
     disimpan sebagai `*.before-restore-<id>`;
   - SQLite ditulis sebagai `usanagi.sqlite.restore-<id>`, diverifikasi dengan
     `PRAGMA quick_check`, lalu diaktifkan saat bot start berikutnya lewat
     `RESTORE-PENDING.json` (`applyPendingRestore()` di `scripts/boot.js`);
   - cocokkan ulang sha256 semua berkas hasil restore.
7. Status akhir: `completed` (tanpa database) atau
   `completed_pending_restart` (dengan database), atau `failed`.

## Dry-run

Dashboard dan API mendukung `dryRun: true` — menampilkan rencana tanpa menulis
apa pun:

```bash
curl -s -X POST https://api.gwenna.my.id/api/backup-system/restores \
  -H "x-backup-secret: $BACKUP_ADMIN_SECRET" -H 'Content-Type: application/json' \
  -d '{"backupId":"bk_...","dryRun":true}' | jq
```

## Restore dari dashboard

1. Buka `/backup` → login owner.
2. Pilih baris backup → **Restore**.
3. Periksa ringkasan (cakupan, jumlah berkas, butuh restart).
4. Masukkan kode konfirmasi → **Restore sekarang**.
5. Jika status `completed_pending_restart`, restart bot dari panel.

## Restore dari Telegram

```
/restore bk_20261019T113000000Z_ab12cd34
/confirm rs_20261019113200_ab12 ab12CD34
```

## Pemulihan darurat (server hilang total)

1. Siapkan panel baru, upload source bot (repo ini) + `node_modules`.
2. Unduh arsip terbaru dari storage eksternal (Vercel Blob / S3) atau dari
   mesin lain yang menyimpan salinan.
3. Letakkan di `data/backup-system/archives/` dengan nama asli.
4. Salin `BACKUP_ENCRYPTION_KEY` yang sama ke `.backup-system.env`.
5. Jalankan `node scripts/backup-worker.js --once` sekali untuk memastikan
   sistem hidup, lalu restore lewat dashboard/Telegram, atau ekstrak manual:

   ```bash
   tar -xzf backup_xxx.tar.gz -C /tmp/restore
   # database (butuh kunci bila .enc)
   cp /tmp/restore/database/database.json ./database.json
   cp /tmp/restore/database/usanagi.sqlite ./data/database/usanagi.sqlite
   cp -r /tmp/restore/config/sessions/. ./sessions/jadibot/
   ```

6. Jalankan bot, cek `/api/health` dan dashboard.

## Membatalkan restore yang sudah jalan

Restore yang masih `pending_confirmation` bisa dibatalkan
(`POST /restores/:id/cancel` atau tombol Batal di Telegram). Restore yang sudah
berjalan tidak bisa dibatalkan, tetapi backup `pre-restore` otomatis tersedia
untuk mengembalikan kondisi sebelumnya.

## Uji restore berkala

Di lingkungan terpisah (bukan produksi):

```bash
npm run test:backup          # 47+ tes, termasuk restore penuh ke fixture
node scripts/backup-worker.js --once full
```

Tes `bot/tests/backup/restore.test.mjs` benar-benar mengubah data, melakukan
restore, lalu membandingkan isi tabel SQLite sebelum/sesudah.
