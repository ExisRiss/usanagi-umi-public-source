/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/facebookdl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "facebookdl", "category": "download", "aliasMap": {"rimuru-download-facebookdl": "facebookdl", "rimuru-facebookdl": "facebookdl", "rimuru-fbdown": "fbdown", "rimuru-facebook": "facebook", "rimuru-fbdl": "fbdl", "facebookdl": "facebookdl"}, "description": "Download video Facebook", "usage": ".facebookdl <url>", "example": ".facebookdl https://www.facebook.com/watch?v=xxx", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/facebookdl.js", metadata, m, extra)
handler.help = ["rimuru-download-facebookdl <url>"]
handler.command = ["rimuru-download-facebookdl", "rimuru-facebookdl", "rimuru-fbdown", "rimuru-facebook", "rimuru-fbdl", "facebookdl"]
handler.tags = ["download"]
handler.description = "Download video Facebook"
handler.importSource = "rimuru"
handler.importConfig = {"name": "facebookdl", "alias": ["fbdown", "fb", "facebook", "fbdl"], "category": "download", "description": "Download video Facebook", "usage": ".facebookdl <url>", "example": ".facebookdl https://www.facebook.com/watch?v=xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-facebookdl": "facebookdl", "rimuru-facebookdl": "facebookdl", "rimuru-fbdown": "fbdown", "rimuru-facebook": "facebook", "rimuru-fbdl": "fbdl", "facebookdl": "facebookdl"}
export default handler
