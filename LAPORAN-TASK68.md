# LAPORAN TASK 68 — Fitur kudeta & akses penuh owner Jadibot (2026-10-19)

## Laporan awal
`.kudeta` / `.sitagrup` (Sistem Kudeta Grup) tidak bisa dipakai oleh user yang punya bot sendiri (Jadibot) dan sudah ber-role owner di bot-nya.

## Akar masalah
1. Plugin `umi-sitagrup.js` (alias `sitagrup` **dan** `kudeta`) ditandai `handler.rowner = true`.
2. `handler.js` hanya mengizinkan `rowner` bila `isROwner` — yaitu nomor developer yang dikunci di config, **bukan** owner sesi Jadibot.
3. Owner Jadibot statusnya `isOwner` (nomornya ada di `ownerNumbers` sesi, sudah terverifikasi ada di semua sesi), tetapi gate `rowner` menolaknya dengan pesan "command ini hanya untuk developer bot".

Akibatnya seluruh fitur `rowner` (termasuk kudeta) mati untuk mereka, sementara fitur `owner` biasa jalan.

## Perbaikan
### 1. Kebijakan terpusat — `lib/owner-policy.js`
Satu daftar pengecualian (`PLATFORM_ONLY_PLUGINS`). Semua plugin lain otomatis terbuka untuk owner Jadibot, jadi plugin baru tidak perlu didaftarkan.

| Dikunci untuk owner Jadibot | Alasan |
|---|---|
| `usanagi-boost.js` | menaikkan harga saham di website trading |
| `usanagi-jadibotconfig.js` | mengubah konfigurasi sesi Jadibot lain |
| `owner-gp.js`, `owner-addplugin.js` | memasang/mengambil plugin (kode global) |
| `umi-dellalluser.js`, `umi-delpremall.js` | hapus user/premium seluruh platform |
| `umi-backupdb.js`, `umi-savedb.js` | backup/unduh database seluruh platform |
| `usanagi-delowner.js` | hapus owner tambahan di database platform |
| `umi-gantiapi.js` | ganti API key global |
| `umi-bcgc.js`, `umi-swgcv2all.js` | broadcast/status ke semua grup |
| `umi-public.js`, `self.js`, `umi-modesewa.js`, `umi-sistemenergi.js`, `umi-setallmenu.js` | setting global semua sesi |

Yang tetap **boleh** (contoh): `.sitagrup`/`.kudeta`, kick/promote/demote, leave, welcome, autoread/autotyping, setmenu, setprefix, addowner (disimpan per sesi), semua plugin game/RPG, dll.

### 2. Handler
```js
// fitur website/platform tetap milik developer
if (plugin.platformOnly && botConfig?.type === 'jadibot' && !isROwner) fail('platform', m, this)
// owner jadibot boleh semua plugin rowner kecuali daftar di owner-policy
const jadibotOwnerFull = canUseOwnerPlugin(pluginBasename, { isROwner, isJadibot, isOwner })
if (plugin.rowner && !isROwner && !jadibotOwnerAllowed && !jadibotOwnerFull) fail('rowner', m, this)
```
Pesan baru: “fitur ini bagian dari website/platform, jadi hanya developer bot yang bisa memakai”.

### 3. Penanda eksplisit
- `usanagi-boost.js`, `usanagi-jadibotconfig.js`, `self.js` → `handler.platformOnly = true`
- `umi-sitagrup.js` → `handler.jadibotOwner = true`

## Bukti
Unit test baru `bot/tests/owner-policy.test.mjs` — **8 pass / 0 fail**.

Verifikasi di server produksi (`node verify-owner.mjs`):
```
sitagrup (kudeta)    BOLEH | platformOnly=false
boost saham          DITOLAK | platformOnly=true
hapus semua user     DITOLAK | platformOnly=true
add owner            BOLEH | platformOnly=false
kick/promote grup    BOLEH | platformOnly=false
menu                 BOLEH | platformOnly=false
plugin sitagrup -> rowner: true | jadibotOwner: true | ada alias kudeta: true
plugin boost    -> owner: true | platformOnly: true
```

Hash live: `owner-policy.js` `74b9cdf7f946` · `handler.js` `9b3260b1709e` · `usanagi-boost.js` `ca6927f5cf23` · `usanagi-jadibotconfig.js` `69e854a04bb5` · `self.js` `52379b737dbc` · `umi-sitagrup.js` `9a3c58ef4078`.
Bot `d178bf71` restart bersih, `/api/health` 200, plugin 2039 termuat.

## Catatan pemakaian
- Nomor owner harus terisi di **website → Settings → Nomor Owner** (semua sesi sudah punya, plus nomor developer `6287…432` yang selalu terkunci).
- `.sitagrup ini` butuh bot admin penuh di grup.
- Kalau ada fitur yang menurutmu website-related tapi masih terbuka, tambahkan nama berkasnya ke `PLATFORM_ONLY_PLUGINS` di `lib/owner-policy.js`.
