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
