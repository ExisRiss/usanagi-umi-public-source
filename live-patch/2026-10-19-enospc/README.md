# Patch ENOSPC 2026-10-19 (langsung ke server produksi)

Repo ini adalah snapshot lebih lama dari kode yang berjalan di panel, jadi patch
diterapkan langsung ke berkas live lewat Files API Pterodactyl (bukan deploy repo).

Berkas & tujuan:
| Berkas live | Perubahan |
|---|---|
| `scripts/boot.js` | TMPDIR/TMP/TEMP → `/home/container/tmp` (disk), sweeper tiap 10 menit, buang folder kerja `*-job-*` > 15 menit |
| `lib/awang-ytdlp.js` | Satu folder kerja per unduhan, cek ruang sebelum unduh, hapus folder saat gagal, ekspor `cleanupYtDlpJob`/`tmpFreeBytes` |
| `lib/scrape/YouTube.js` | QByte: folder kerja + `finally` selalu hapus, ffmpeg dari `@ffmpeg-installer` (sebelumnya `spawn('ffmpeg')` gagal karena tidak ada di PATH) |
| `plugins/download/usanagi-play.js` | Bersihkan folder kerja yt-dlp, pesan error menyebut sisa ruang & penyebab provider |

sha256 (saat dipasang):
- boot.js `fd6ec611c22e…`
- awang-ytdlp.js `e31783bd894c…`
- usanagi-play.js `797c898d598d…`
- YouTube.js `b1a0fc2a4e26…`
