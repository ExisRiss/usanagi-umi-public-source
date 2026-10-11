/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antiflood.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antiflood", "category": "group", "aliasMap": {"rimuru-group-antiflood": "antiflood", "rimuru-antiflood": "antiflood", "rimuru-floodguard": "floodguard", "rimuru-noflood": "noflood", "antiflood": "antiflood", "floodguard": "floodguard", "noflood": "noflood"}, "description": "Deteksi banjir pesan cepat dan kick bertahap", "usage": ".antiflood <on/off/status>", "example": ".antiflood on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antiflood.js", metadata, m, extra)
handler.help = ["rimuru-group-antiflood <on/off/status>"]
handler.command = ["rimuru-group-antiflood", "rimuru-antiflood", "rimuru-floodguard", "rimuru-noflood", "antiflood", "floodguard", "noflood"]
handler.tags = ["group"]
handler.description = "Deteksi banjir pesan cepat dan kick bertahap"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antiflood", "alias": ["floodguard", "noflood"], "category": "group", "description": "Deteksi banjir pesan cepat dan kick bertahap", "usage": ".antiflood <on/off/status>", "example": ".antiflood on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antiflood": "antiflood", "rimuru-antiflood": "antiflood", "rimuru-floodguard": "floodguard", "rimuru-noflood": "noflood", "antiflood": "antiflood", "floodguard": "floodguard", "noflood": "noflood"}
export default handler
