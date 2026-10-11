/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/movieku.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "movieku", "category": "search", "aliasMap": {"rimuru-search-movieku": "movieku", "rimuru-movieku": "movieku", "rimuru-carifilm": "carifilm", "rimuru-carimovie": "carimovie", "movieku": "movieku", "carifilm": "carifilm", "carimovie": "carimovie"}, "description": "Cari dan tampilkan informasi film lengkap dari Movieku beserta link download dalam berbagai kualitas", "usage": ".movieku <judul film>", "example": ".movieku avengers", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/movieku.js", metadata, m, extra)
handler.help = ["rimuru-search-movieku <judul film>"]
handler.command = ["rimuru-search-movieku", "rimuru-movieku", "rimuru-carifilm", "rimuru-carimovie", "movieku", "carifilm", "carimovie"]
handler.tags = ["search"]
handler.description = "Cari dan tampilkan informasi film lengkap dari Movieku beserta link download dalam berbagai kualitas"
handler.importSource = "rimuru"
handler.importConfig = {"name": "movieku", "alias": ["movie", "film", "carifilm", "carimovie"], "category": "search", "description": "Cari dan tampilkan informasi film lengkap dari Movieku beserta link download dalam berbagai kualitas", "usage": ".movieku <judul film>", "example": ".movieku avengers", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-movieku": "movieku", "rimuru-movieku": "movieku", "rimuru-carifilm": "carifilm", "rimuru-carimovie": "carimovie", "movieku": "movieku", "carifilm": "carifilm", "carimovie": "carimovie"}
export default handler
