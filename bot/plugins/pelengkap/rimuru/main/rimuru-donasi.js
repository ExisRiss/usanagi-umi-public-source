/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/donasi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "donasi", "category": "main", "aliasMap": {"rimuru-main-donasi": "donasi", "rimuru-donasi": "donasi", "rimuru-donate": "donate", "rimuru-donation": "donation", "rimuru-support": "support", "rimuru-saweria": "saweria", "rimuru-trakteer": "trakteer", "donate": "donate", "donation": "donation", "support": "support", "saweria": "saweria", "trakteer": "trakteer"}, "description": "Informasi donasi untuk mendukung bot dengan QRIS", "usage": ".donasi", "example": ".donasi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/donasi.js", metadata, m, extra)
handler.help = ["rimuru-main-donasi"]
handler.command = ["rimuru-main-donasi", "rimuru-donasi", "rimuru-donate", "rimuru-donation", "rimuru-support", "rimuru-saweria", "rimuru-trakteer", "donate", "donation", "support", "saweria", "trakteer"]
handler.tags = ["main"]
handler.description = "Informasi donasi untuk mendukung bot dengan QRIS"
handler.importSource = "rimuru"
handler.importConfig = {"name": "donasi", "alias": ["donate", "donation", "support", "saweria", "trakteer"], "category": "main", "description": "Informasi donasi untuk mendukung bot dengan QRIS", "usage": ".donasi", "example": ".donasi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-donasi": "donasi", "rimuru-donasi": "donasi", "rimuru-donate": "donate", "rimuru-donation": "donation", "rimuru-support": "support", "rimuru-saweria": "saweria", "rimuru-trakteer": "trakteer", "donate": "donate", "donation": "donation", "support": "support", "saweria": "saweria", "trakteer": "trakteer"}
export default handler
