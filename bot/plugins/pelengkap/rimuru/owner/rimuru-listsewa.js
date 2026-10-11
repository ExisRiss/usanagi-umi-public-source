/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/listsewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listsewa", "category": "owner", "aliasMap": {"rimuru-owner-listsewa": "listsewa", "rimuru-listsewa": "listsewa", "rimuru-sewalist": "sewalist", "rimuru-daftarsewa": "daftarsewa", "listsewa": "listsewa", "sewalist": "sewalist", "daftarsewa": "daftarsewa"}, "description": "Lihat daftar grup yang terdaftar sewa", "usage": ".listsewa", "example": ".listsewa", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/listsewa.js", metadata, m, extra)
handler.help = ["rimuru-owner-listsewa"]
handler.command = ["rimuru-owner-listsewa", "rimuru-listsewa", "rimuru-sewalist", "rimuru-daftarsewa", "listsewa", "sewalist", "daftarsewa"]
handler.tags = ["owner"]
handler.description = "Lihat daftar grup yang terdaftar sewa"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listsewa", "alias": ["sewalist", "daftarsewa"], "category": "owner", "description": "Lihat daftar grup yang terdaftar sewa", "usage": ".listsewa", "example": ".listsewa", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-listsewa": "listsewa", "rimuru-listsewa": "listsewa", "rimuru-sewalist": "sewalist", "rimuru-daftarsewa": "daftarsewa", "listsewa": "listsewa", "sewalist": "sewalist", "daftarsewa": "daftarsewa"}
export default handler
