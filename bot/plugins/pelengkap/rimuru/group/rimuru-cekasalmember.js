/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/cekasalmember.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekasalmember", "category": "group", "aliasMap": {"rimuru-group-cekasalmember": "cekasalmember", "rimuru-cekasalmember": "cekasalmember", "cekasalmember": "cekasalmember"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/cekasalmember.js", metadata, m, extra)
handler.help = ["rimuru-group-cekasalmember"]
handler.command = ["rimuru-group-cekasalmember", "rimuru-cekasalmember", "cekasalmember"]
handler.tags = ["group"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekasalmember", "alias": [], "category": "group", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-cekasalmember": "cekasalmember", "rimuru-cekasalmember": "cekasalmember", "cekasalmember": "cekasalmember"}
export default handler
