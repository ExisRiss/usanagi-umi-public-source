# Usanagi Umi — Public Source Template

This repository contains the **sanitized source template** for the Usanagi Umi WhatsApp bot and its Jadibot management website.

> **Security notice:** This is intentionally not a production backup. WhatsApp sessions, phone numbers, pairing codes, database/runtime data, Pterodactyl/GitHub/Vercel credentials, API keys, environment files, deployment archives, and owner-specific configuration have been removed or replaced with placeholders.

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
- 1.096 handler pelengkap Rimuru/OURIN berhasil dimuat; 6.820 alias tambahan unik. Jumlah alias bukan jumlah fitur.
- Rimuru adalah turunan/rename OURIN; fitur duplikat tidak dijumlahkan dua kali. Kredit asli tetap dipertahankan.
- Provider Groq/OpenRouter website, penyimpanan key terenkripsi, UI responsif dan perbaikan 11 syntax error template lama.
- Baca [panduan Groq](bot/AUTO_AI_GROQ.md), [kredit](bot/CREDITS_PELENGKAP.md) dan [audit lengkap](bot/FEATURE_MIGRATION_REPORT.json).
- Private config, API key, database, session WhatsApp dan state produksi **tidak ada di repo ini**. Jangan menimpa server produksi dengan template sanitasi secara wholesale.
- Verifikasi: 3.339 JS/CJS/MJS lolos syntax; 27 regresi; 7 viewport UI; 3 kasus planning Groq nyata. Seluruh API eksternal/aksi WhatsApp belum diuji satu-per-satu.
