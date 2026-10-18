# Task54 — Login MMORPG dan AutoAI dari pesan sendiri

## Perubahan

### 1. `{prefix}realms login` di chat pribadi

Handler lama mengembalikan `return` untuk semua chat pribadi non-premium sebelum plugin Realms dijalankan. Jadi instruksi meminta kode lewat private chat bertentangan dengan gate handler. Akses login/link/status/putus sekarang menjadi pengecualian sempit pada prefix aktif, termasuk sesi group-only dan pengguna belum registrasi. Self-mode, blacklist, plugin disabled, dan permission gameplay tetap berlaku. Gameplay private lain tidak dibuka sebagai efek samping.

Tes memakai handler asli, plugin Realms asli dan SQLite: pengguna non-premium mendapat kode, group mendapat instruksi private tanpa membocorkan kode, self-mode tetap menolak bukan-owner. Transport dan serializer WA di tes masih mock.

### 2. Login MMORPG memakai token akun website Jadibot

Buka **MMORPG → Masuk → Token akun website Jadibot**. Token diambil dari **Profil** website Jadibot yang sudah ada; tidak mengubah metode login dashboard.

- Pertama kali: masukkan token Jadibot **dan** kode sekali pakai dari `{prefix}realms login` di chat pribadi Jadibot aktif.
- Setelah terhubung: cukup token Jadibot. Kedua cara masuk menunjuk account ID dan progres SQLite yang sama.
- Tidak menebak nomor atau membuat akun RPG duplikat dari ID website. Token valid yang belum terhubung mendapat409 dengan instruksi penautan.
- Verifikasi token dilakukan server-to-server ke endpoint HTTPS platform yang tetap, bukan URL dari client. Ban/invalid token/outage gagal tertutup; role owner tidak menjadi bypass identitas.
- Tabel tambahan `realm_web_links` hanya menyimpan subject website hasil verifikasi, JID canonical internal, dan timestamp. Tidak menyimpan raw token.
- Bukti kode WA berlaku5menit/sekali pakai. Penautan, konsumsi kode dan pembentukan sesi atomic; konflik tautan tidak menimpa akun atau menghabiskan kode.
- `{prefix}realms putus` mencabut sesi, kode, dan tautan platform; progres tetap ada. Token platform tidak dirotasi oleh deploy.
- Login tetap POST JSON, origin/CSRF/rate-limit/body-size dijaga. Cookie sesi HttpOnly/SameSite Strict/Secure pada HTTPS; token tidak ada di URL, respons publik, atau localStorage.

UI login desktop/mobile diperbarui dalam frontend Realms yang diproxy melalui game server. Link MMORPG dan halaman token Profil pada website Jadibot existing dipertahankan; tidak menimpa website dengan snapshot lama.

### 3. Pesan sendiri `!!` untuk AutoAI Jadibot

Contoh dari akun WhatsApp yang dipakai sebagai Jadibot:

```text
!!buka menu
!!siapa developer lu
```

Contoh pertama diarahkan ke dispatcher menu asli, contoh kedua menjawab developer proyek **AlzRiss**. Keduanya dapat diselesaikan lokal tanpa memboroskan kuota Groq. Pertanyaan lain tetap memakai planner Groq sesuai konfigurasi yang ada.

- `!!` harus di awal, dengan isi tidak kosong; pesan sendiri biasa tidak memicu AutoAI meskipun mengutip/mention bot.
- Jalur ini khusus sesi Jadibot. Mention/reply dari pengguna lain tetap seperti sebelumnya.
- Prefix command aktif `/`, `!`, atau `!!` tidak menghalangi pemicu self-AI. Request yang dilewati/diduplikasi tidak jatuh ke dispatcher command biasa.
- ID outbound socket/relay dicatat bounded per-socket/TTL untuk menolak echo; generated-message flag dan dedup incoming tetap berlaku. Balasan AI dibersihkan dari awalan pemicu.
- AutoAI nonaktif, izin, rate limit, command berbahaya dan plugin nonaktif tetap dijaga. Tidak mengubah owner/key/premium.
- Regresi tambahan menemukan response wrapper dan RPG wrapper bertambah satu lapis tiap pesan. Metadata original-wrapper kini mempertahankan satu rangkaian stabil;100pesan berulang diuji tanpa pertumbuhan wrapper.

## Pengujian

- **198 automated tests PASS**:96backend/Realms/unified +102AutoAI/handler/native/similarity/intent.
- **8 browser checks PASS**, desktop1440 dan mobile390: kode WA, token belum tertaut, token+kode pertama kali, token-only login ulang menuju akun sama. Provider token dibuat fixture di sini; ini bukan login akun produksi pengguna.
- Browser memakai backend SQLite/HTTP asli lokal,0page errors; cookie dan pengosongan token diperiksa. Uji verifier mencakup invalid/banned/timeout/redirect/error tanpa kebocoran token.
- Source code-only dideploy melalui panel,49target guarded preflight/upload/readback. Restart kedua hanya untuk stabilitas wrapper setelah regression tersebut teridentifikasi. Website/game service tidak diredeploy atau direstart; UI Realms dilayani origin bot yang sama.

## Verifikasi produksi

49/49 source cocok dengan readback SHA256. Empat health endpoint dan10checks API/UI/aset/login-invalid/CSRF lulus; invalid token diverifikasi lewat platform nyata dan ditolak401. Enam pemeriksaan UI browser live desktop/mobile lulus tanpa page error, tetapi tidak melakukan login akun pengguna. Cache version JavaScript Realms diperbarui lewat HTML static guarded upload tanpa restart tambahan.

Dua Jadibot reconnect, main/autoread tetapOFF. Buffer setelah boot tidak mengandung readonly/identity/runtime error pada pemeriksaan; command umum tercatat, bukan bukti bahwa dua contoh self-AI atau login Realms pengguna sudah diterima perangkatnya.

## Batas penerimaan

Tes transport/serializer mock dan verifier fixture **bukan** bukti login akun website pengguna atau balasan fisik WhatsApp. Verifikasi live terpisah dicatat dalam STATUS-DEPLOY.md. Main bot OFF, autoread OFF, tanpa pairing; key/sesi/progres dipertahankan. Financial recovery guard dan pekerjaan MMORPG lain yang belum selesai tidak dibuka atau diklaim selesai.
