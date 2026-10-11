/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanceckin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clancheckin", "category": "clan", "aliasMap": {"rimuru-clan-clancheckin": "clancheckin", "rimuru-clancheckin": "clancheckin", "rimuru-checkin": "checkin", "rimuru-dailyclan": "dailyclan", "clancheckin": "clancheckin", "checkin": "checkin", "dailyclan": "dailyclan"}, "description": "Checkin harian untuk dapet XP clan", "usage": ".clancheckin", "example": ".clancheckin", "cooldown": 86400, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanceckin.js", metadata, m, extra)
handler.help = ["rimuru-clan-clancheckin"]
handler.command = ["rimuru-clan-clancheckin", "rimuru-clancheckin", "rimuru-checkin", "rimuru-dailyclan", "clancheckin", "checkin", "dailyclan"]
handler.tags = ["clan"]
handler.description = "Checkin harian untuk dapet XP clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clancheckin", "alias": ["checkin", "dailyclan"], "category": "clan", "description": "Checkin harian untuk dapet XP clan", "usage": ".clancheckin", "example": ".clancheckin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 86400, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clancheckin": "clancheckin", "rimuru-clancheckin": "clancheckin", "rimuru-checkin": "checkin", "rimuru-dailyclan": "dailyclan", "clancheckin": "clancheckin", "checkin": "checkin", "dailyclan": "dailyclan"}
export default handler
