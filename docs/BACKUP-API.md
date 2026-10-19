# API Backup

Semua endpoint di bawah ini adalah **implementasi nyata** di
`bot/lib/backup/api.js`, dipasang pada server HTTP bot di prefiks
`/api/backup-system`.

Autentikasi: header `x-backup-secret: $BACKUP_ADMIN_SECRET`
(atau `Authorization: Bearer $BACKUP_ADMIN_SECRET`).
Satu-satunya endpoint publik: `GET /api/backup-system/health`.

Dari browser, jangan panggil langsung — gunakan `/api/backup/*` di website.
Fungsi `website/api/backup.js` memverifikasi sesi Supabase + role `owner`,
lalu meneruskan dengan secret di sisi server.

## Backup

| Method | Path | Keterangan |
|---|---|---|
| POST | `/backups` | Mulai backup (`{ "type": "full\|database\|config\|files" }`) → `202 {id}` |
| GET | `/backups` | Daftar: `status`, `type`, `q`, `from`, `to`, `limit`, `offset`, `sort` |
| GET | `/backups/:id` | Detail record |
| GET | `/backups/:id/status` | Tahap & status (polling) |
| GET | `/backups/:id/download` | Unduh arsip (stream) |
| DELETE | `/backups/:id?confirm=1` | Hapus arsip + record |
| POST | `/backups/:id/verify` | Verifikasi ulang checksum + isi arsip |
| POST | `/backups/upload` | Unggah arsip `.tar.gz` (≤ 200 MB, wajib berisi manifest) |

`POST /backups` mengembalikan `202` seketika lalu bekerja di latar belakang.
Pantau dengan `/backups/:id/status` (`stage`: preparing → collecting → archiving
→ encrypting → verifying → uploading → completed).

## Restore

| Method | Path | Keterangan |
|---|---|---|
| POST | `/restores` | `{backupId, components?, dryRun?}` → rencana + `token` (15 menit) |
| GET | `/restores` | Riwayat restore (maks 100) |
| GET | `/restores/:id` | Detail (token tidak dikembalikan) |
| POST | `/restores/:id/confirm` | `{token}` → jalankan restore |
| POST | `/restores/:id/cancel` | Batalkan sebelum konfirmasi |

## Scheduler

| Method | Path |
|---|---|
| GET | `/scheduler` |
| PATCH | `/scheduler` — `{enabled?, intervalMinutes?}` |
| POST | `/scheduler/enable` |
| POST | `/scheduler/disable` |

Nilai default `intervalMinutes` adalah **10**. Interval 1–1440 menit diterima;
perubahan tercatat di audit log.

## Monitoring

| Method | Path | Isi |
|---|---|---|
| GET | `/health` | publik, tanpa data sensitif |
| GET | `/status` | scheduler, database, storage, backup, telegram, checks |
| GET | `/server` | CPU, RAM, disk, load, uptime |
| GET | `/storage` | pemakaian arsip, kuota, sisa disk, status eksternal |
| GET | `/paths` | path relatif (diagnosa) |

## Log & audit

| Method | Path |
|---|---|
| GET | `/logs?level=&type=&limit=&since=` |
| GET | `/audit-logs?limit=&action=` |

Log disanitasi di sumber (`bot/lib/backup/log.js`): Bearer, token Telegram,
JWT, `ptlc_/ptla_`, email, dan pola `password=...` diganti `***`.

## Telegram

| Method | Path |
|---|---|
| GET | `/telegram/status` |
| GET | `/telegram/chats` — hanya chat yang benar-benar pernah mengirim update |

## Contoh

```bash
S="x-backup-secret: $BACKUP_ADMIN_SECRET"
B=https://api.gwenna.my.id/api/backup-system

curl -s -H "$S" $B/status | jq '.scheduler, .backups.last24h'
curl -s -X POST -H "$S" $B/backups -d '{"type":"database"}' | jq
curl -s -H "$S" "$B/backups?limit=5" | jq '.items[] | {id,status,sizeBytes}'
curl -s -X POST -H "$S" $B/backups/<id>/verify | jq '{ok,checksumMatches,entries}'
```

## Kode error

| HTTP | Arti |
|---|---|
| 401 | header secret tidak ada / salah |
| 404 | backup/restore tidak ditemukan |
| 409 | backup lain berjalan, atau arsip rusak/checksum tidak cocok |
| 413 | unggahan > 200 MB |
| 500 | kegagalan tak terduga (tercatat di log) |
