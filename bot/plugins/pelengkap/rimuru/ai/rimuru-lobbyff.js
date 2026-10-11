/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/lobbyff.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lobbyff", "category": "maker", "aliasMap": {"rimuru-maker-lobbyff": "lobbyff", "rimuru-lobbyff": "lobbyff", "rimuru-fflobby": "fflobby", "rimuru-freefirelobby": "freefirelobby", "lobbyff": "lobbyff", "fflobby": "fflobby", "freefirelobby": "freefirelobby"}, "description": "Membuat gambar lobby Free Fire dengan 22 template Aqua", "usage": ".lobbyff <1-22|random>|<nama>", "example": ".lobbyff random|Jagoan FF", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/lobbyff.js", metadata, m, extra)
handler.help = ["rimuru-maker-lobbyff <1-22|random>|<nama>"]
handler.command = ["rimuru-maker-lobbyff", "rimuru-lobbyff", "rimuru-fflobby", "rimuru-freefirelobby", "lobbyff", "fflobby", "freefirelobby"]
handler.tags = ["maker"]
handler.description = "Membuat gambar lobby Free Fire dengan 22 template Aqua"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lobbyff", "alias": ["fflobby", "freefirelobby"], "category": "maker", "description": "Membuat gambar lobby Free Fire dengan 22 template Aqua", "usage": ".lobbyff <1-22|random>|<nama>", "example": ".lobbyff random|Jagoan FF", "isPremium": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-lobbyff": "lobbyff", "rimuru-lobbyff": "lobbyff", "rimuru-fflobby": "fflobby", "rimuru-freefirelobby": "freefirelobby", "lobbyff": "lobbyff", "fflobby": "fflobby", "freefirelobby": "freefirelobby"}
export default handler
