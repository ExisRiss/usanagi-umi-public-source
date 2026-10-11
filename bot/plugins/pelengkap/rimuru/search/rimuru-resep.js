/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/resep.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resep", "category": "search", "aliasMap": {"rimuru-search-resep": "resep", "rimuru-resep": "resep", "rimuru-resepmasak": "resepmasak", "rimuru-resepmasakan": "resepmasakan", "rimuru-caramasak": "caramasak", "resep": "resep", "resepmasak": "resepmasak", "resepmasakan": "resepmasakan", "caramasak": "caramasak"}, "description": "Cari resep makanan yang lengkap dan enak", "usage": ".resep <nama makanan>", "example": ".resep ayam geprek", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/resep.js", metadata, m, extra)
handler.help = ["rimuru-search-resep <nama makanan>"]
handler.command = ["rimuru-search-resep", "rimuru-resep", "rimuru-resepmasak", "rimuru-resepmasakan", "rimuru-caramasak", "resep", "resepmasak", "resepmasakan", "caramasak"]
handler.tags = ["search"]
handler.description = "Cari resep makanan yang lengkap dan enak"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resep", "alias": ["resepmasak", "resepmasakan", "caramasak"], "category": "search", "description": "Cari resep makanan yang lengkap dan enak", "usage": ".resep <nama makanan>", "example": ".resep ayam geprek", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-resep": "resep", "rimuru-resep": "resep", "rimuru-resepmasak": "resepmasak", "rimuru-resepmasakan": "resepmasakan", "rimuru-caramasak": "caramasak", "resep": "resep", "resepmasak": "resepmasak", "resepmasakan": "resepmasakan", "caramasak": "caramasak"}
export default handler
