/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/listtoxic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listtoxic", "category": "group", "aliasMap": {"rimuru-group-listtoxic": "listtoxic", "rimuru-listtoxic": "listtoxic", "rimuru-toxiclist": "toxiclist", "rimuru-katatoxic": "katatoxic", "rimuru-lihatkata": "lihatkata", "listtoxic": "listtoxic", "toxiclist": "toxiclist", "katatoxic": "katatoxic", "lihatkata": "lihatkata"}, "description": "Lihat daftar kata toxic", "usage": ".listtoxic", "example": ".listtoxic", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/listtoxic.js", metadata, m, extra)
handler.help = ["rimuru-group-listtoxic"]
handler.command = ["rimuru-group-listtoxic", "rimuru-listtoxic", "rimuru-toxiclist", "rimuru-katatoxic", "rimuru-lihatkata", "listtoxic", "toxiclist", "katatoxic", "lihatkata"]
handler.tags = ["group"]
handler.description = "Lihat daftar kata toxic"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listtoxic", "alias": ["toxiclist", "katatoxic", "lihatkata"], "category": "group", "description": "Lihat daftar kata toxic", "usage": ".listtoxic", "example": ".listtoxic", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-listtoxic": "listtoxic", "rimuru-listtoxic": "listtoxic", "rimuru-toxiclist": "toxiclist", "rimuru-katatoxic": "katatoxic", "rimuru-lihatkata": "lihatkata", "listtoxic": "listtoxic", "toxiclist": "toxiclist", "katatoxic": "katatoxic", "lihatkata": "lihatkata"}
export default handler
