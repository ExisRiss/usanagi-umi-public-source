/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/wuwa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wuwa", "category": "anime", "aliasMap": {"rimuru-anime-wuwa": "wuwa", "rimuru-wuwa": "wuwa", "rimuru-wuwasheet": "wuwasheet", "rimuru-wutheringwaves": "wutheringwaves", "rimuru-wuwa-sheets": "wuwa-sheets", "wuwa": "wuwa", "wuwasheet": "wuwasheet", "wutheringwaves": "wutheringwaves", "wuwa-sheets": "wuwa-sheets"}, "description": "Menampilkan sheet material karakter Wuthering Waves", "usage": ".wuwa <nama karakter>", "example": ".wuwa sanhua", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/wuwa.js", metadata, m, extra)
handler.help = ["rimuru-anime-wuwa <nama karakter>"]
handler.command = ["rimuru-anime-wuwa", "rimuru-wuwa", "rimuru-wuwasheet", "rimuru-wutheringwaves", "rimuru-wuwa-sheets", "wuwa", "wuwasheet", "wutheringwaves", "wuwa-sheets"]
handler.tags = ["anime"]
handler.description = "Menampilkan sheet material karakter Wuthering Waves"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wuwa", "alias": ["wuwasheet", "wutheringwaves", "wuwa-sheets"], "category": "anime", "description": "Menampilkan sheet material karakter Wuthering Waves", "usage": ".wuwa <nama karakter>", "example": ".wuwa sanhua", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-wuwa": "wuwa", "rimuru-wuwa": "wuwa", "rimuru-wuwasheet": "wuwasheet", "rimuru-wutheringwaves": "wutheringwaves", "rimuru-wuwa-sheets": "wuwa-sheets", "wuwa": "wuwa", "wuwasheet": "wuwasheet", "wutheringwaves": "wutheringwaves", "wuwa-sheets": "wuwa-sheets"}
export default handler
