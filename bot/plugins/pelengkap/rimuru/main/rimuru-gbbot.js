/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/gbbot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gbbot", "category": "main", "aliasMap": {"rimuru-main-gbbot": "gbbot", "rimuru-gbbot": "gbbot", "rimuru-botgb": "botgb", "rimuru-officialgb": "officialgb", "rimuru-grupbot": "grupbot", "rimuru-gcbot": "gcbot", "rimuru-setgbbot": "setgbbot", "gbbot": "gbbot", "botgb": "botgb", "officialgb": "officialgb", "grupbot": "grupbot", "gcbot": "gcbot", "setgbbot": "setgbbot"}, "description": "Menampilkan dan mengatur link Grup Official Bot", "usage": ".gbbot / .setgbbot <link>", "example": ".setgbbot https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxx", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/gbbot.js", metadata, m, extra)
handler.help = ["rimuru-main-gbbot / .setgbbot <link>"]
handler.command = ["rimuru-main-gbbot", "rimuru-gbbot", "rimuru-botgb", "rimuru-officialgb", "rimuru-grupbot", "rimuru-gcbot", "rimuru-setgbbot", "gbbot", "botgb", "officialgb", "grupbot", "gcbot", "setgbbot"]
handler.tags = ["main"]
handler.description = "Menampilkan dan mengatur link Grup Official Bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gbbot", "alias": ["botgb", "officialgb", "grupbot", "gcbot", "setgbbot"], "category": "main", "description": "Menampilkan dan mengatur link Grup Official Bot", "usage": ".gbbot / .setgbbot <link>", "example": ".setgbbot https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-gbbot": "gbbot", "rimuru-gbbot": "gbbot", "rimuru-botgb": "botgb", "rimuru-officialgb": "officialgb", "rimuru-grupbot": "grupbot", "rimuru-gcbot": "gcbot", "rimuru-setgbbot": "setgbbot", "gbbot": "gbbot", "botgb": "botgb", "officialgb": "officialgb", "grupbot": "grupbot", "gcbot": "gcbot", "setgbbot": "setgbbot"}
export default handler
