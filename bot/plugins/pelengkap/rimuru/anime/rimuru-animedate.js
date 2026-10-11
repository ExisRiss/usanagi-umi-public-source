/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animedate.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animedate", "category": "anime", "aliasMap": {"rimuru-anime-animedate": "animedate", "rimuru-animedate": "animedate", "rimuru-animerilis": "animerilis", "rimuru-animekalender": "animekalender", "rimuru-animerelease": "animerelease", "animedate": "animedate", "animerilis": "animerilis", "animekalender": "animekalender", "animerelease": "animerelease"}, "description": "Kalender rilis anime musim ini (Spring/Summer/Fall/Winter)", "usage": ".animedate [season]", "example": ".animedate\n.animedate spring\n.animedate summer\n.animedate fall\n.animedate winter", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animedate.js", metadata, m, extra)
handler.help = ["rimuru-anime-animedate [season]"]
handler.command = ["rimuru-anime-animedate", "rimuru-animedate", "rimuru-animerilis", "rimuru-animekalender", "rimuru-animerelease", "animedate", "animerilis", "animekalender", "animerelease"]
handler.tags = ["anime"]
handler.description = "Kalender rilis anime musim ini (Spring/Summer/Fall/Winter)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animedate", "alias": ["animerilis", "animekalender", "animerelease"], "category": "anime", "description": "Kalender rilis anime musim ini (Spring/Summer/Fall/Winter)", "usage": ".animedate [season]", "example": ".animedate\n.animedate spring\n.animedate summer\n.animedate fall\n.animedate winter", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animedate": "animedate", "rimuru-animedate": "animedate", "rimuru-animerilis": "animerilis", "rimuru-animekalender": "animekalender", "rimuru-animerelease": "animerelease", "animedate": "animedate", "animerilis": "animerilis", "animekalender": "animekalender", "animerelease": "animerelease"}
export default handler
