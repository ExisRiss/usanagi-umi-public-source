/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/pixiv.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pixiv", "category": "search", "aliasMap": {"rimuru-search-pixiv": "pixiv", "rimuru-pixiv": "pixiv", "rimuru-pixivsearch": "pixivsearch", "rimuru-caripixiv": "caripixiv", "pixiv": "pixiv", "pixivsearch": "pixivsearch", "caripixiv": "caripixiv"}, "description": "Cari artwork di Pixiv", "usage": ".pixiv <query>", "example": ".pixiv rem", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/pixiv.js", metadata, m, extra)
handler.help = ["rimuru-search-pixiv <query>"]
handler.command = ["rimuru-search-pixiv", "rimuru-pixiv", "rimuru-pixivsearch", "rimuru-caripixiv", "pixiv", "pixivsearch", "caripixiv"]
handler.tags = ["search"]
handler.description = "Cari artwork di Pixiv"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pixiv", "alias": ["pixivsearch", "caripixiv"], "category": "search", "description": "Cari artwork di Pixiv", "usage": ".pixiv <query>", "example": ".pixiv rem", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-pixiv": "pixiv", "rimuru-pixiv": "pixiv", "rimuru-pixivsearch": "pixivsearch", "rimuru-caripixiv": "caripixiv", "pixiv": "pixiv", "pixivsearch": "pixivsearch", "caripixiv": "caripixiv"}
export default handler
