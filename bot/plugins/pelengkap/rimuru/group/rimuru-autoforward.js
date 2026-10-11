/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/autoforward.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoforward", "category": "group", "aliasMap": {"rimuru-group-autoforward": "autoforward", "rimuru-autoforward": "autoforward", "rimuru-autofw": "autofw", "rimuru-autofwd": "autofwd", "autoforward": "autoforward", "autofw": "autofw", "autofwd": "autofwd"}, "description": "Auto forward pesan yang masuk ke grup ke grup ini", "usage": ".autoforward <on/off>", "example": ".autoforward on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/autoforward.js", metadata, m, extra)
handler.help = ["rimuru-group-autoforward <on/off>"]
handler.command = ["rimuru-group-autoforward", "rimuru-autoforward", "rimuru-autofw", "rimuru-autofwd", "autoforward", "autofw", "autofwd"]
handler.tags = ["group"]
handler.description = "Auto forward pesan yang masuk ke grup ke grup ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoforward", "alias": ["autofw", "autofwd"], "category": "group", "description": "Auto forward pesan yang masuk ke grup ke grup ini", "usage": ".autoforward <on/off>", "example": ".autoforward on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-autoforward": "autoforward", "rimuru-autoforward": "autoforward", "rimuru-autofw": "autofw", "rimuru-autofwd": "autofwd", "autoforward": "autoforward", "autofw": "autofw", "autofwd": "autofwd"}
export default handler
