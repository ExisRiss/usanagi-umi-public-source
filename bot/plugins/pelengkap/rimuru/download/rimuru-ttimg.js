/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/ttimg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ttimg", "category": "download", "aliasMap": {"rimuru-download-ttimg": "ttimg", "rimuru-ttimg": "ttimg", "rimuru-tiktokimg": "tiktokimg", "ttimg": "ttimg", "tiktokimg": "tiktokimg"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/ttimg.js", metadata, m, extra)
handler.help = ["rimuru-download-ttimg"]
handler.command = ["rimuru-download-ttimg", "rimuru-ttimg", "rimuru-tiktokimg", "ttimg", "tiktokimg"]
handler.tags = ["download"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ttimg", "alias": ["tiktokimg"], "category": "download", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-ttimg": "ttimg", "rimuru-ttimg": "ttimg", "rimuru-tiktokimg": "tiktokimg", "ttimg": "ttimg", "tiktokimg": "tiktokimg"}
export default handler
