/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/sertifikatlemot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sertifikatlemot", "category": "maker", "aliasMap": {"rimuru-maker-sertifikatlemot": "sertifikatlemot", "rimuru-sertifikatlemot": "sertifikatlemot", "sertifikatlemot": "sertifikatlemot"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/sertifikatlemot.js", metadata, m, extra)
handler.help = ["rimuru-maker-sertifikatlemot"]
handler.command = ["rimuru-maker-sertifikatlemot", "rimuru-sertifikatlemot", "sertifikatlemot"]
handler.tags = ["maker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sertifikatlemot", "alias": [], "category": "maker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-sertifikatlemot": "sertifikatlemot", "rimuru-sertifikatlemot": "sertifikatlemot", "sertifikatlemot": "sertifikatlemot"}
export default handler
