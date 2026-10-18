# Task57 — audit dan perbaikan laporan Feedback

## Audit produksi (18 Oktober 2026)

Dibaca 88 laporan dari tabel Feedback yang digunakan website: 81 sudah resolved dan 7 belum ditutup. Tujuh tersebut terdiri dari empat record otomatis (dua kejadian menu/AFK `rate-overlimit`, masing-masing dikirim kepada dua penerima), satu laporan konflik nomor saat pairing, satu laporan respons lambat, dan satu laporan nonteknis tanpa gejala error. Laporan terbaru dalam hasil audit tercatat 18 Oktober 2026 04:52 UTC; tidak diklaim sebagai kejadian baru setelah Task56.

900 chunk console awal tidak memuat rate-overlimit, readonly-property, runtime exception, ENOSPC atau error preview. Diagnosis tambahan diperoleh dari source produksi dan reproduksi terisolasi, bukan dengan mengirim command ke chat pengguna.

## Penyebab yang diperbaiki

### 1. Riwayat grup membanjiri metadata WhatsApp

`store.js` sebelumnya mengambil metadata untuk setiap grup di event `chats.set`. Reproduksi baseline menghasilkan 500 query untuk 500 grup; sesudah perbaikan menghasilkan nol query eager. Nama/metadata lokal tetap disimpan, sementara pemeriksaan izin dan enkripsi outbound mengambil metadata segar melalui cache/dedup on-demand yang sudah ada.

Cache mendapat timeout 8 detik, backoff singkat untuk timeout dan backoff rate-limit yang tetap berlaku. Hasil terlambat tidak mengisi cache setelah timeout. Tidak menggunakan anggota/admin kedaluwarsa atau mengarang metadata agar pesan terlihat berhasil. Pembatasan eksternal WhatsApp tetap mungkin terjadi; ini bukan jaminan pengiriman selalu berhasil.

### 2. Reservation website tertinggal setelah sesi kedaluwarsa

Cleaner lama menghapus folder auth, tetapi tidak menghapus registry `jadibot-platform.json` dan backup website `data/jadibot-backups`. Reproduksi membuktikan folder hilang sementara kepemilikan nomor dan backup masih ada. Audit read-only produksi menemukan 11 reservation, 7 folder sesi, dan 4 reservation tanpa folder.

API dan cleaner kini memakai satu registry dalam proses. Cleaner mempertimbangkan folder, reservation tanpa folder, dan backup orphan. Sesi offline 15 menit dibersihkan bersama folder backup, isi arsip backup lokal, backup website dan reservation. Orphan yang waktu putusnya tidak diketahui mendapat masa tenggang penuh sejak terdeteksi. Sesi aktif dan auth bot utama tidak dihapus.

Pembersihan mengunci operasi sesi sementara; shutdown/gagal menghapus backup/gagal menulis registry mempertahankan reservation dan dijadwalkan ulang. Path backup divalidasi, registry rusak gagal tertutup tanpa direset menjadi kosong. Pelepasan reservation bukan pemindahan sesi akun lain: folder kredensial lama dihapus dahulu, dan pairing baru tetap membutuhkan verifikasi WhatsApp. Guard ownership API tidak dilonggarkan.

Probe setelah deploy membuktikan empat reservation orphan memiliki timer putus yang persisten dan masih dipertahankan selama masa tenggang. Belum diklaim bahwa penghapusan produksi sudah terjadi atau pelapor berhasil pairing; proses terisolasi menguji seluruh siklus termasuk arsip tar nyata.

### 3. Status mengetik dapat menahan balasan AutoAI

Pengiriman presence `composing`/`paused` kini nonblocking dan aman terhadap sync throw, rejected promise maupun request yang tidak selesai. Jeda buatan dibatasi 0,8 detik dan nol saat auto-typing sesi dimatikan. Ini bukan batas total respons Groq/jaringan. Jadwal eksplisit langkah command tetap dipertahankan.

## Pengujian dan deploy

**298 tes PASS**:
- 29 cache/history/presence/registry/retention (20 tes baru dan 9 regresi cache).
- 38 AFK/preview unit.
- 125 dispatcher/AutoAI/AFK, termasuk penerapan prefix dan balasan tanpa slash Task56.
- 96 backend/Realms/unified.
- 10 transport website.

Fixture retention mencakup sesi aktif/offline/orphan, grace period, reconnect, aktivitas pengguna, lock cleanup, kegagalan shutdown/disk/backup, path traversal, registry korup dan preservasi sesi lain/main. SQLite dan filesystem/tar nyata dipakai; WhatsApp serializer/transport/provider masih mock pada tes terkait.

7 source existing didownload dan dibandingkan dengan baseline `dc8e98c` sebelum deploy. Manifest 59 target memakai SHA guard, readback dan restart bot; hanya tujuh runtime file berubah. Website/game tidak di-redeploy dari snapshot, database RPG tidak diunggah, key tidak dirotasi. Penghapusan sesi kedaluwarsa dijalankan cleaner sesuai kebijakan 15 menit, bukan reset data manual.

Verifikasi setelah restart: 59/59 SHA cocok, empat health endpoint 200 JSON, tujuh Jadibot tersambung, main/autoread OFF dan tanpa pairing main. Pada uptime 34 detik, 288 chunk log/32 chat tidak menunjukkan runtime/readonly/identity/rate-limit/cleaner/preview/import/AFK error. Sampel tersebut bukan acceptance WhatsApp fisik.

## Tindak lanjut Feedback

Tujuh catatan perbaikan/triage disimpan dengan compare-and-swap metadata agar tidak menimpa perubahan bersamaan, lalu dibaca ulang. Enam laporan teknis tetap monitoring dengan batas verifikasi dijelaskan; satu laporan nonteknis ditutup setelah ditinjau, bukan diklaim sebagai bug yang diperbaiki. 81 laporan yang sebelumnya resolved tidak diubah. Hasil akhir: 82 resolved, 6 monitoring, 0 open, tanpa menghapus riwayat laporan.

Raw laporan, identitas, log dan credential tetap privat. Detail akhir dan safety dicatat di `STATUS-DEPLOY.md`.
