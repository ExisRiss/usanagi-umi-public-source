/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/addtoxic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addtoxic", "category": "group", "aliasMap": {"rimuru-group-addtoxic": "addtoxic", "rimuru-addtoxic": "addtoxic", "rimuru-tambahtoxic": "tambahtoxic", "rimuru-addkata": "addkata", "addtoxic": "addtoxic", "tambahtoxic": "tambahtoxic", "addkata": "addkata"}, "description": "Tambah kata toxic ke daftar", "usage": ".addtoxic <kata>", "example": ".addtoxic kata_kasar", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/addtoxic.js", metadata, m, extra)
handler.help = ["rimuru-group-addtoxic <kata>"]
handler.command = ["rimuru-group-addtoxic", "rimuru-addtoxic", "rimuru-tambahtoxic", "rimuru-addkata", "addtoxic", "tambahtoxic", "addkata"]
handler.tags = ["group"]
handler.description = "Tambah kata toxic ke daftar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addtoxic", "alias": ["tambahtoxic", "addkata"], "category": "group", "description": "Tambah kata toxic ke daftar", "usage": ".addtoxic <kata>", "example": ".addtoxic kata_kasar", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-addtoxic": "addtoxic", "rimuru-addtoxic": "addtoxic", "rimuru-tambahtoxic": "tambahtoxic", "rimuru-addkata": "addkata", "addtoxic": "addtoxic", "tambahtoxic": "tambahtoxic", "addkata": "addkata"}
export default handler
