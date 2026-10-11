/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/animesanka.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animesanka", "category": "search", "aliasMap": {"rimuru-search-animesanka": "animesanka", "rimuru-animesanka": "animesanka", "rimuru-sanka": "sanka", "rimuru-animeid": "animeid", "rimuru-animeindo": "animeindo", "animesanka": "animesanka", "sanka": "sanka", "animeid": "animeid", "animeindo": "animeindo"}, "description": "Cari info anime, streaming, download dari SankaVollerei", "usage": ".animesanka <subcommand>", "example": ".animesanka search naruto", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/animesanka.js", metadata, m, extra)
handler.help = ["rimuru-search-animesanka <subcommand>"]
handler.command = ["rimuru-search-animesanka", "rimuru-animesanka", "rimuru-sanka", "rimuru-animeid", "rimuru-animeindo", "animesanka", "sanka", "animeid", "animeindo"]
handler.tags = ["search"]
handler.description = "Cari info anime, streaming, download dari SankaVollerei"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animesanka", "alias": ["sanka", "animeid", "animeindo"], "category": "search", "description": "Cari info anime, streaming, download dari SankaVollerei", "usage": ".animesanka <subcommand>", "example": ".animesanka search naruto", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-animesanka": "animesanka", "rimuru-animesanka": "animesanka", "rimuru-sanka": "sanka", "rimuru-animeid": "animeid", "rimuru-animeindo": "animeindo", "animesanka": "animesanka", "sanka": "sanka", "animeid": "animeid", "animeindo": "animeindo"}
export default handler
