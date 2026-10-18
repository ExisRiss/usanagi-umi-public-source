# Task58 — /amfind timeout pada tautan TikTok

## Diagnosis

Plugin produksi cocok dengan baseline `4a32f86`. Implementasi lama hanya memanggil `bintangapi.my.id/api/amfind/` lewat Axios dengan timeout 30 detik, lalu menampilkan pesan error mentah. Tidak ada jalur alternatif untuk caption, komentar atau balasan komentar.

Tautan pendek yang dilaporkan dapat di-resolve ke video publik. Endpoint amfind lama tidak merespons selama probe terkontrol 16 dan 18 detik, termasuk ketika sudah diberi URL canonical; homepage penyedianya tetap 200. Jadi bukan sekadar kesalahan slash terakhir atau website penyedia seluruhnya mati. Metadata dan komentar publik video dapat dibaca melalui jalur lain.

Preset yang dimaksud benar-benar ditemukan dalam **balasan komentar kreator**, bukan caption atau komentar tingkat atas. Balasan itu juga menunjuk kanal kreator untuk XML; tautan kanal tidak diklaim sebagai file XML langsung.

## Perbaikan

- Ganti ketergantungan tunggal pada endpoint lama dengan pencarian caption, komentar dan balasan publik. TikWM dipakai dengan fallback halaman/API publik TikTok, tanpa cookie, kredensial pengguna atau bypass login.
- Prioritaskan thread permintaan preset dan komentar kreator, bukan hanya thread paling ramai. Identitas penulis dibandingkan dengan author video; tautan pengguna lain diberi keterangan belum terverifikasi sebagai preset kreator.
- Format plain URL, trailing slash, Markdown link dan URL canonical diterima. Host/path/protocol/port/credentials divalidasi; redirect ke host luar/private ditolak sebelum diikuti. Video ID tidak diubah menjadi Number dan respons ID lain ditolak.
- TikWM teramati membatasi satu request/detik. Antrean modul memberi jarak 1,2 detik antar-request lintas pencarian, retry rate-limit maksimal satu kali, maksimum dua pencarian aktif, dedup permintaan identik, serta cache positif lima menit dengan batas 64 key. Tidak melakukan retry cepat berulang.
- Anggaran pencarian default 24 detik, timeout tiap request 5,5 detik, batas empat halaman komentar dan sepuluh thread balasan. Respons berukuran besar dibatasi. Hasil parsial/layanan gagal tidak diubah menjadi klaim bahwa preset tidak ada dan tidak disimpan dalam cache negatif.
- Link diekstrak hanya dari domain/path preset/file-share yang dikenali. Tidak mengunduh atau menjalankan berkas. Kanal XML diberi label terpisah; tidak mengarang tautan preset.
- Balasan berupa teks dan tautan, sehingga unduhan thumbnail tambahan tidak menahan hasil. Reaksi loading/sukses tidak ditunggu. Error internal/HTML provider tidak diteruskan mentah ke chat. Alias `amfind`/`amfinder` dan `{prefix}` aktif tetap berlaku.

## Pengujian

**337 tes PASS** = 103 unit/helper/regresi + 128 dispatcher/AutoAI/AFK + 96 backend/Realms + 10 transport website. Dari jumlah tersebut, 36 tes amfind/helper/plugin dan tiga actual-dispatcher/preview/amfind merupakan tambahan Task58.

Cakupan mencakup input kedua format pelapor, redirect berbahaya, host lookalike, kredensial dalam URL, batas ukuran, response-ID mismatch, creator attribution, XML-channel distinction, pagination/cursor berulang, thread limits, provider fallback, global pacing, rate-limit retry, cache/dedup, busy limit, abort/hang, prefix/alias dan reaksi yang macet. Parser Acorn terpisah juga memvalidasi dua file runtime sebagai ES2020; tes sumber tidak menambah ketergantungan runtime.

Fixture memakai transport WhatsApp/serializer/provider mock; regresi lain memakai SQLite dan filesystem sesuai test suite yang sudah ada. Tidak mengirim pesan uji ke grup pengguna.

## Bukti jaringan nyata dan produksi

- Lookup nyata dari workspace: tautan pelapor menghasilkan preset kreator dalam 3.139 ms, membaca 49 komentar + 3 balasan pada halaman pertama. Varian Markdown/trailing slash memberi hasil yang sama.
- Setelah guarded code-only deploy dan restart, diagnostik dijalankan **di server bot produksi** melalui route owner yang diautentikasi. `tools/check-amfind.mjs` hanya membaca layanan publik dan menjalankan plugin dengan transport WA mock, tanpa mengubah data akun/game/sesi.
- Dua proses dingin terpisah: URL dengan slash menghasilkan `found` dalam **3.143 ms**, URL tanpa slash dalam **2.993 ms**. Keduanya menemukan URL preset yang sama, source `reply`, `isAuthor: true`; plugin menghasilkan tepat satu balasan yang memuat semua tautan.
- Ini bukti provider dan kode baru bekerja dari jaringan server produksi, **bukan** bukti pesan sudah diterima pada perangkat WhatsApp pelapor.

## Deployment

Manifest 59 → 62 target: plugin, helper baru dan diagnostik read-only. Guarded baseline/readback SHA, tanpa upload DB/config/session/website snapshot atau rotasi key. Dua file fitur dan satu file diagnostik diunggah; bot direstart.

Verifikasi: 62/62 SHA produksi cocok; empat health endpoint 200 JSON; delapan Jadibot tersambung, main/autoread OFF, tidak ada pairing main. Pada uptime 34 detik, 175 chunk/32 chat/3 command tidak memuat runtime/readonly/identity/import/preview/metadata-rate/cleaner/AFK error. Detail evidence dan safety tercatat di `STATUS-DEPLOY.md`; raw provider payload hanya di penyimpanan privat.
