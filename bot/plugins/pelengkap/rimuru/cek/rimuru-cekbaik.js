/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekbaik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekbaik", "category": "cek", "aliasMap": {"rimuru-cek-cekbaik": "cekbaik", "rimuru-cekbaik": "cekbaik", "rimuru-baik": "baik", "rimuru-kind": "kind", "kind": "kind"}, "description": "Cek seberapa baik kamu", "usage": ".cekbaik <nama>", "example": ".cekbaik Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekbaik.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekbaik <nama>"]
handler.command = ["rimuru-cek-cekbaik", "rimuru-cekbaik", "rimuru-baik", "rimuru-kind", "kind"]
handler.tags = ["cek"]
handler.description = "Cek seberapa baik kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekbaik", "alias": ["baik", "kind"], "category": "cek", "description": "Cek seberapa baik kamu", "usage": ".cekbaik <nama>", "example": ".cekbaik Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekbaik": "cekbaik", "rimuru-cekbaik": "cekbaik", "rimuru-baik": "baik", "rimuru-kind": "kind", "kind": "kind"}
export default handler
