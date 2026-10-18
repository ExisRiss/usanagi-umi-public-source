# Task53 — Jadibot tidak merespons (18 Oktober 2026)

## Penyebab dan perbaikan

1. Wrapper outbound RPG dari Task51 memakai assignment langsung ke `reply`. Helper socket sebenarnya adalah own property non-writable/non-configurable; helper pesan dapat diwarisi dari prototype readonly. Akibatnya before-hook berhenti dengan `Cannot assign to read only property 'reply'`, meskipun sesi WhatsApp terhubung.
2. Saat restart untuk hotfix, repair database lama menulis `exp`/currency/cooldown ke identitas LID yang belum terverifikasi. Guard authority menolak dengan 409 dan proses masuk boot loop sebelum API siap. Ini bukan sekadar keterlambatan tunnel.
3. Pemantauan lanjutan menemukan default initializer dan finalizer pesan juga menulis EXP ke held LID. Identitas tersebut tidak boleh mengubah RPG, tetapi tidak semestinya membuat perintah umum gagal sebelum dispatch. Handler/default initializer sekarang hanya memperbaiki field non-RPG ketika authority aktif; guard progression tetap berlaku.

`wrapRpgOutbound` sekarang memeriksa descriptor, menggunakan `Object.defineProperty` untuk shadow inherited helpers, memperbarui value-only bila own property writable/non-configurable, dan melewati helper immutable yang mendelegasikan ke transport socket. Objek non-extensible tidak dipaksa ditambah property. `relayMessage` juga di-wrap. Flush sebelum transport dan wrap-once tetap berlaku.

Repair startup kini tidak menyentuh field progression/cooldown legacy ketika authority RPG aktif. Limit/premium non-RPG tetap diperbaiki. Guard untuk identitas belum terverifikasi **tidak dibuka**; identitas tidak digabung berdasarkan tebakan dan progres tidak direset.

## Deploy dan pemeriksaan

- Baseline source Task52 dipulihkan dari Git setelah workspace kembali ke snapshot lama; credential panel diambil dari vault existing. Hanya credential panel diekstrak, bukan database/sesi lama.
- Tiga deploy code-only terkontrol: wrapper, boot repair, kemudian message defaults/finalizer setelah error held identity terlihat pada pesan baru. Masing-masing melalui preflight/readback dan restart panel. Tidak ada redeploy website/game atau pairing main.
- Readback akhir 44/44 source produksi cocok; empat file runtime yang diubah:
  - `/lib/rpg/unified-runtime.js`: `6b5b9eb581bd5b53337d080c365ec723a977002025429b97eb9885d2f4b31184`
  - `/main.js`: `0642a28fac6bb9613c9bd1b1eca17d83775dd7a5ae6735259600c5b5837d83fc`
  - `/handler.js`: `995c93d73b5bc27fa27a7bc0061dbcd8c05ecdeae811d410c4793096e62a32ee`
  - `/lib/database.js`: `cb3ab113fe3ab9290b3f9c446e412a67d77cb4c7ac065d805c5dc5eb80479f1b`
- Setelah deploy ketiga: API langsung, dua website backend bridge, dan game health HTTP200/JSON. Main OFF, autoread OFF, pairing tidak aktif.
- Runtime owner-agent: dua jadibot terhubung, 2.039 plugin, uptime59detik pada pemeriksaan. RPG aktif:245canonical/289source/292alias/199held; angka berubah dari aktivitas live, bukan reset atau tebakan linking. Groq configured; wallet/trading tidak disentuh.
- Buffer baru114chunk:16chat dan4command tercatat,0readonly/identity/runtime/error-message. Ini bukti handler menerima perintah lagi, **bukan bukti balasan diterima di perangkat pengguna**. Buffer sesudah deploy kedua sebelumnya masih memperlihatkan6error message-initializer/finalizer, sehingga dilakukan deploy ketiga; tidak dicampur dengan hasil akhir.
- Pembacaan log pertama setelah deploy pertama sempat menerima HTML502. File lama tidak dijadikan bukti pasca-fix. Fetch berikutnya memvalidasi HTTP/content-type/schema sebelum menulis file log baru. Raw log/key/pesan disimpan privat, bukan di repo.

## QA

**78 tes PASS**: 41 unified integration/store/runtime + 37 handler/native dispatch/similarity.

Regresi mencakup descriptor socket readonly dan inherited message reply, frozen quoted reply yang mendelegasikan ke transport, configurable getter, direct relay/idempotent wrapping, actual startup repair terhadap held/canonical SQLite proxies, dan actual Jadibot handler dari before-hook → command → reply melalui socket yang benar. Kasus held LID mereproduksi kegagalan sebelum patch, lalu lulus setelah patch dengan actual default initializer; mutation guard tetap menolak perubahan RPG. Transport dan serializer pada handler test masih mock; bukan acceptance WhatsApp fisik.

```sh
node --loader ./bot/tests/realms-sqlite-loader.mjs --test \
  bot/tests/unified-integration.test.mjs bot/tests/unified-runtime.test.mjs bot/tests/unified-rpg.test.mjs
node --loader ./bot/tests/realms-sqlite-loader.mjs --loader ./bot/tests/mock-native-loader.mjs --test \
  bot/tests/unified-dispatch.test.mjs bot/tests/native-dispatch.test.mjs bot/tests/similarity-response.test.mjs
```

## Batas penerimaan

Hotfix sudah live, runtime sehat, dan regresi otomatis lulus. Acceptance balasan command pada WhatsApp pengguna tetap perlu: kirim `{prefix}menu` dengan prefix aktif sesi/chat. Jangan menyamakan status connected, health200, atau mock transport dengan bukti pesan balasan diterima. Tidak mengklaim seluruh fitur MMORPG selesai.
