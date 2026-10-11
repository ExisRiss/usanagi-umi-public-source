/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/carisinyal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spekhp", "category": "search", "aliasMap": {"rimuru-search-spekhp": "spekhp", "rimuru-spekhp": "spekhp", "rimuru-spek": "spek", "rimuru-spesifikasi": "spesifikasi", "spekhp": "spekhp", "spek": "spek", "spesifikasi": "spesifikasi"}, "description": "Mencari spesifikasi lengkap smartphone dari Carisinyal.", "usage": ".spekhp <nama hp>", "example": ".spekhp oppo a3s", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/carisinyal.js", metadata, m, extra)
handler.help = ["rimuru-search-spekhp <nama hp>"]
handler.command = ["rimuru-search-spekhp", "rimuru-spekhp", "rimuru-spek", "rimuru-spesifikasi", "spekhp", "spek", "spesifikasi"]
handler.tags = ["search"]
handler.description = "Mencari spesifikasi lengkap smartphone dari Carisinyal."
handler.importSource = "rimuru"
handler.importConfig = {"name": "spekhp", "alias": ["spek", "spesifikasi"], "category": "search", "description": "Mencari spesifikasi lengkap smartphone dari Carisinyal.", "usage": ".spekhp <nama hp>", "example": ".spekhp oppo a3s", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-spekhp": "spekhp", "rimuru-spekhp": "spekhp", "rimuru-spek": "spek", "rimuru-spesifikasi": "spesifikasi", "spekhp": "spekhp", "spek": "spek", "spesifikasi": "spesifikasi"}
export default handler
