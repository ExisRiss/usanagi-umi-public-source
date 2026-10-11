/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/pintereststalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pintereststalk", "category": "stalker", "aliasMap": {"rimuru-stalker-pintereststalk": "pintereststalk", "rimuru-pintereststalk": "pintereststalk", "rimuru-pinterestid": "pinterestid", "rimuru-stalkpinterest": "stalkpinterest", "rimuru-stalkpin": "stalkpin", "pintereststalk": "pintereststalk", "pinterestid": "pinterestid", "stalkpinterest": "stalkpinterest", "stalkpin": "stalkpin"}, "description": "Melihat informasi lengkap akun Pinterest berdasarkan username.", "usage": ".pintereststalk <username>", "example": ".pintereststalk dims", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/pintereststalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-pintereststalk <username>"]
handler.command = ["rimuru-stalker-pintereststalk", "rimuru-pintereststalk", "rimuru-pinterestid", "rimuru-stalkpinterest", "rimuru-stalkpin", "pintereststalk", "pinterestid", "stalkpinterest", "stalkpin"]
handler.tags = ["stalker"]
handler.description = "Melihat informasi lengkap akun Pinterest berdasarkan username."
handler.importSource = "rimuru"
handler.importConfig = {"name": "pintereststalk", "alias": ["pinterestid", "stalkpinterest", "stalkpin"], "category": "stalker", "description": "Melihat informasi lengkap akun Pinterest berdasarkan username.", "usage": ".pintereststalk <username>", "example": ".pintereststalk dims", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-pintereststalk": "pintereststalk", "rimuru-pintereststalk": "pintereststalk", "rimuru-pinterestid": "pinterestid", "rimuru-stalkpinterest": "stalkpinterest", "rimuru-stalkpin": "stalkpin", "pintereststalk": "pintereststalk", "pinterestid": "pinterestid", "stalkpinterest": "stalkpinterest", "stalkpin": "stalkpin"}
export default handler
