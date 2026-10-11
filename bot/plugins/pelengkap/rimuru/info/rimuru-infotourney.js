/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/infotourney.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "infotourney", "category": "info", "aliasMap": {"rimuru-info-infotourney": "infotourney", "rimuru-infotourney": "infotourney", "rimuru-tourney": "tourney", "rimuru-turnamen": "turnamen", "rimuru-mltourney": "mltourney", "infotourney": "infotourney", "tourney": "tourney", "turnamen": "turnamen", "mltourney": "mltourney"}, "description": "Info turnamen Mobile Legends terbaru", "usage": ".infotourney", "example": ".infotourney", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/infotourney.js", metadata, m, extra)
handler.help = ["rimuru-info-infotourney"]
handler.command = ["rimuru-info-infotourney", "rimuru-infotourney", "rimuru-tourney", "rimuru-turnamen", "rimuru-mltourney", "infotourney", "tourney", "turnamen", "mltourney"]
handler.tags = ["info"]
handler.description = "Info turnamen Mobile Legends terbaru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "infotourney", "alias": ["tourney", "turnamen", "mltourney"], "category": "info", "description": "Info turnamen Mobile Legends terbaru", "usage": ".infotourney", "example": ".infotourney", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-infotourney": "infotourney", "rimuru-infotourney": "infotourney", "rimuru-tourney": "tourney", "rimuru-turnamen": "turnamen", "rimuru-mltourney": "mltourney", "infotourney": "infotourney", "tourney": "tourney", "turnamen": "turnamen", "mltourney": "mltourney"}
export default handler
