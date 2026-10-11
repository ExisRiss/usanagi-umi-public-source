/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/apkzoic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apkzoic", "category": "search", "aliasMap": {"rimuru-search-apkzoic": "apkzoic", "rimuru-apkzoic": "apkzoic", "rimuru-apkz": "apkz", "apkzoic": "apkzoic", "apkz": "apkz"}, "description": "Cari APK MOD di ApkZoic", "usage": ".apkzoic <query>", "example": ".apkzoic Subway Surfer", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/apkzoic.js", metadata, m, extra)
handler.help = ["rimuru-search-apkzoic <query>"]
handler.command = ["rimuru-search-apkzoic", "rimuru-apkzoic", "rimuru-apkz", "apkzoic", "apkz"]
handler.tags = ["search"]
handler.description = "Cari APK MOD di ApkZoic"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apkzoic", "alias": ["apkz"], "category": "search", "description": "Cari APK MOD di ApkZoic", "usage": ".apkzoic <query>", "example": ".apkzoic Subway Surfer", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-apkzoic": "apkzoic", "rimuru-apkzoic": "apkzoic", "rimuru-apkz": "apkz", "apkzoic": "apkzoic", "apkz": "apkz"}
export default handler
