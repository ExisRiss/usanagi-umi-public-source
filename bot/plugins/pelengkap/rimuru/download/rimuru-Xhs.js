/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/Xhs.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "xhs", "category": "download", "aliasMap": {"rimuru-download-xhs": "xhs", "rimuru-xhs": "xhs", "xhs": "xhs"}, "description": "Downloader XHS/RedNote untuk video atau gambar.", "usage": ".xhs <url>", "example": ".xhs <url>", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/Xhs.js", metadata, m, extra)
handler.help = ["rimuru-download-xhs <url>"]
handler.command = ["rimuru-download-xhs", "rimuru-xhs", "xhs"]
handler.tags = ["download"]
handler.description = "Downloader XHS/RedNote untuk video atau gambar."
handler.importSource = "rimuru"
handler.importConfig = {"name": "xhs", "alias": [], "category": "download", "description": "Downloader XHS/RedNote untuk video atau gambar.", "usage": ".xhs <url>", "example": ".xhs <url>", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-xhs": "xhs", "rimuru-xhs": "xhs", "xhs": "xhs"}
export default handler
