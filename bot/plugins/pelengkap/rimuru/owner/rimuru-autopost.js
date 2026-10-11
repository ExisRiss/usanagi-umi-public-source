/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autopost.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autopost", "category": "owner", "aliasMap": {"rimuru-owner-autopost": "autopost", "rimuru-autopost": "autopost", "rimuru-apost": "apost", "rimuru-autopostchannel": "autopostchannel", "autopost": "autopost", "apost": "apost", "autopostchannel": "autopostchannel"}, "description": "Auto post gambar random ke channel/saluran (NEWSLETTER)", "usage": ".autopost <on/off/set>", "example": ".autopost on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autopost.js", metadata, m, extra)
handler.help = ["rimuru-owner-autopost <on/off/set>"]
handler.command = ["rimuru-owner-autopost", "rimuru-autopost", "rimuru-apost", "rimuru-autopostchannel", "autopost", "apost", "autopostchannel"]
handler.tags = ["owner"]
handler.description = "Auto post gambar random ke channel/saluran (NEWSLETTER)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autopost", "alias": ["apost", "autopostchannel"], "category": "owner", "description": "Auto post gambar random ke channel/saluran (NEWSLETTER)", "usage": ".autopost <on/off/set>", "example": ".autopost on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "isAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-autopost": "autopost", "rimuru-autopost": "autopost", "rimuru-apost": "apost", "rimuru-autopostchannel": "autopostchannel", "autopost": "autopost", "apost": "apost", "autopostchannel": "autopostchannel"}
export default handler
