/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/rajab.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rajab", "category": "religi", "aliasMap": {"rimuru-religi-rajab": "rajab", "rimuru-rajab": "rajab", "rimuru-bulanrajab": "bulanrajab", "rajab": "rajab", "bulanrajab": "bulanrajab"}, "description": "Informasi lengkap tentang Bulan Rajab (doa, amalan, keutamaan, dan peristiwa penting)", "usage": ".rajab", "example": ".rajab", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/rajab.js", metadata, m, extra)
handler.help = ["rimuru-religi-rajab"]
handler.command = ["rimuru-religi-rajab", "rimuru-rajab", "rimuru-bulanrajab", "rajab", "bulanrajab"]
handler.tags = ["religi"]
handler.description = "Informasi lengkap tentang Bulan Rajab (doa, amalan, keutamaan, dan peristiwa penting)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rajab", "alias": ["bulanrajab", "rajab"], "category": "religi", "description": "Informasi lengkap tentang Bulan Rajab (doa, amalan, keutamaan, dan peristiwa penting)", "usage": ".rajab", "example": ".rajab", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-rajab": "rajab", "rimuru-rajab": "rajab", "rimuru-bulanrajab": "bulanrajab", "rajab": "rajab", "bulanrajab": "bulanrajab"}
export default handler
