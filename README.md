# Usanagi Umi — Public Source Template

This repository contains the **sanitized source template** for the Usanagi Umi WhatsApp bot and its Jadibot management website.

> **Security notice:** This is intentionally not a production backup. WhatsApp sessions, phone numbers, pairing codes, database/runtime data, Pterodactyl/GitHub/Vercel credentials, API keys, environment files, deployment archives, and owner-specific configuration have been removed or replaced with placeholders.

## Perbaikan website/Jadibot — Task52 (18 Oktober 2026)

- Error backend website502 diperbaiki: routing produksi kini melalui API HTTPS aktif, bukan alokasi server lama.
- Kontrol main/autoread, script OAuth/CSP, timeout relay dan tampilan wallet saat pemulihan diperbaiki. Cache metadata grup mengurangi request berulang/rate-limit; main bot tetap OFF.
- 33 pemeriksaan HTTP dan12 pemeriksaan browser live lulus pada kedua domain; pengujian owner fixture dipisahkan dari login nyata. Tidak ada data/sesi ditimpa atau key dirotasi.
- Detail: [perbaikan, deploy, feedback dan batasan Task52](docs/WEBSITE-BACKEND-TASK52.md).

## Riwayat layanan — 18 Oktober 2026 (Task51)

- AutoAI Groq aktif memakai konfigurasi privat owner; tes provider dan planner nyata berhasil.
- Authority RPG terverifikasi sudah live: 235 catatan → 220 profil, EXP/item/pet dan koin dibaca melalui bridge SQLite bersama bot/Realms. 205 LID lama masih ditahan, bukan digabung berdasarkan tebakan.
- Bot utama **OFF, tanpa pairing**, autoread OFF; API/game aktif dan satu jadibot reconnect. Wallet/trading masih dilindungi mode pemulihan.
- 237 tes, 19 pemeriksaan live, 40 hash source live cocok; backup konsisten dan vault terenkripsi terverifikasi. Bukan klaim acceptance seluruh gameplay/WhatsApp fisik atau seluruh fitur master MMORPG.
- Baca [hasil dan batasan Task51](docs/RPG-UNIFICATION-TASK51.md) sebelum deploy/restore. Jangan menimpa database live atau rollback ke adapter legacy-only setelah aktivasi.

## Structure

- `bot/` — WhatsApp main-bot and Jadibot source.
- `website/` — Jadibot website source and Vercel API routes.

## Before running a fork

1. Install the packages declared by each project's `package.json`.
2. Copy the bot configuration example to a local, ignored production configuration file and configure **your own** owners, database/storage, API integrations, and WhatsApp session.
3. Add all required environment variables only in your deployment provider or local `.env` file. Do not commit them.
4. Deploy the website with your own authentication, Vercel project, Blob/storage, and relay-secret configuration.

Some downloads, AI providers, storage, and deployment integrations need third-party keys or services. Their placeholders are deliberately empty in this public template.

## Security rules for contributors

- Never commit `config.js`, `.env*`, sessions, pairing codes, phone numbers, runtime databases, logs, media uploads, panel tokens, GitHub tokens, or Vercel credentials.
- Use the existing example configuration files and environment-variable names instead of embedding keys in source.
- Treat any secret accidentally committed as compromised: revoke/rotate it before removing it from Git history.

## License

Copyright © 2026 Usanagi Umi contributors. All rights reserved. Public visibility does not grant permission to resell, redistribute, or operate this source as a hosted service without the copyright holder's permission.

## Update 10.1.0 — 12 Oktober 2026

- Auto-AI Groq pada mention/reply, melalui dispatcher native dengan izin, registrasi, premium dan kuota yang sama.
- Isolasi koneksi main/Jadibot dan hook moderasi tetap dijalankan.
- 1.091 handler pelengkap Umi/OURIN berhasil dimuat; 6.793 alias tambahan unik. Jumlah alias bukan jumlah fitur.
- Umi menggunakan handler kompatibilitas OURIN; fitur duplikat tidak dijumlahkan dua kali. Kredit asli tetap dipertahankan.
- Provider Groq/OpenRouter website, penyimpanan key terenkripsi, UI responsif dan perbaikan 11 syntax error template lama.
- Baca [panduan Groq](bot/AUTO_AI_GROQ.md), [kredit](bot/CREDITS_PELENGKAP.md) dan [audit lengkap](bot/FEATURE_MIGRATION_REPORT.json).
- Private config, API key, database, session WhatsApp dan state produksi **tidak ada di repo ini**. Jangan menimpa server produksi dengan template sanitasi secara wholesale.
- Verifikasi: 3.329 JS/CJS/MJS lolos syntax; 27 regresi; 7 viewport UI; 3 kasus planning Groq nyata. Seluruh API eksternal/aksi WhatsApp belum diuji satu-per-satu.
