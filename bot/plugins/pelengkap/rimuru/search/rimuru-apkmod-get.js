/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/apkmod-get.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apkmod-get", "category": "search", "aliasMap": {"rimuru-search-apkmod-get": "apkmod-get", "rimuru-apkmod-get": "apkmod-get", "rimuru-apkmodget": "apkmodget", "rimuru-getapkmod": "getapkmod", "apkmod-get": "apkmod-get", "apkmodget": "apkmodget", "getapkmod": "getapkmod"}, "description": "Download APK MOD dari hasil pencarian", "usage": ".apkmod-get <no> <query>", "example": ".apkmod-get 1 vpn", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/apkmod-get.js", metadata, m, extra)
handler.help = ["rimuru-search-apkmod-get <no> <query>"]
handler.command = ["rimuru-search-apkmod-get", "rimuru-apkmod-get", "rimuru-apkmodget", "rimuru-getapkmod", "apkmod-get", "apkmodget", "getapkmod"]
handler.tags = ["search"]
handler.description = "Download APK MOD dari hasil pencarian"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apkmod-get", "alias": ["apkmodget", "getapkmod"], "category": "search", "description": "Download APK MOD dari hasil pencarian", "usage": ".apkmod-get <no> <query>", "example": ".apkmod-get 1 vpn", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-apkmod-get": "apkmod-get", "rimuru-apkmod-get": "apkmod-get", "rimuru-apkmodget": "apkmodget", "rimuru-getapkmod": "getapkmod", "apkmod-get": "apkmod-get", "apkmodget": "apkmodget", "getapkmod": "getapkmod"}
export default handler
