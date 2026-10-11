/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/levelup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "levelup", "category": "user", "aliasMap": {"rimuru-user-levelup": "levelup", "rimuru-levelup": "levelup", "rimuru-lvlup": "lvlup", "rimuru-levelnotif": "levelnotif", "lvlup": "lvlup", "levelnotif": "levelnotif"}, "description": "Toggle notifikasi level up", "usage": ".levelup <on/off>", "example": ".levelup on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/levelup.js", metadata, m, extra)
handler.help = ["rimuru-user-levelup <on/off>"]
handler.command = ["rimuru-user-levelup", "rimuru-levelup", "rimuru-lvlup", "rimuru-levelnotif", "lvlup", "levelnotif"]
handler.tags = ["user"]
handler.description = "Toggle notifikasi level up"
handler.importSource = "rimuru"
handler.importConfig = {"name": "levelup", "alias": ["lvlup", "levelnotif"], "category": "user", "description": "Toggle notifikasi level up", "usage": ".levelup <on/off>", "example": ".levelup on", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-levelup": "levelup", "rimuru-levelup": "levelup", "rimuru-lvlup": "lvlup", "rimuru-levelnotif": "levelnotif", "lvlup": "lvlup", "levelnotif": "levelnotif"}
export default handler
