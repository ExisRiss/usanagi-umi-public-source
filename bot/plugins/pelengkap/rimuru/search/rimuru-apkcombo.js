/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/apkcombo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apkcombo", "category": "search", "aliasMap": {"rimuru-search-apkcombo": "apkcombo", "rimuru-apkcombo": "apkcombo", "rimuru-apk": "apk", "rimuru-apksearch": "apksearch", "apkcombo": "apkcombo", "apk": "apk", "apksearch": "apksearch"}, "description": "Cari APK di ApkCombo", "usage": ".apkcombo <query>", "example": ".apkcombo WhatsApp", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/apkcombo.js", metadata, m, extra)
handler.help = ["rimuru-search-apkcombo <query>"]
handler.command = ["rimuru-search-apkcombo", "rimuru-apkcombo", "rimuru-apk", "rimuru-apksearch", "apkcombo", "apk", "apksearch"]
handler.tags = ["search"]
handler.description = "Cari APK di ApkCombo"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apkcombo", "alias": ["apk", "apksearch"], "category": "search", "description": "Cari APK di ApkCombo", "usage": ".apkcombo <query>", "example": ".apkcombo WhatsApp", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-apkcombo": "apkcombo", "rimuru-apkcombo": "apkcombo", "rimuru-apk": "apk", "rimuru-apksearch": "apksearch", "apkcombo": "apkcombo", "apk": "apk", "apksearch": "apksearch"}
export default handler
