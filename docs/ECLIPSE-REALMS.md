# Eclipse Realms — implementation & deployment report

**Task 46 · 18 Oktober 2026**
**Status: playable vertical slice implemented and tested locally; production deployment blocked by panel HTTP 500. Not a completed MMORPG / not production-ready.**

## 1. What is actually implemented

- A rendered, explorable village and Greenleaf Forest, original generated environment artwork, original Canvas character/monster/pet drawings, NPC interaction, collision corridors, keyboard/touch/click-to-walk controls and minimap. Four selectable classes have distinct skill costs, damage multipliers, defense and crit behavior.
- Verified WhatsApp-to-website sign-in: a private bot command issues a 48-bit, single-use code valid for 5 minutes. Only its hash is stored. Browser sessions use random 256-bit tokens stored hashed in SQLite and delivered in an HttpOnly, SameSite=Strict cookie; Secure on public hosts. Logout, expiry and bot-side revoke are implemented. No phone-number self-assertion, service API key login or WhatsApp OTP collection.
- Real server-authoritative turn-based combat against slime, wolf, goblin and a quest-gated sentinel. HP/MP, range, cooldown, current encounter, crit, pet damage and rewards are checked server-side. No browser-supplied damage/reward is accepted.
- A real quest: take at Elder Rowan → defeat three slimes → return and claim once. Loot, koin and EXP persist to the same RPG row used by the bot. The existing 10,000 EXP per level rule is retained; a level-up restores/scales the same health/mana/stamina fields.
- Inventory, consumables, buy/sell, two equipment slots, healing, and a shop matching the existing potion/material prices where shared. Quantity validation, transaction receipts and idempotency prevent duplicate rewards/new-service purchases. A negative-quantity bug in the existing Usanagi shop handler is also fixed.
- Real pet summons with published server weights: cat 40%, rabbit 30%, dog 20%, bird 8%, dragon 2%. No paid currency, no pity claim. One character-creation token plus quest token; compatible existing species/fields are used. Active pet, collection swap, summon history, visible following, capped combat assistance, hunger and EXP gains work. Existing pet commands can read these pets.
- Real SSE presence/position snapshots, global and map-local chat, history pagination, block/report and a public leaderboard. Chat is rendered as text, phone-like sequences are redacted before storage, channels are authorized, send rates are limited and messages retained for seven days. Chat is not automatically bridged to WhatsApp.
- Responsive client with loading/error messages, optional synthesized effect audio, reduced-motion support, finite connection limits and bounded animation frequency. No static fake multiplayer players or fabricated community statistics.

These features have been tested in isolated local SQLite/browser environments, **not confirmed in a live WhatsApp session after deployment**.

## 2. Audit and retained behavior

See `REALMS-COMMAND-AUDIT.md`: 313 RPG-tagged/located command files inventoried statically. This is a source inventory, not a claim that all overlapping aliases are reachable.

Existing stack:

| Component | Existing implementation | Decision |
|---|---|---|
| Website/Jadibot dashboard | Static web client, serverless API, Supabase Auth | Do not replace or change dashboard/login |
| Game server | Plain Node HTTP, existing SSE games, companion process, Cloudflare named tunnel | Add only a fixed `/realms` reverse proxy |
| Bot | Node ES modules, native dispatcher, main + Jadibot sessions | Add one namespaced command plugin; preserve moderation/permissions |
| Usanagi RPG | `core/awang-sqlite.js`, SQLite WAL, `rpg_users` JSON payload | Canonical player store for this website |
| Legacy RPG | `global.db.data.users` JSON; `money`/`balance`, legacy command families | Preserve; do not silently merge or convert currencies |
| Existing party command | Some implementations represent NPC companions, not networked human parties | Do not label these as multiplayer parties |

**Important limitation:** the repository already had different RPG economies before this task. This website exposes the **Usanagi SQLite RPG**, not a fabricated merged balance. Old JSON economy remains intact but is **not integrated into this website**. Automatic PN/LID alias consolidation across old RPG records is not performed; the link follows the trusted sender key used by the existing SQLite RPG. A careful explicit migration is required before claiming every historical command/identity has one unified model.

## 3. Shared architecture

```text
Browser /realms (game.gwenna.my.id)
  -> existing game process, fixed internal reverse proxy to bot port 3366
  -> bot process /realms API, same-origin cookie + origin/CSRF checks
  -> shared service + shared native-RPG execution gate
  -> existing SQLite connection / rpg_users

WhatsApp realms command ----------------------^ same service
Existing Usanagi RPG commands ----------------^ same getUser/saveUser
```

