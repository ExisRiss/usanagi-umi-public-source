/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/mcpedl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mcpedl", "category": "search", "aliasMap": {"rimuru-search-mcpedl": "mcpedl", "rimuru-mcpedl": "mcpedl", "rimuru-mcpe": "mcpe", "rimuru-mcpesearch": "mcpesearch", "rimuru-searchmcpe": "searchmcpe", "mcpedl": "mcpedl", "mcpe": "mcpe", "mcpesearch": "mcpesearch", "searchmcpe": "searchmcpe"}, "description": "Cari map dan addon Minecraft PE dari MCPEDL", "usage": ".mcpe <query>", "example": ".mcpe survival", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/mcpedl.js", metadata, m, extra)
handler.help = ["rimuru-search-mcpedl <query>"]
handler.command = ["rimuru-search-mcpedl", "rimuru-mcpedl", "rimuru-mcpe", "rimuru-mcpesearch", "rimuru-searchmcpe", "mcpedl", "mcpe", "mcpesearch", "searchmcpe"]
handler.tags = ["search"]
handler.description = "Cari map dan addon Minecraft PE dari MCPEDL"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mcpedl", "alias": ["mcpe", "mcpesearch", "searchmcpe"], "category": "search", "description": "Cari map dan addon Minecraft PE dari MCPEDL", "usage": ".mcpe <query>", "example": ".mcpe survival", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-mcpedl": "mcpedl", "rimuru-mcpedl": "mcpedl", "rimuru-mcpe": "mcpe", "rimuru-mcpesearch": "mcpesearch", "rimuru-searchmcpe": "searchmcpe", "mcpedl": "mcpedl", "mcpe": "mcpe", "mcpesearch": "mcpesearch", "searchmcpe": "searchmcpe"}
export default handler
