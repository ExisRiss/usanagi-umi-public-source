/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekprem.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekprem", "category": "cek", "aliasMap": {"rimuru-cek-cekprem": "cekprem", "rimuru-cekprem": "cekprem", "rimuru-cekpremium": "cekpremium", "rimuru-preminfo": "preminfo", "cekprem": "cekprem", "cekpremium": "cekpremium", "preminfo": "preminfo"}, "description": "Cek detail status premium user", "usage": ".cekprem @user", "example": ".cekprem", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekprem.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekprem @user"]
handler.command = ["rimuru-cek-cekprem", "rimuru-cekprem", "rimuru-cekpremium", "rimuru-preminfo", "cekprem", "cekpremium", "preminfo"]
handler.tags = ["cek"]
handler.description = "Cek detail status premium user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekprem", "alias": ["cekpremium", "preminfo"], "category": "cek", "description": "Cek detail status premium user", "usage": ".cekprem @user", "example": ".cekprem", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekprem": "cekprem", "rimuru-cekprem": "cekprem", "rimuru-cekpremium": "cekpremium", "rimuru-preminfo": "preminfo", "cekprem": "cekprem", "cekpremium": "cekpremium", "preminfo": "preminfo"}
export default handler
