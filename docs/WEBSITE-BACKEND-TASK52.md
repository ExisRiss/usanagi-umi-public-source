# Task52 — perbaikan koneksi website, API dan Jadibot

18 Oktober 2026. Perbaikan telah dideploy dan diperiksa melalui kedua domain website. Tidak ada restore database lama, rotasi credential atau pairing bot utama.

## Penyebab dan perbaikan

1. **Origin backend produksi masih menunjuk alokasi HTTP server lama.** API HTTPS langsung sehat, tetapi `/api/health` melalui website mengembalikan502. Environment `UMI_API_ORIGIN` diperbarui ke `https://api.gwenna.my.id`, kemudian deployment baru dibuat. Tidak ada key lain diubah.
2. **Kontrol bot utama/autoread berada di luar closure aplikasi.** Helper seperti `$`, `post`, `busy` dan pemeriksaan role tidak dapat diakses. Fungsi dipindahkan ke scope yang benar; status main OFF tampil NONAKTIF, bukan dianggap backend gagal.
3. **CSP memblokir inline JavaScript dan style.** OAuth Google/hero stats dipindahkan ke script same-origin eksternal. Sebanyak32 deklarasi style HTML dipindahkan ke24 rule CSS, tanpa melonggarkan CSP. Style QR wallet juga menjadi class. Struktur halaman, stack, aset dan desain existing dipertahankan; bukan overwrite ZIP website tua.
4. **Batas waktu browser lebih pendek daripada relay.** Browser kini65detik, backend relay45detik (health8detik). Transport mencakup timeout membaca body, menolak redirect yang membawa credential, menormalkan respons HTML/kosong yang tidak valid, dan tidak mengulang mutasi POST. Error autentikasi/maintenance asli tetap dipertahankan.
5. **Wallet gagal dimuat tidak boleh tampil seolah saldo nol.** Placeholder menjadi `—`, status pemulihan ditampilkan, top-up dinonaktifkan saat read gagal, dan riwayat tidak dinyatakan kosong. Guard finansial server tidak dibuka.
6. **Feedback lama menunjukkan spam metadata grup/rate-overlimit.** Cache per socket dipakai bersama handler dan outbound Baileys: single-flight, TTL30detik, backoff60detik, invalidasi anggota/grup/koneksi, salinan metadata terisolasi dan batas256entry. Metadata kedaluwarsa tidak dipakai sebagai fallback izin. Cache tidak dibagi antarbot.
7. **Handler perubahan anggota dapat menghasilkan TypeError sekunder ketika metadata gagal.** Ditambah guard metadata dan normalisasi participant berbentuk string/object.
8. URL dasar Unified API/security diperbarui ke website produksi yang sekarang. Helper deploy kini memeriksa origin HTTPS, health backend sebelum deployment, lalu health website-ke-backend sesudah READY.

## Deploy dan infrastruktur

- Baseline workspace yang mundur dipreservasi sebagai patch privat, lalu diambil ulang source published `f47f4a4`. HTML dan app.js live sebelum edit cocok byte-for-byte dengan baseline tersebut.
- Website READY: `dpl_CWwy2w2yAja5v8jKG46rNJTyZXUb`. Kedua domain menyajikan aset versi `20261018-backend52` yang cocok dengan source.
- Bot: tiga source runtime diperbarui dependency-first dengan preflight drift, backup kode privat, SHA256 readback dan restart panel. Total43target source bot/game cocok tepat setelah deploy.
- Tunnel existing sehat: hostname API→port2176 dan game→port4470. Routing diverifikasi dari konfigurasi runtime dan HTTP live; tidak mengganti credential atau menjalankan tunnel `alzriss-okta` dengan token. Game tidak direstart tanpa alasan.
- Bot utama OFF, autoread OFF, tanpa pairing; satu jadibot reconnect. Log setelah restart tidak menunjukkan SyntaxError, TypeError, import error atau ENOSPC pada buffer yang diperiksa.
- Uji tulis/readback/hapus file probe berhasil. Tidak menghapus data/auth untuk mengosongkan ruang. Penggunaan disk yang dilaporkan panel sekitar796MiB bot dan40MiB game; ini bukan jaminan kapasitas host tanpa batas.

## Verifikasi

| Kelompok | Hasil |
|---|---:|
| Unit transport/frontend scope/CSP | 10 PASS |
| Unit cache/event grup | 9 PASS |
| Regresi callback TriPay raw payload | 1 PASS |
| Browser desktop/mobile dengan akun/API fixture terisolasi | 36 PASS |
| HTTP live kedua domain, API, tunnel, auth/CSRF dan recovery guard | 33 PASS |
| Browser live desktop/mobile: landing, login, API same-origin, proteksi owner | 12 PASS |
| Entry OAuth dan provider Google | HTTP200 →302 ke Google |
| Readback source runtime | 43/43 cocok |

Tidak ada page error/CSP error pada pemeriksaan browser tersebut. Uji OAuth berhenti sebelum login akun Google. Pengujian halaman owner terautentikasi memakai fixture, **bukan klaim login owner nyata atau acceptance WhatsApp fisik**. Tidak mengirim pairing/perintah QA ke WhatsApp.

## Feedback

88 laporan terakhir diperiksa. Dari16 yang belum ditandai selesai:
- 9 incident getter `mentionedJid`/ENOSPC ditandai resolved setelah verifikasi perbaikan source live atau uji storage host pengganti.
- 4 laporan rate-overlimit ditandai monitoring dengan catatan cache/backoff sudah dideploy. Pembatasan eksternal WhatsApp tetap berlaku.
- 3 laporan manual lain tidak ditutup paksa. Perlindungan nomor milik akun lain tidak dibypass.

Update menggunakan compare-and-swap metadata. Identitas, isi laporan asli dan audit tidak dihapus; salinan sebelum perubahan disimpan privat.

## Progres, backup dan batasan

- Authority RPG tetap aktif:220profil. Pemeriksaan akhir menunjukkan236source/alias dan204LID ditahan; ada satu linking tepercaya tambahan dari aktivitas runtime dibanding snapshot Task51. Tidak memaksa penggabungan identitas atau mengembalikan angka ke snapshot lama.
- AutoAI Groq tetap configured/enabled, tanpa mengubah key/model.
- Snapshot SQL/JSON konsisten terbaru diambil lewat endpoint owner yang menggunakan gate. Integrity SQLite `ok`,220profil/236source pada snapshot.
- Delapan file data/config non-session dienkripsi ke Blob PRIVATE `private-migrations/task52/runtime-current-20261018.enc`:73575byte, download/decrypt byte-roundtrip cocok. Tidak berisi auth WhatsApp; sesi existing dipertahankan dan kebijakan cleanup disconnect≥15menit tidak diubah.
- Wallet/order/trading historis masih tidak tersedia;503guard tetap diperlukan, market tetap200. Tidak mengarang saldo atau membuka mutasi finansial untuk menyembunyikan error.
- Perbaikan ini tidak berarti seluruh master MMORPG sudah lengkap atau layanan eksternal dijamin tidak pernah gagal. Yang diklaim adalah hasil pemeriksaan di atas.

Artefak sanitized: `deploy-check/task52/`; key, konfigurasi asli, feedback/log mentah dan backup di `.secrets/task52/`, bukan repo publik.