There is **no second website player-progress database**. New tables in the same SQLite file store account/public-name mapping, hashed codes/sessions, idempotency receipts, chat, block/report and audit records. New world/class/quest/position fields live under `user.rpg.realm`; EXP, level, koin, inventory and pet fields are the existing ones.

`withRealmGate()` serializes native RPG execution (including scheduled Auto-AI commands) with web actions, across awaits for old media/animations. It is reentrant for the new bot adapter. New service mutations and their receipts commit in one synchronous SQLite transaction. This protects against the previously possible stale read → await → overwrite pattern. It is a single-bot-process strategy, **not a distributed lock solution for multiple independent bot processes**. All legacy handlers have not been comprehensively audited for unrelated economy bugs.

The game-server file also retains the small token-validation security fix that was already present live but missing from repository HEAD; no trading balance, account or asset was modified.

## 4. Main files

- `bot/lib/realms/catalog.js` — content, class/monster/item/pet definitions, probabilities, walkable map.
- `bot/lib/realms/service.js` — additive schema, auth, transactions, combat, economy, pets, chat and safe DTOs.
- `bot/lib/realms/runtime.js` — existing SQLite/RPG adapter and pre-migration backup.
- `bot/lib/realms/gate.js` — shared execution gate.
- `bot/lib/realms/http.js` — scoped static/API/SSE routes, cookie/origin validation, rate limits.
- `bot/public/realms/{index.html,style.css,app.js,world.webp}` — actual playable client.
- `bot/public/realms/world-art.png` — original generated source artwork; not deployed by the targeted manifest.
- `bot/plugins/rpg/realms.js` — login, revoke, status and shared action commands.
- Existing dispatcher, Auto-AI scheduler, platform API and game handler — narrow integration changes.
- Existing `plugins/rpg/usanagi-shop.js` — positive integer quantity guard, existing functionality retained.
- `bot/tests/realms*.mjs`, `tests/fixtures/realms-sqlite.mjs` — real SQLite integration, migration and browser QA.
- `tools/deploy-realms.mjs` + manifest — guarded targeted deployment, checksums and rollback on partial upload failure.

## 5. Tests actually executed

- **31/31 Realms tests passed**, using real SQLite and the real legacy `getUser/saveUser` adapter. Coverage includes single-use/expired/revoked auth; persistent progress; existing shop handler interoperability; web sell → bot inventory; EXP and daily hunt quest compatibility; quest reward once; transactions/replay; concurrent web/native actions; movement/combat validation; all four classes; pet persistence; public DTO/phone privacy; chat scope/block/report; real HTTP/SSE; SQL failure rollback; negative legacy shop quantity; and WAL-consistent backup/additive migration preserving legacy row bytes.
- **112/112 existing regression tests passed**: Auto-AI, intent routing, native dispatch, rich info and Task45 similarity behavior.
- **14 browser checks passed** with two isolated Chromium contexts (desktop and touch/mobile), a real local HTTP backend, real SQLite and real SSE. Tested sign-in, creation, two-player presence, realtime chat/XSS text/phone redaction, walkable movement, UI attack, three combat victories, quest claim, summon confirmation, shop, reconnect/reload, 320/390/768/1440px layouts, touch d-pad and mobile panels. No page errors or HTTP 5xx in that run.
- A test initially retried encounters too quickly and correctly hit the server cooldown. The browser test was corrected to respect cooldown; the rule was not weakened.
- Runtime files pass `node --check`; `git diff --check` passes. This plain-JS client/server needs no bundling build. Full legacy-repository ESLint and dependency-heavy unrelated suites were not run.
- No live player account, trade, WhatsApp group, session backup or token was changed for QA. QA IDs and data are synthetic; codes are stored only in a chmod-600 secret file.

Evidence is in `/home/user/deploy-check/task46/`: TAP logs, browser JSON/logs and actual browser screenshots. Browser performance is not a guarantee for every physical phone.

## 6. Running locally

Existing application dependencies include `better-sqlite3`; keep the current stack.

```bash
# From repository root; with bot dependencies installed:
node --loader ./bot/tests/realms-sqlite-loader.mjs --test \
  bot/tests/realms.test.mjs bot/tests/realms-migration.test.mjs

# Isolated QA server (never deploy this fixture):
node --loader ./bot/tests/realms-sqlite-loader.mjs \
  bot/tests/realms-browser-server.mjs
# Opens http://localhost:4173/realms
# Fixture codes: /home/user/.secrets/task46-test-login.json (0600)

# With Playwright installed locally and Chromium available:
node bot/tests/realms-browser.test.mjs
```

