/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ceknamadana.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceknamadana", "category": "tools", "aliasMap": {"rimuru-tools-ceknamadana": "ceknamadana", "rimuru-ceknamadana": "ceknamadana", "rimuru-cekdana": "cekdana", "ceknamadana": "ceknamadana", "cekdana": "cekdana"}, "description": "Cek Nama Pengguna Dana", "usage": ".cekdana", "example": ".cekdana", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ceknamadana.js", metadata, m, extra)
handler.help = ["rimuru-tools-ceknamadana"]
handler.command = ["rimuru-tools-ceknamadana", "rimuru-ceknamadana", "rimuru-cekdana", "ceknamadana", "cekdana"]
handler.tags = ["tools"]
handler.description = "Cek Nama Pengguna Dana"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceknamadana", "alias": ["cekdana"], "category": "tools", "description": "Cek Nama Pengguna Dana", "usage": ".cekdana", "example": ".cekdana", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ceknamadana": "ceknamadana", "rimuru-ceknamadana": "ceknamadana", "rimuru-cekdana": "cekdana", "ceknamadana": "ceknamadana", "cekdana": "cekdana"}
export default handler
