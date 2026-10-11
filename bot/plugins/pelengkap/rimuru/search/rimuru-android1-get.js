/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/android1-get.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "android1-get", "category": "search", "aliasMap": {"rimuru-search-android1-get": "android1-get", "rimuru-android1-get": "android1-get", "rimuru-an1get": "an1get", "rimuru-an1dl": "an1dl", "android1-get": "android1-get", "an1get": "an1get", "an1dl": "an1dl"}, "description": "Download APK dari Android1", "usage": ".android1-get <url>", "example": ".android1-get https://an1.com/xxx", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/android1-get.js", metadata, m, extra)
handler.help = ["rimuru-search-android1-get <url>"]
handler.command = ["rimuru-search-android1-get", "rimuru-android1-get", "rimuru-an1get", "rimuru-an1dl", "android1-get", "an1get", "an1dl"]
handler.tags = ["search"]
handler.description = "Download APK dari Android1"
handler.importSource = "rimuru"
handler.importConfig = {"name": "android1-get", "alias": ["an1get", "an1dl"], "category": "search", "description": "Download APK dari Android1", "usage": ".android1-get <url>", "example": ".android1-get https://an1.com/xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-android1-get": "android1-get", "rimuru-android1-get": "android1-get", "rimuru-an1get": "an1get", "rimuru-an1dl": "an1dl", "android1-get": "android1-get", "an1get": "an1get", "an1dl": "an1dl"}
export default handler
