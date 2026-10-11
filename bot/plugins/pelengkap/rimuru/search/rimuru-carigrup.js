/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/carigrup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "carigrup", "category": "search", "aliasMap": {"rimuru-search-carigrup": "carigrup", "rimuru-carigrup": "carigrup", "rimuru-searchgrup": "searchgrup", "rimuru-findgrup": "findgrup", "rimuru-grupwa": "grupwa", "carigrup": "carigrup", "searchgrup": "searchgrup", "findgrup": "findgrup", "grupwa": "grupwa"}, "description": "Cari grup WhatsApp berdasarkan keyword", "usage": ".carigrup <keyword>", "example": ".carigrup gb isian", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/carigrup.js", metadata, m, extra)
handler.help = ["rimuru-search-carigrup <keyword>"]
handler.command = ["rimuru-search-carigrup", "rimuru-carigrup", "rimuru-searchgrup", "rimuru-findgrup", "rimuru-grupwa", "carigrup", "searchgrup", "findgrup", "grupwa"]
handler.tags = ["search"]
handler.description = "Cari grup WhatsApp berdasarkan keyword"
handler.importSource = "rimuru"
handler.importConfig = {"name": "carigrup", "alias": ["searchgrup", "findgrup", "grupwa"], "category": "search", "description": "Cari grup WhatsApp berdasarkan keyword", "usage": ".carigrup <keyword>", "example": ".carigrup gb isian", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-carigrup": "carigrup", "rimuru-carigrup": "carigrup", "rimuru-searchgrup": "searchgrup", "rimuru-findgrup": "findgrup", "rimuru-grupwa": "grupwa", "carigrup": "carigrup", "searchgrup": "searchgrup", "findgrup": "findgrup", "grupwa": "grupwa"}
export default handler
