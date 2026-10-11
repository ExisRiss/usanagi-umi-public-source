/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/get.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "get", "category": "owner", "aliasMap": {"rimuru-owner-get": "get", "rimuru-get": "get", "rimuru-fetch": "fetch", "rimuru-http": "http", "rimuru-request": "request", "rimuru-curl": "curl", "http": "http", "request": "request", "curl": "curl"}, "description": "Advanced HTTP request tool (Owner Only)", "usage": ".get <url> [options]", "example": ".get https://api.example.com --method POST --json {\"key\":\"value\"} --header \"Authorization: Bearer token\"", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/get.js", metadata, m, extra)
handler.help = ["rimuru-owner-get <url> [options]"]
handler.command = ["rimuru-owner-get", "rimuru-get", "rimuru-fetch", "rimuru-http", "rimuru-request", "rimuru-curl", "http", "request", "curl"]
handler.tags = ["owner"]
handler.description = "Advanced HTTP request tool (Owner Only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "get", "alias": ["fetch", "http", "request", "curl"], "category": "owner", "description": "Advanced HTTP request tool (Owner Only)", "usage": ".get <url> [options]", "example": ".get https://api.example.com --method POST --json {\"key\":\"value\"} --header \"Authorization: Bearer token\"", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-get": "get", "rimuru-get": "get", "rimuru-fetch": "fetch", "rimuru-http": "http", "rimuru-request": "request", "rimuru-curl": "curl", "http": "http", "request": "request", "curl": "curl"}
export default handler
