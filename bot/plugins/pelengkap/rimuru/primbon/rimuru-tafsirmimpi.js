/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/tafsirmimpi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tafsirmimpi", "category": "primbon", "aliasMap": {"rimuru-primbon-tafsirmimpi": "tafsirmimpi", "rimuru-tafsirmimpi": "tafsirmimpi", "rimuru-artimimpi": "artimimpi", "artimimpi": "artimimpi"}, "description": "Cari tafsir mimpi", "usage": ".tafsirmimpi <kata kunci>", "example": ".tafsirmimpi bertemu", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/tafsirmimpi.js", metadata, m, extra)
handler.help = ["rimuru-primbon-tafsirmimpi <kata kunci>"]
handler.command = ["rimuru-primbon-tafsirmimpi", "rimuru-tafsirmimpi", "rimuru-artimimpi", "artimimpi"]
handler.tags = ["primbon"]
handler.description = "Cari tafsir mimpi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tafsirmimpi", "alias": ["artimimpi", "mimpi"], "category": "primbon", "description": "Cari tafsir mimpi", "usage": ".tafsirmimpi <kata kunci>", "example": ".tafsirmimpi bertemu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-tafsirmimpi": "tafsirmimpi", "rimuru-tafsirmimpi": "tafsirmimpi", "rimuru-artimimpi": "artimimpi", "artimimpi": "artimimpi"}
export default handler
