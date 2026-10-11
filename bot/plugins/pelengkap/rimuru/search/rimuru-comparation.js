/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/comparation.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "advance-comparation", "category": "search", "aliasMap": {"rimuru-search-advance-comparation": "advance-comparation", "rimuru-advance-comparation": "advance-comparation", "rimuru-bandingkan-device": "bandingkan-device", "rimuru-compare": "compare", "advance-comparation": "advance-comparation", "bandingkan-device": "bandingkan-device", "compare": "compare"}, "description": "Bandingkan dua perangkat (smartphone, tablet, laptop, dll)", "usage": ".bandingkan-device [type] <query>", "example": ".bandingkan-device phone samsung s24", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/comparation.js", metadata, m, extra)
handler.help = ["rimuru-search-advance-comparation [type] <query>"]
handler.command = ["rimuru-search-advance-comparation", "rimuru-advance-comparation", "rimuru-bandingkan-device", "rimuru-compare", "advance-comparation", "bandingkan-device", "compare"]
handler.tags = ["search"]
handler.description = "Bandingkan dua perangkat (smartphone, tablet, laptop, dll)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "advance-comparation", "alias": ["bandingkan-device", "compare"], "category": "search", "description": "Bandingkan dua perangkat (smartphone, tablet, laptop, dll)", "usage": ".bandingkan-device [type] <query>", "example": ".bandingkan-device phone samsung s24", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-advance-comparation": "advance-comparation", "rimuru-advance-comparation": "advance-comparation", "rimuru-bandingkan-device": "bandingkan-device", "rimuru-compare": "compare", "advance-comparation": "advance-comparation", "bandingkan-device": "bandingkan-device", "compare": "compare"}
export default handler
