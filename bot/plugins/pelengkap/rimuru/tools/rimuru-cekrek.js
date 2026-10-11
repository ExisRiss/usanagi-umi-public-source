/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/cekrek.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekrek", "category": "tools", "aliasMap": {"rimuru-tools-cekrek": "cekrek", "rimuru-cekrek": "cekrek", "rimuru-cekrekening": "cekrekening", "cekrek": "cekrek", "cekrekening": "cekrekening"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/cekrek.js", metadata, m, extra)
handler.help = ["rimuru-tools-cekrek"]
handler.command = ["rimuru-tools-cekrek", "rimuru-cekrek", "rimuru-cekrekening", "cekrek", "cekrekening"]
handler.tags = ["tools"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekrek", "alias": ["cekrekening"], "category": "tools", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-cekrek": "cekrek", "rimuru-cekrek": "cekrek", "rimuru-cekrekening": "cekrekening", "cekrek": "cekrek", "cekrekening": "cekrekening"}
export default handler
