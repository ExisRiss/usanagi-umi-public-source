/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/mediafiredl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mediafiredl", "category": "download", "aliasMap": {"rimuru-download-mediafiredl": "mediafiredl", "rimuru-mediafiredl": "mediafiredl", "rimuru-mfdl": "mfdl", "rimuru-mediafire": "mediafire", "rimuru-mf": "mf", "mediafiredl": "mediafiredl", "mfdl": "mfdl"}, "description": "Download file dari MediaFire", "usage": ".mfdl <url>", "example": ".mfdl https://www.mediafire.com/file/xxx", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/mediafiredl.js", metadata, m, extra)
handler.help = ["rimuru-download-mediafiredl <url>"]
handler.command = ["rimuru-download-mediafiredl", "rimuru-mediafiredl", "rimuru-mfdl", "rimuru-mediafire", "rimuru-mf", "mediafiredl", "mfdl"]
handler.tags = ["download"]
handler.description = "Download file dari MediaFire"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mediafiredl", "alias": ["mfdl", "mediafire", "mf"], "category": "download", "description": "Download file dari MediaFire", "usage": ".mfdl <url>", "example": ".mfdl https://www.mediafire.com/file/xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-mediafiredl": "mediafiredl", "rimuru-mediafiredl": "mediafiredl", "rimuru-mfdl": "mfdl", "rimuru-mediafire": "mediafire", "rimuru-mf": "mf", "mediafiredl": "mediafiredl", "mfdl": "mfdl"}
export default handler
