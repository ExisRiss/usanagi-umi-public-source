/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/sertifitolol.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sertiftolol", "category": "maker", "aliasMap": {"rimuru-maker-sertiftolol": "sertiftolol", "rimuru-sertiftolol": "sertiftolol", "rimuru-sertifikattolol": "sertifikattolol", "sertiftolol": "sertiftolol", "sertifikattolol": "sertifikattolol"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/sertifitolol.js", metadata, m, extra)
handler.help = ["rimuru-maker-sertiftolol"]
handler.command = ["rimuru-maker-sertiftolol", "rimuru-sertiftolol", "rimuru-sertifikattolol", "sertiftolol", "sertifikattolol"]
handler.tags = ["maker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sertiftolol", "alias": ["sertifikattolol"], "category": "maker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-sertiftolol": "sertiftolol", "rimuru-sertiftolol": "sertiftolol", "rimuru-sertifikattolol": "sertifikattolol", "sertiftolol": "sertiftolol", "sertifikattolol": "sertifikattolol"}
export default handler
