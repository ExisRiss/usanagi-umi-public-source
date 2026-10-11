/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/play.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "play", "category": "search", "aliasMap": {"rimuru-search-play": "play", "rimuru-play": "play", "rimuru-playaudio": "playaudio"}, "description": "Putar musik dari YouTube", "usage": ".play <query>", "example": ".play komang", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/play.js", metadata, m, extra)
handler.help = ["rimuru-search-play <query>"]
handler.command = ["rimuru-search-play", "rimuru-play", "rimuru-playaudio"]
handler.tags = ["search"]
handler.description = "Putar musik dari YouTube"
handler.importSource = "rimuru"
handler.importConfig = {"name": "play", "alias": ["playaudio"], "category": "search", "description": "Putar musik dari YouTube", "usage": ".play <query>", "example": ".play komang", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-play": "play", "rimuru-play": "play", "rimuru-playaudio": "playaudio"}
export default handler
