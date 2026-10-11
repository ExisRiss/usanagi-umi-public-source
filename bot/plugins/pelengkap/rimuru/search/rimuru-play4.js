/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/play4.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "play4", "category": "search", "aliasMap": {"rimuru-search-play4": "play4", "rimuru-play4": "play4", "rimuru-playaudio4": "playaudio4", "play4": "play4", "playaudio4": "playaudio4"}, "description": "Putar musik dari YouTube (Faa API)", "usage": ".play4 <query>", "example": ".play4 komang", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/play4.js", metadata, m, extra)
handler.help = ["rimuru-search-play4 <query>"]
handler.command = ["rimuru-search-play4", "rimuru-play4", "rimuru-playaudio4", "play4", "playaudio4"]
handler.tags = ["search"]
handler.description = "Putar musik dari YouTube (Faa API)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "play4", "alias": ["playaudio4"], "category": "search", "description": "Putar musik dari YouTube (Faa API)", "usage": ".play4 <query>", "example": ".play4 komang", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-play4": "play4", "rimuru-play4": "play4", "rimuru-playaudio4": "playaudio4", "play4": "play4", "playaudio4": "playaudio4"}
export default handler
