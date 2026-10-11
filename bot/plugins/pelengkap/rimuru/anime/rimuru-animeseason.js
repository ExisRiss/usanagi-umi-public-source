/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animeseason.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animeseason", "category": "anime", "aliasMap": {"rimuru-anime-animeseason": "animeseason", "rimuru-animeseason": "animeseason", "rimuru-season": "season", "rimuru-musimanime": "musimanime", "rimuru-animemusim": "animemusim", "animeseason": "animeseason", "musimanime": "musimanime", "animemusim": "animemusim"}, "description": "Info lengkap anime musim ini (Spring/Summer/Fall/Winter) + statistik", "usage": ".animeseason [season]", "example": ".animeseason\n.animeseason spring\n.animeseason summer\n.animeseason fall\n.animeseason winter\n.animeseason 2024", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animeseason.js", metadata, m, extra)
handler.help = ["rimuru-anime-animeseason [season]"]
handler.command = ["rimuru-anime-animeseason", "rimuru-animeseason", "rimuru-season", "rimuru-musimanime", "rimuru-animemusim", "animeseason", "musimanime", "animemusim"]
handler.tags = ["anime"]
handler.description = "Info lengkap anime musim ini (Spring/Summer/Fall/Winter) + statistik"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animeseason", "alias": ["season", "musimanime", "animemusim"], "category": "anime", "description": "Info lengkap anime musim ini (Spring/Summer/Fall/Winter) + statistik", "usage": ".animeseason [season]", "example": ".animeseason\n.animeseason spring\n.animeseason summer\n.animeseason fall\n.animeseason winter\n.animeseason 2024", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animeseason": "animeseason", "rimuru-animeseason": "animeseason", "rimuru-season": "season", "rimuru-musimanime": "musimanime", "rimuru-animemusim": "animemusim", "animeseason": "animeseason", "musimanime": "musimanime", "animemusim": "animemusim"}
export default handler
