/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/deltoxic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "deltoxic", "category": "group", "aliasMap": {"rimuru-group-deltoxic": "deltoxic", "rimuru-deltoxic": "deltoxic", "rimuru-hapustoxic": "hapustoxic", "rimuru-remtoxic": "remtoxic", "rimuru-removetoxic": "removetoxic", "deltoxic": "deltoxic", "hapustoxic": "hapustoxic", "remtoxic": "remtoxic", "removetoxic": "removetoxic"}, "description": "Hapus kata toxic dari daftar", "usage": ".deltoxic <kata>", "example": ".deltoxic kata_kasar", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/deltoxic.js", metadata, m, extra)
handler.help = ["rimuru-group-deltoxic <kata>"]
handler.command = ["rimuru-group-deltoxic", "rimuru-deltoxic", "rimuru-hapustoxic", "rimuru-remtoxic", "rimuru-removetoxic", "deltoxic", "hapustoxic", "remtoxic", "removetoxic"]
handler.tags = ["group"]
handler.description = "Hapus kata toxic dari daftar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "deltoxic", "alias": ["hapustoxic", "remtoxic", "removetoxic"], "category": "group", "description": "Hapus kata toxic dari daftar", "usage": ".deltoxic <kata>", "example": ".deltoxic kata_kasar", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-deltoxic": "deltoxic", "rimuru-deltoxic": "deltoxic", "rimuru-hapustoxic": "hapustoxic", "rimuru-remtoxic": "remtoxic", "rimuru-removetoxic": "removetoxic", "deltoxic": "deltoxic", "hapustoxic": "hapustoxic", "remtoxic": "remtoxic", "removetoxic": "removetoxic"}
export default handler