The fixture server creates a temporary SQLite database and three clearly test-only identities. Restart it before rerunning browser QA because codes are consumed once/expire in five minutes. This is not production data or an alternative production login route. Optional `REALMS_TEST_ARTIFACTS` controls browser evidence output; `REALMS_TEST_LOGIN_FILE` controls where the browser test reads its fixture codes.

For the normal production application, retain the existing companion → game/tunnel/bot startup. After deployment, use the bot's active prefix followed by `realms login` **in private chat**. The code opens the character corresponding to that bot RPG sender, not an arbitrary phone entered in the browser.

## 7. Configuration and security boundaries

- Existing bot/database/configuration remains authoritative; **no new production API key is required**.
- `UMI_REALMS_BOT_PORT` optionally changes the internal proxy destination; default `3366` matches the audited production tunnel.
- `REALM_NAME` and content definitions are in `catalog.js`; HTML branding copy is in `index.html`/client.
- Deployer reads the existing `PTERO_ENV_FILE` (default `/home/user/.secrets/panel3-credentials.env`). It must contain the existing panel URL, server ID and client key; never put values in this repository.
- `REALMS_DEPLOY_EVIDENCE` optionally changes the deployment evidence directory.
- No changes to keys, owner settings, autoread, bot pairing, database paths, session data/backups, Cloudflare credentials or tunnel mode.
- Browser game progress is **not** stored in localStorage. Browser requests use same-origin relative URLs, not localhost. The localhost address appears only in the server-side reverse proxy and local test tooling.

## 8. Migration, deployment and rollback

Before the first new schema migration, the runtime creates `data/database/pre-realms-v1.sqlite` using SQLite `VACUUM INTO`, including WAL-consistent data, with permissions 0600. The migration is additive and does not rewrite existing player rows. This behavior was tested against a separate temporary database.

The guarded deployer:

1. Reads server/resources and every target first.
2. Refuses unknown live drift; original code hashes come from downloaded live baselines or commit `41fd8cb` where the panel became unavailable.
3. Verifies new paths are absent or already contain the exact intended bytes.
4. Uploads shared modules/assets before integrating entry points, then downloads every file and compares SHA-256.
5. Uses the existing panel power API to restart.
6. On partial upload failure, attempts to restore only changed code files and remove only newly uploaded files; never touches runtime databases or sessions.

```bash
node tools/deploy-realms.mjs --check  # read-only preflight
node tools/deploy-realms.mjs          # guarded deploy + restart
```

After a successful deploy, check `/realms`, `/realms/api/meta`, unauthenticated `/realms/api/state` (401), real startup logs, and a real private WhatsApp login. Verify `/realms status` against a completed web action before closing the cross-platform acceptance criterion.

For rollback, revert the narrowly changed code/proxy files and remove or disable the new plugin; additive tables can remain inert. **Do not restore the entire pre-migration database over newer player activity without an explicit recovery decision.**

### Current production blocker

Panel client API `/api/client`, server `/resources`, and file listing/reading began returning **HTTP 500 / UnexpectedValueException** during this task. Both existing authorized credential files were tested without changing them. The guarded deploy preflight aborted before writing anything. Meanwhile the existing bot and game health endpoints returned HTTP 200. Do not restart or stop the healthy production bot blindly while file/power management is failing.

**Therefore this feature is not yet live.** The deployment target is `https://game.gwenna.my.id/realms`, but it must not be advertised as a working production game until the guarded deploy and live smoke tests succeed. No new key is being requested; the existing panel API must recover.

## 9. Remaining work — not declared complete

- Production deployment and real-device WhatsApp/web acceptance.
- Whole legacy JSON/SQLite economy and PN/LID migration strategy; no silent balance merge.
- Full tutorial objectives, broader story, repeatable/weekly quests and long-term economy balancing.
- Royal Capital, multiple kingdoms, further regions and content-rich dungeons.
- Human party creation/invites, instanced co-op dungeons/bosses, shared combat, guild membership/roles and their authorized chat channels. Existing NPC companion parties are not substitutes.
- Friend system, whispers and preferences, player search, multiplayer trading/crafting/marketplace.
- Full skill trees, elements/status effects, weapon families, advanced equipment/pet feeding/evolution/skills/farming UX.
- Owner/admin management interface, report review/mute controls, operational metrics and moderation workflow. Reports currently persist; an admin review UI is not implemented.
- Comprehensive audit of all old economy commands, multi-process/distributed locking, load/stress tests, durable event delivery, action-receipt retention policy and operational backups beyond the first migration snapshot.

This release is a genuine functioning vertical slice, **not a claim that all 26 master-prompt sections are finished**.
