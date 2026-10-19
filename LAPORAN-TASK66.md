# LAPORAN TASK 66 — ENOSPC & PlayVideo gagal (2026-10-19)

## Ringkasan
Dua error yang dilaporkan ternyata **satu akar masalah**:

| Gejala | Penyebab |
|---|---|
| `.ping` / `.menu` → `ENOSPC: no space left on device` | `/tmp` di container adalah **tmpfs 100 MB** dan terisi 98 MB oleh sisa unduhan |
| `.playvideo` → "Semua sumber download gagal memproses video ini" | unduhan video (60 MB) + audio (38 MB) ditulis ke `/tmp` 100 MB; audio kehabisan ruang saat ditulis → gagal, dan berkasnya **tidak dihapus** |

Urutan kejadian (19/10 12.58–12.59 WITA): QByte mengunduh `qbyte-video-…mp4` **60 MB** lalu `qbyte-audio-…mp3` **38 MB** ke `/tmp` (total 98 MB dari 100 MB); penulisan audio gagal karena ruang habis; kedua berkas tertinggal (tidak ada `finally`); tmpfs penuh 100%; sejak itu *semua* penulisan (menu, ping, unduh berikutnya) melempar ENOSPC.

Catatan: ffmpeg di container **ada** (`/usr/bin/ffmpeg`), jadi bukan itu penyebabnya. Penggantian ke `@ffmpeg-installer` tetap dipasang sebagai pengaman kalau image panel berubah dan `PATH` hilang.

## Perbaikan yang dipasang (langsung ke server produksi)
Repo lokal adalah snapshot lebih lama dari kode yang berjalan, jadi patch diterapkan ke berkas live lewat Files API Pterodactyl, lalu bot di-restart. Salinan berkas hasil patch ada di `live-patch/2026-10-19-enospc/`.

| Berkas | Perubahan | sha256 |
|---|---|---|
| `scripts/boot.js` | `TMPDIR`/`TMP`/`TEMP` → `/home/container/tmp` (disk 32 GB) + sweeper tiap 10 menit (folder `*-job-*` > 15 menit, berkas lain > 2 jam) | `fd6ec611c22e…` |
| `lib/awang-ytdlp.js` | Satu folder kerja per unduhan, cek ruang sebelum unduh, **hapus folder saat gagal**, ekspor `cleanupYtDlpJob` & `tmpFreeBytes` | `e31783bd894c…` |
| `lib/scrape/YouTube.js` | QByte: folder kerja + `finally` selalu bersihkan (dulu hanya bersih kalau sukses); ffmpeg dipilih dari `@ffmpeg-installer` dengan fallback `PATH` | `b1a0fc2a4e26…` |
| `plugins/download/usanagi-play.js` | Bersihkan folder kerja yt-dlp; pesan error menyebut sisa ruang + penyebab provider | `797c898d598d…` |

## Bukti verifikasi
```
# log boot setelah restart
[boot] tmp: /home/container/tmp (disk-backed)
[boot] tmp: bersihkan 22 berkas sisa (24.7 MB)

# kapasitas
tmpfs 100M  2.7M  98M  3%  /tmp
/dev/vda1 49G 17G 32G 36%  /home/container

# uji jalur GAGAL (URL invalid) — dulu meninggalkan folder
error yang diharapkan: ERROR: [youtube] INI_SAH_TID: This video is unavailable
job dirs setelah uji: []          <- tidak ada sisa

# uji jalur SUKSES (unduhan HTTP nyata + ekstrak audio)
SUKSES: usanagi-test-job-1792396992478-0e380b31a3/usanagi-test.mp3 157 KB
folder kerja setelah cleanup ada? false
job dirs tersisa: 0
```

## Catatan sumber unduhan
Saat pengujian, sumber video membalas:
```
video 360 -> 429 "This video is busy right now, please try again in a minute"   (SaveTube)
video 480/720/1080/240/144 -> "Failed to get download URL"
audio 128 -> 200 (URL ada)
```
Artinya video di SaveTube sedang dibatasi (429 = rate limit per-IP, bukan error kode), audio normal. QByte (fallback video) juga sempat 429 karena percobaan berulang saat pengujian. Yang penting: **kegagalan itu sekarang tidak lagi mematikan bot dan tidak meninggalkan berkas**.

Pesan error `.playvideo` sekarang menyertakan penyebab provider + sisa ruang, mis. `(savetube-resolver: SaveTube gagal: Request failed with status code 429 | qbyte: download gagal HTTP 429)`.

## Status akhir
- `/tmp` = 3% (98 MB bebas), `/home/container` = **32 GB** bebas.
- Bot `d178bf71` restart bersih, `/api/health` 200, plugin 2039 termuat, 0 baris `ENOSPC` di log sejak restart.
