/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekumur.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekumur", "category": "cek", "aliasMap": {"rimuru-cek-cekumur": "cekumur", "rimuru-cekumur": "cekumur", "rimuru-age": "age", "age": "age"}, "description": "Cek umur mental kamu", "usage": ".cekumur <nama>", "example": ".cekumur Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekumur.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekumur <nama>"]
handler.command = ["rimuru-cek-cekumur", "rimuru-cekumur", "rimuru-age", "age"]
handler.tags = ["cek"]
handler.description = "Cek umur mental kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekumur", "alias": ["umur", "age"], "category": "cek", "description": "Cek umur mental kamu", "usage": ".cekumur <nama>", "example": ".cekumur Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekumur": "cekumur", "rimuru-cekumur": "cekumur", "rimuru-age": "age", "age": "age"}
export default handler
