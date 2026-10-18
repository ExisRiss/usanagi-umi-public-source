# Task55 — AFK tetap aktif setelah pengguna kembali

## Penyebab

Ada tiga penyimpanan berbeda: `users[jid].afk` untuk command legacy, Map internal `awang-afk` untuk command native, dan `global.afkStorage` untuk versi impor. Handler utama hanya menjalankan hook legacy; `checkAfk` impor tidak dipanggil oleh compatibility dispatcher, dan pemeriksaan pada router native bukan jalur handler utama/Jadibot ini. Chat private biasa juga bisa keluar pada gate prefix/premium sebelum hook AFK.

## Perbaikan

- Semua command AFK legacy/native/impor memakai `core/awang-afk.js` yang sama, dengan state `afkStateV1` dalam database JSON existing. Tidak memakai database RPG/currency terpisah.
- Record legacy yang tersimpan dimigrasikan ke state bersama tanpa menghapus status aktifnya, lalu flag lama dinonaktifkan supaya tidak muncul lagi. Map impor dipindahkan bila masih tersedia pada proses. Map lama yang sudah hilang akibat restart sebelumnya tidak bisa direkonstruksi; bukan klaim recovery state volatile lama.
- Handler memeriksa aktivitas sebelum merge profil dan sebelum gate command private/premium/registrasi/group-only. PN/LID yang terverifikasi atau pasangan identitas tepercaya pada pesan ikut dibersihkan; angka LID tidak ditebak sebagai nomor telepon.
- Status dibersihkan sebelum `await` atau pengiriman, lalu database ditulis. Kegagalan notifikasi tidak membuat status AFK aktif lagi. Self-mode dapat tetap diam sambil membersihkan status.
- Semua alias `/afk`, `/away`, `/brb`, `usanagi-*` dan `umi-*` yang terkait mengikuti prefix aktif. Mengirim command AFK lagi tidak dianggap kembali sebelum status baru disetel.
- Teks, gambar, audio, stiker dan dokumen menjadi aktivitas. Reaction/protocol/history/broadcast/echo bot tidak dianggap pesan kembali. Timestamp yang lebih lama dari awal AFK tidak menghapus status baru.
- Mention dan quoted reply membaca state yang sama; tidak menghapus AFK orang yang ditag. Dedup hook/pesan dan batas jumlah target mencegah pemberitahuan ganda. Notifikasi menggunakan socket Jadibot yang menerima pesan, bukan main bot.
- Hook `_afk` lama menjadi adapter idempoten; tidak lagi bergantung pada free variable `conn` atau prototype `Number.toTimeString`.

## Pengujian

**236 tes PASS**:25 AFK service/unit +13 actual handler/AFK/SQLite +102 regresi dispatcher/AutoAI +96 backend/Realms/unified.

Tes mencakup seluruh alur set-AFK → chat biasa → mention setelah kembali untuk delapan alias, private non-premium/unregistered/group-only, PN/LID/device, alias belum terverifikasi, konflik phone identity, media tanpa caption, history/control events, re-AFK, restart JSON, send failure dan concurrency. AFK status tidak mengubah koin RPG.

Actual handler/plugin/SQLite dipakai, tetapi serializer dan transport WhatsApp masih mock. Ini bukan bukti penerimaan pesan pada perangkat pengguna.

## Deploy dan batasan

Baseline `f1b8ed7` diambil ulang setelah workspace reversion. Source lama produksi dibandingkan sebelum perubahan. Deploy code-only melalui panel dengan55target preflight/readback dan restart bot; tidak mengunggah database lama, session auth, atau website snapshot. Kredensial tidak dirotasi, main/autoread tetap OFF.

Verifikasi produksi dan safety scan dicatat dalam `STATUS-DEPLOY.md`; raw log/data hanya berada di penyimpanan privat.

Uji pengguna: aktifkan `{prefix}afk makan`, kirim chat biasa dari akun yang sama, lalu minta akun lain mention/reply. Seharusnya ada satu pemberitahuan kembali dan tidak ada lagi peringatan AFK untuk akun tersebut.
