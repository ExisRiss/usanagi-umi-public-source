/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/tam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tam", "category": "group", "aliasMap": {"rimuru-group-tam": "tam", "rimuru-tam": "tam", "rimuru-topactive": "topactive", "rimuru-topmember": "topmember", "tam": "tam", "topactive": "topactive", "topmember": "topmember"}, "description": "Lihat top member paling aktif di grup", "usage": ".tam <jumlah>", "example": ".tam 10", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/tam.js", metadata, m, extra)
handler.help = ["rimuru-group-tam <jumlah>"]
handler.command = ["rimuru-group-tam", "rimuru-tam", "rimuru-topactive", "rimuru-topmember", "tam", "topactive", "topmember"]
handler.tags = ["group"]
handler.description = "Lihat top member paling aktif di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tam", "alias": ["topactive", "topmember"], "category": "group", "description": "Lihat top member paling aktif di grup", "usage": ".tam <jumlah>", "example": ".tam 10", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-tam": "tam", "rimuru-tam": "tam", "rimuru-topactive": "topactive", "rimuru-topmember": "topmember", "tam": "tam", "topactive": "topactive", "topmember": "topmember"}
export default handler
