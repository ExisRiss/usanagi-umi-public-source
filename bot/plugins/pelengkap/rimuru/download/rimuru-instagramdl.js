/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/instagramdl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "instagramdl", "category": "download", "aliasMap": {"rimuru-download-instagramdl": "instagramdl", "rimuru-instagramdl": "instagramdl", "rimuru-igdl": "igdl", "rimuru-ig": "ig", "rimuru-instagram": "instagram", "instagramdl": "instagramdl"}, "description": "Download video/foto Instagram", "usage": ".instagramdl <url>", "example": ".instagramdl https://www.instagram.com/reel/xxx", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/instagramdl.js", metadata, m, extra)
handler.help = ["rimuru-download-instagramdl <url>"]
handler.command = ["rimuru-download-instagramdl", "rimuru-instagramdl", "rimuru-igdl", "rimuru-ig", "rimuru-instagram", "instagramdl"]
handler.tags = ["download"]
handler.description = "Download video/foto Instagram"
handler.importSource = "rimuru"
handler.importConfig = {"name": "instagramdl", "alias": ["igdl", "ig", "instagram"], "category": "download", "description": "Download video/foto Instagram", "usage": ".instagramdl <url>", "example": ".instagramdl https://www.instagram.com/reel/xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-instagramdl": "instagramdl", "rimuru-instagramdl": "instagramdl", "rimuru-igdl": "igdl", "rimuru-ig": "ig", "rimuru-instagram": "instagram", "instagramdl": "instagramdl"}
export default handler
