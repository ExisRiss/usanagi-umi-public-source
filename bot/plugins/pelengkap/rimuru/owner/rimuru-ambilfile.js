/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/ambilfile.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ambilfile", "category": "owner", "aliasMap": {"rimuru-owner-ambilfile": "ambilfile", "rimuru-ambilfile": "ambilfile", "rimuru-getfile": "getfile", "rimuru-downloadfile": "downloadfile", "ambilfile": "ambilfile", "getfile": "getfile", "downloadfile": "downloadfile"}, "description": "Ambil file dari project bot tanpa perlu .js", "usage": ".ambilfile <nama file>", "example": ".ambilfile config", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/ambilfile.js", metadata, m, extra)
handler.help = ["rimuru-owner-ambilfile <nama file>"]
handler.command = ["rimuru-owner-ambilfile", "rimuru-ambilfile", "rimuru-getfile", "rimuru-downloadfile", "ambilfile", "getfile", "downloadfile"]
handler.tags = ["owner"]
handler.description = "Ambil file dari project bot tanpa perlu .js"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ambilfile", "alias": ["getfile", "downloadfile"], "category": "owner", "description": "Ambil file dari project bot tanpa perlu .js", "usage": ".ambilfile <nama file>", "example": ".ambilfile config", "isOwner": true, "cooldown": 5, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-ambilfile": "ambilfile", "rimuru-ambilfile": "ambilfile", "rimuru-getfile": "getfile", "rimuru-downloadfile": "downloadfile", "ambilfile": "ambilfile", "getfile": "getfile", "downloadfile": "downloadfile"}
export default handler
