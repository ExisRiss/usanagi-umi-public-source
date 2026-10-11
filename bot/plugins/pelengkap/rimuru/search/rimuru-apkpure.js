/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/apkpure.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apkpure", "category": "search", "aliasMap": {"rimuru-search-apkpure": "apkpure", "rimuru-apkpure": "apkpure", "rimuru-apkp": "apkp", "apkpure": "apkpure", "apkp": "apkp"}, "description": "Cari APK di ApkPure", "usage": ".apkpure <query>", "example": ".apkpure WhatsApp", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/apkpure.js", metadata, m, extra)
handler.help = ["rimuru-search-apkpure <query>"]
handler.command = ["rimuru-search-apkpure", "rimuru-apkpure", "rimuru-apkp", "apkpure", "apkp"]
handler.tags = ["search"]
handler.description = "Cari APK di ApkPure"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apkpure", "alias": ["apkp"], "category": "search", "description": "Cari APK di ApkPure", "usage": ".apkpure <query>", "example": ".apkpure WhatsApp", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-apkpure": "apkpure", "rimuru-apkpure": "apkpure", "rimuru-apkp": "apkp", "apkpure": "apkpure", "apkp": "apkp"}
export default handler
