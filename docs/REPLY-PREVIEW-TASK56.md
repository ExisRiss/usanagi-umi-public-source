# Task56 — slash tambahan di depan balasan bot/AutoAI

## Penyebab dan perbaikan

Plugin `bot/plugins/_system/_allfake.js` membungkus `sendMessage` untuk plain text. Sebelumnya body selalu dibentuk dari URL website/script + `/` + 500 karakter U+2063 + dua baris kosong + isi jawaban. Ketika URL tidak terkonfigurasi, `/` menjadi karakter pertama yang terlihat. Ini bukan berasal dari parser prefix command atau jawaban Groq.

Body kini memakai `content.text` apa adanya. Metadata preview terpisah dari isi teks; mention/contextInfo/properti payload milik pemanggil juga dipertahankan. Tidak ada regex penghapus slash menyeluruh: command `/menu`, contoh dengan prefix owner/user, URL, path, kode dan baris baru tetap utuh. Media/control payload dan preview yang eksplisit diberikan pemanggil tetap melewati jalur semula.

Satu runtime file diubah. Tidak mengubah AI provider/key, prompt, konfigurasi prefix, database, session auth, AFK, website atau game. Restart diperlukan karena wrapper lama sudah terpasang pada socket aktif.

## Bukti otomatis

- Reproduksi source lama: 12 dari 13 tes preview gagal; satu tes passthrough media/control lulus. Source plugin produksi diunduh dan SHA cocok baseline sebelum perubahan.
- Sesudah perbaikan: **259 tes PASS** = 13 preview unit + 25 AFK unit + 125 dispatcher/AutoAI/AFK (termasuk 10 tes preview dispatcher baru) + 96 backend/Realms/unified.
- Tes baru mencakup URL kosong/berisi/trailing slash, text exact, U+2063, metadata/mention, quoted reply, return transport ID, multi-destination, wrapper sekali pasang, media/control passthrough, dan rewrite contoh command dengan prefix aktif.
- Actual handler + actual preview hook + actual AutoAI planner diuji untuk `!!siapa developer lu`, `!!buka menu`, respons command biasa, serta jawaban percakapan provider fixture. Prefix `/`, `!`, `!!` diperiksa. SQLite nyata; serializer, transport WA dan respons provider tetap fixture/mock.

## Deployment dan batas verifikasi

Deploy code-only melalui panel menggunakan 56 target manifest dengan baseline SHA dan readback; hanya plugin preview yang berbeda dan diunggah, kemudian restart bot. Main bot OFF, autoread OFF, tanpa pairing baru. Key, sesi dan progres pengguna tidak dipulihkan dari snapshot lama atau dirotasi.

Hasil health/readback/runtime akhir dicatat di `STATUS-DEPLOY.md`. Tes transport mock dan SHA produksi bukan bukti pesan sudah diterima pada perangkat pengguna; acceptance WhatsApp fisik masih perlu pengecekan pengguna.

Cek pengguna: kirim `!!siapa developer lu`, `!!buka menu`, dan satu command biasa. Balasan baru tidak lagi mendapat slash/baris tambahan dari preview. Slash yang memang merupakan contoh command, misalnya `/menu` ketika prefix aktif `/`, tetap benar dan tidak dihapus.
