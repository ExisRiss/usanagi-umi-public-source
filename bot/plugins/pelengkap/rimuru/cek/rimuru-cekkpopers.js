/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekkpopers.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkpopers", "category": "cek", "aliasMap": {"rimuru-cek-cekkpopers": "cekkpopers", "rimuru-cekkpopers": "cekkpopers", "rimuru-kpopers": "kpopers", "rimuru-kpop": "kpop", "kpop": "kpop"}, "description": "Cek tingkat kpopers kamu", "usage": ".cekkpopers <nama>", "example": ".cekkpopers Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekkpopers.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekkpopers <nama>"]
handler.command = ["rimuru-cek-cekkpopers", "rimuru-cekkpopers", "rimuru-kpopers", "rimuru-kpop", "kpop"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kpopers kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkpopers", "alias": ["kpopers", "kpop"], "category": "cek", "description": "Cek tingkat kpopers kamu", "usage": ".cekkpopers <nama>", "example": ".cekkpopers Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekkpopers": "cekkpopers", "rimuru-cekkpopers": "cekkpopers", "rimuru-kpopers": "kpopers", "rimuru-kpop": "kpop", "kpop": "kpop"}
export default handler
