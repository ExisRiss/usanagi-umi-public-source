/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/bratcewek.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bratcewek", "category": "sticker", "aliasMap": {"rimuru-sticker-bratcewek": "bratcewek", "rimuru-bratcewek": "bratcewek", "rimuru-cewekbrat": "cewekbrat", "rimuru-bratperempuan": "bratperempuan", "rimuru-bratgirl": "bratgirl", "bratcewek": "bratcewek", "bratperempuan": "bratperempuan", "bratgirl": "bratgirl"}, "description": "Membuat sticker brat", "usage": ".bratcewek <text>", "example": ".bratcewek Hai semua", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/bratcewek.js", metadata, m, extra)
handler.help = ["rimuru-sticker-bratcewek <text>"]
handler.command = ["rimuru-sticker-bratcewek", "rimuru-bratcewek", "rimuru-cewekbrat", "rimuru-bratperempuan", "rimuru-bratgirl", "bratcewek", "bratperempuan", "bratgirl"]
handler.tags = ["sticker"]
handler.description = "Membuat sticker brat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bratcewek", "alias": ["cewekbrat", "bratperempuan", "bratgirl"], "category": "sticker", "description": "Membuat sticker brat", "usage": ".bratcewek <text>", "example": ".bratcewek Hai semua", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-bratcewek": "bratcewek", "rimuru-bratcewek": "bratcewek", "rimuru-cewekbrat": "cewekbrat", "rimuru-bratperempuan": "bratperempuan", "rimuru-bratgirl": "bratgirl", "bratcewek": "bratcewek", "bratperempuan": "bratperempuan", "bratgirl": "bratgirl"}
export default handler
