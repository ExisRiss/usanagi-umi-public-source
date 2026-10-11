/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antiswgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antiswgc", "category": "group", "aliasMap": {"rimuru-group-antiswgc": "antiswgc", "rimuru-antiswgc": "antiswgc", "rimuru-antiswgroup": "antiswgroup", "rimuru-antiswmentiongc": "antiswmentiongc", "rimuru-antiswtaggc": "antiswtaggc"}, "description": "Deteksi tipe SW group mention atau status mention yang masuk ke grup", "usage": ".antiswgc <on/off>", "example": ".antiswgc on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antiswgc.js", metadata, m, extra)
handler.help = ["rimuru-group-antiswgc <on/off>"]
handler.command = ["rimuru-group-antiswgc", "rimuru-antiswgc", "rimuru-antiswgroup", "rimuru-antiswmentiongc", "rimuru-antiswtaggc"]
handler.tags = ["group"]
handler.description = "Deteksi tipe SW group mention atau status mention yang masuk ke grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antiswgc", "alias": ["antiswgroup", "antiswmentiongc", "antiswtaggc"], "category": "group", "description": "Deteksi tipe SW group mention atau status mention yang masuk ke grup", "usage": ".antiswgc <on/off>", "example": ".antiswgc on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antiswgc": "antiswgc", "rimuru-antiswgc": "antiswgc", "rimuru-antiswgroup": "antiswgroup", "rimuru-antiswmentiongc": "antiswmentiongc", "rimuru-antiswtaggc": "antiswtaggc"}
export default handler
