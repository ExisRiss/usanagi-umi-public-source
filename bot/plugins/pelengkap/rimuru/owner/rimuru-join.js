/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/join.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "join", "category": "owner", "aliasMap": {"rimuru-owner-join": "join", "rimuru-join": "join", "rimuru-joingrup": "joingrup", "rimuru-joingroup": "joingroup", "rimuru-gabung": "gabung", "join": "join", "joingrup": "joingrup", "joingroup": "joingroup", "gabung": "gabung"}, "description": "Bot join ke grup via link invite, support reply pesan yang mengandung link", "usage": ".join <link> / .join (reply pesan berisi link)", "example": ".join https://chat.whatsapp.com/xxx", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/join.js", metadata, m, extra)
handler.help = ["rimuru-owner-join <link> / .join (reply pesan berisi link)"]
handler.command = ["rimuru-owner-join", "rimuru-join", "rimuru-joingrup", "rimuru-joingroup", "rimuru-gabung", "join", "joingrup", "joingroup", "gabung"]
handler.tags = ["owner"]
handler.description = "Bot join ke grup via link invite, support reply pesan yang mengandung link"
handler.importSource = "rimuru"
handler.importConfig = {"name": "join", "alias": ["joingrup", "joingroup", "gabung"], "category": "owner", "description": "Bot join ke grup via link invite, support reply pesan yang mengandung link", "usage": ".join <link> / .join (reply pesan berisi link)", "example": ".join https://chat.whatsapp.com/xxx", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-join": "join", "rimuru-join": "join", "rimuru-joingrup": "joingrup", "rimuru-joingroup": "joingroup", "rimuru-gabung": "gabung", "join": "join", "joingrup": "joingrup", "joingroup": "joingroup", "gabung": "gabung"}
export default handler
