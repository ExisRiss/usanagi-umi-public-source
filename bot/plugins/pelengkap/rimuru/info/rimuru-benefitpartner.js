/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/benefitpartner.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "benefitpartner", "category": "info", "aliasMap": {"rimuru-info-benefitpartner": "benefitpartner", "rimuru-benefitpartner": "benefitpartner", "rimuru-partnerbenefits": "partnerbenefits", "rimuru-keuntunganpartner": "keuntunganpartner", "benefitpartner": "benefitpartner", "partnerbenefits": "partnerbenefits", "keuntunganpartner": "keuntunganpartner"}, "description": "Lihat keuntungan menjadi partner bot", "usage": ".benefitpartner", "example": ".benefitpartner", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/benefitpartner.js", metadata, m, extra)
handler.help = ["rimuru-info-benefitpartner"]
handler.command = ["rimuru-info-benefitpartner", "rimuru-benefitpartner", "rimuru-partnerbenefits", "rimuru-keuntunganpartner", "benefitpartner", "partnerbenefits", "keuntunganpartner"]
handler.tags = ["info"]
handler.description = "Lihat keuntungan menjadi partner bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "benefitpartner", "alias": ["partnerbenefits", "keuntunganpartner"], "category": "info", "description": "Lihat keuntungan menjadi partner bot", "usage": ".benefitpartner", "example": ".benefitpartner", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-info-benefitpartner": "benefitpartner", "rimuru-benefitpartner": "benefitpartner", "rimuru-partnerbenefits": "partnerbenefits", "rimuru-keuntunganpartner": "keuntunganpartner", "benefitpartner": "benefitpartner", "partnerbenefits": "partnerbenefits", "keuntunganpartner": "keuntunganpartner"}
export default handler
