/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/alightmotion.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "alightmotiondl", "category": "downloader", "aliasMap": {"rimuru-downloader-alightmotiondl": "alightmotiondl", "rimuru-alightmotiondl": "alightmotiondl", "rimuru-alightmotion": "alightmotion", "rimuru-amdl": "amdl", "alightmotiondl": "alightmotiondl", "alightmotion": "alightmotion", "amdl": "amdl"}, "description": "Download project/preset Alight Motion", "usage": ".amdl <link>", "example": ".amdl https://alight.link/...", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/alightmotion.js", metadata, m, extra)
handler.help = ["rimuru-downloader-alightmotiondl <link>"]
handler.command = ["rimuru-downloader-alightmotiondl", "rimuru-alightmotiondl", "rimuru-alightmotion", "rimuru-amdl", "alightmotiondl", "alightmotion", "amdl"]
handler.tags = ["downloader"]
handler.description = "Download project/preset Alight Motion"
handler.importSource = "rimuru"
handler.importConfig = {"name": "alightmotiondl", "alias": ["alightmotion", "amdl"], "category": "downloader", "description": "Download project/preset Alight Motion", "usage": ".amdl <link>", "example": ".amdl https://alight.link/...", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-downloader-alightmotiondl": "alightmotiondl", "rimuru-alightmotiondl": "alightmotiondl", "rimuru-alightmotion": "alightmotion", "rimuru-amdl": "amdl", "alightmotiondl": "alightmotiondl", "alightmotion": "alightmotion", "amdl": "amdl"}
export default handler
