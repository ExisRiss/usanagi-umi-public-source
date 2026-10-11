/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/apkmod.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apkmod", "category": "search", "aliasMap": {"rimuru-search-apkmod": "apkmod", "rimuru-apkmod": "apkmod", "rimuru-modapk2": "modapk2", "rimuru-apkpremium": "apkpremium", "apkmod": "apkmod", "modapk2": "modapk2", "apkpremium": "apkpremium"}, "description": "Cari dan download APK MOD Premium", "usage": ".apkmod <query>", "example": ".apkmod vpn", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/apkmod.js", metadata, m, extra)
handler.help = ["rimuru-search-apkmod <query>"]
handler.command = ["rimuru-search-apkmod", "rimuru-apkmod", "rimuru-modapk2", "rimuru-apkpremium", "apkmod", "modapk2", "apkpremium"]
handler.tags = ["search"]
handler.description = "Cari dan download APK MOD Premium"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apkmod", "alias": ["modapk2", "apkpremium"], "category": "search", "description": "Cari dan download APK MOD Premium", "usage": ".apkmod <query>", "example": ".apkmod vpn", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-apkmod": "apkmod", "rimuru-apkmod": "apkmod", "rimuru-modapk2": "modapk2", "rimuru-apkpremium": "apkpremium", "apkmod": "apkmod", "modapk2": "modapk2", "apkpremium": "apkpremium"}
export default handler
