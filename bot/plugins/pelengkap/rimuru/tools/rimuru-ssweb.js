/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ssweb.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ssweb", "category": "tools", "aliasMap": {"rimuru-tools-ssweb": "ssweb", "rimuru-ssweb": "ssweb", "rimuru-screenshot": "screenshot", "rimuru-ss": "ss", "rimuru-webss": "webss", "screenshot": "screenshot"}, "description": "Screenshot website", "usage": ".ssweb <url>", "example": ".ssweb https://google.com", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ssweb.js", metadata, m, extra)
handler.help = ["rimuru-tools-ssweb <url>"]
handler.command = ["rimuru-tools-ssweb", "rimuru-ssweb", "rimuru-screenshot", "rimuru-ss", "rimuru-webss", "screenshot"]
handler.tags = ["tools"]
handler.description = "Screenshot website"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ssweb", "alias": ["screenshot", "ss", "webss"], "category": "tools", "description": "Screenshot website", "usage": ".ssweb <url>", "example": ".ssweb https://google.com", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ssweb": "ssweb", "rimuru-ssweb": "ssweb", "rimuru-screenshot": "screenshot", "rimuru-ss": "ss", "rimuru-webss": "webss", "screenshot": "screenshot"}
export default handler
