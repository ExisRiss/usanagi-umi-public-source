/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/tenor.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tenor", "category": "search", "aliasMap": {"rimuru-search-tenor": "tenor", "rimuru-tenor": "tenor", "rimuru-gif": "gif", "rimuru-gifsearch": "gifsearch", "tenor": "tenor", "gifsearch": "gifsearch"}, "description": "Cari GIF dari Tenor", "usage": ".tenor <query>", "example": ".tenor kucing lucu", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/tenor.js", metadata, m, extra)
handler.help = ["rimuru-search-tenor <query>"]
handler.command = ["rimuru-search-tenor", "rimuru-tenor", "rimuru-gif", "rimuru-gifsearch", "tenor", "gifsearch"]
handler.tags = ["search"]
handler.description = "Cari GIF dari Tenor"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tenor", "alias": ["gif", "gifsearch"], "category": "search", "description": "Cari GIF dari Tenor", "usage": ".tenor <query>", "example": ".tenor kucing lucu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-tenor": "tenor", "rimuru-tenor": "tenor", "rimuru-gif": "gif", "rimuru-gifsearch": "gifsearch", "tenor": "tenor", "gifsearch": "gifsearch"}
export default handler
