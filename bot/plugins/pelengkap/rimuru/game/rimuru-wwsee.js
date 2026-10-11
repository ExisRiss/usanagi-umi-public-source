/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/wwsee.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wwsee", "category": "game", "aliasMap": {"rimuru-game-wwsee": "wwsee", "rimuru-wwsee": "wwsee", "rimuru-seer": "seer", "rimuru-vision": "vision", "rimuru-wse": "wse", "wwsee": "wwsee", "seer": "seer", "vision": "vision", "wse": "wse"}, "description": "Seer night action - See target role", "usage": ".wwsee <nomor>", "example": ".wwsee 1", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/wwsee.js", metadata, m, extra)
handler.help = ["rimuru-game-wwsee <nomor>"]
handler.command = ["rimuru-game-wwsee", "rimuru-wwsee", "rimuru-seer", "rimuru-vision", "rimuru-wse", "wwsee", "seer", "vision", "wse"]
handler.tags = ["game"]
handler.description = "Seer night action - See target role"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wwsee", "alias": ["seer", "vision", "wse"], "category": "game", "description": "Seer night action - See target role", "usage": ".wwsee <nomor>", "example": ".wwsee 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-wwsee": "wwsee", "rimuru-wwsee": "wwsee", "rimuru-seer": "seer", "rimuru-vision": "vision", "rimuru-wse": "wse", "wwsee": "wwsee", "seer": "seer", "vision": "vision", "wse": "wse"}
export default handler
