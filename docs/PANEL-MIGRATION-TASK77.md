# Migrasi ke panel baru — Task77 · 20 Oktober 2026

Panel lama (`ikyyxbeyy-panel.voltxyz.my.id`, `beyypanel.serverprivv.my.id`,
`beyy.ikynebula.my.id`) sudah tidak menjawab (DNS/HTTPS 000). Semua layanan
bot, API, dan game web pindah ke:

**Panel:** `https://beyy-ganteng-store-panel.voltxyz.my.id`
**Node:** NORTH-BERGEN · **SFTP:** `beyy-ganteng-store-node.voltxyz.my.id:2022`

| Peran | Server | UUID | Port internal |
|---|---|---|---|
| Bot + API + game web | `serverjadibot-unlimited` (`f7811b23`) | `f7811b23-4239-488d-9994-3a69d443e2a2` | 2176 (API), 3900 (game) |
| Cadangan game | `servergame-unlimited` (`b6a82d5f`) | — | belum dipakai |

Kedua server memakai egg Node.js generik (`ghcr.io/parkervcp/yolks:nodejs_23`,
Node v23.11.1). Egg menjalankan `npm install` bila ada `package.json`, lalu
`CMD_RUN` (`npm start`). Client API **tidak bisa** mengubah startup
(`PUT /api/client/servers/{id}/startup` → 405), jadi seluruh urutan start
diatur dari `package.json` → `bash start-panel.sh`.

## Isi container bot

| Berkas | Fungsi |
|---|---|
| `start-panel.sh` | pasang `cloudflared` bila belum ada, jalankan tunnel API `72975e9b`, set `UMI_REALMS_BOT_PORT=2176`, lalu `node scripts/companion.js` |
| `scripts/companion.js` | menyalakan game web `:3900`, tunnel game `6f82f294`, dan `scripts/boot.js` (bot) |
| `config.js` | `global.owner`, `global.mainBot`, `global.jadibotPlatform` (port 2176, Supabase, `ownerEmails`, `allowedOrigins`) — tidak di-commit |
| `.tunnel.env`, `.backup-export.env`, `.error-report.env`, `.main-bot.env`, `.owner-console-relay.env` | rahasia runtime (chmod 600) |
| `game/` | `game.js`, `game.html`, `trading*.html`, `empire*`, `realms-proxy.js`, `security.js`, `assets/` (73 berkas) |
| `tunnel-games.yml` + `tunnel-games-creds.json` | tunnel game; ingress hanya `game.gwenna.my.id → 127.0.0.1:3900` |

## Alamat publik

| Layanan | URL | Bukti |
|---|---|---|
| API bot | `https://api.gwenna.my.id` | `/api/platform/health` 401 (gerbang auth), token invalid → `Auth 403` Supabase |
| Game web | `https://game.gwenna.my.id` | `/health` 200 `v2.2.0`, 7 game |
| RPG | `https://game.gwenna.my.id/realms` | 200 (proxy ke port 2176) |
| Website | `https://alzriss-comunity.vercel.app` | deploy READY, preflight backend lulus |

## Tunnel

| Tunnel | ID | Ingress |
|---|---|---|
| Bot (token) | `72975e9b-ef53-45fd-ab28-84c4a78e6447` | `api.gwenna.my.id`, `umi-api.gwenna.my.id` → `localhost:2176` |
| Game (config lokal) | `6f82f294-ff18-4966-9b8e-38edd97f8359` | `game.gwenna.my.id` → `127.0.0.1:3900` (config remote diperbaiki dari `4470` ke `3900`) |

Tunnel `alriss-okta` tidak dijalankan. Kredensial tunnel tidak dirotasi.

## Batas migrasi

- Arsip blob bersifat *safe-operational*: `config.js`, `.env*`, `sessions/`,
  `node_modules/`, `data/` tidak ikut. `config.js` dan env dibuat ulang dari
  nilai yang tersimpan di `/home/user/.secrets`.
- 17 folder sesi jadibot dipulihkan dari metadata; pembersih sesi menyisakan
  3 nomor yang benar-benar punya kredensial dan online. Sisanya perlu pairing
  ulang dari website.
- Bot utama tetap OFF (`MAIN_BOT_ENABLED=false`).

## Deploy ulang

```bash
node tools/deploy-bot.mjs        # modul bot + companion
node tools/deploy-game.mjs       # game web + aset + tunnel
node tools/deploy-website.mjs    # website Vercel
```

Ketiga skrip membaca `/home/user/.secrets/panel4-credentials.env`
(`PTERO_PANEL_URL`, `PTERO_CLIENT_API_KEY`, `PTERO_SERVER_JADIBOT`).
