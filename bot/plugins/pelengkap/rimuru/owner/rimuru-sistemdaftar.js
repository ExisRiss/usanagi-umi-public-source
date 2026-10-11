/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/sistemdaftar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sistemdaftar", "category": "owner", "aliasMap": {"rimuru-owner-sistemdaftar": "sistemdaftar", "rimuru-sistemdaftar": "sistemdaftar", "rimuru-regmode": "regmode", "rimuru-wajibdaftar": "wajibdaftar", "rimuru-togglereg": "togglereg", "sistemdaftar": "sistemdaftar", "regmode": "regmode", "wajibdaftar": "wajibdaftar", "togglereg": "togglereg"}, "description": "Kelola sistem wajib daftar dan statistik pendaftaran", "usage": ".sistemdaftar <on/off/stats>", "example": ".sistemdaftar stats", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/sistemdaftar.js", metadata, m, extra)
handler.help = ["rimuru-owner-sistemdaftar <on/off/stats>"]
handler.command = ["rimuru-owner-sistemdaftar", "rimuru-sistemdaftar", "rimuru-regmode", "rimuru-wajibdaftar", "rimuru-togglereg", "sistemdaftar", "regmode", "wajibdaftar", "togglereg"]
handler.tags = ["owner"]
handler.description = "Kelola sistem wajib daftar dan statistik pendaftaran"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sistemdaftar", "alias": ["regmode", "wajibdaftar", "togglereg"], "category": "owner", "description": "Kelola sistem wajib daftar dan statistik pendaftaran", "usage": ".sistemdaftar <on/off/stats>", "example": ".sistemdaftar stats", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-sistemdaftar": "sistemdaftar", "rimuru-sistemdaftar": "sistemdaftar", "rimuru-regmode": "regmode", "rimuru-wajibdaftar": "wajibdaftar", "rimuru-togglereg": "togglereg", "sistemdaftar": "sistemdaftar", "regmode": "regmode", "wajibdaftar": "wajibdaftar", "togglereg": "togglereg"}
export default handler
