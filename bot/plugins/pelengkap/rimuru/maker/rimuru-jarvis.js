/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/jarvis.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jarvis", "category": "maker", "aliasMap": {"rimuru-maker-jarvis": "jarvis", "rimuru-jarvis": "jarvis", "rimuru-jarvismeme": "jarvismeme", "jarvis": "jarvis", "jarvismeme": "jarvismeme"}, "description": "Membuat meme Jarvis dengan teks custom", "usage": ".jarvis <teks>", "example": ".jarvis Jarvis, tolong atur dulu itu biar ga apa kali", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/jarvis.js", metadata, m, extra)
handler.help = ["rimuru-maker-jarvis <teks>"]
handler.command = ["rimuru-maker-jarvis", "rimuru-jarvis", "rimuru-jarvismeme", "jarvis", "jarvismeme"]
handler.tags = ["maker"]
handler.description = "Membuat meme Jarvis dengan teks custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jarvis", "alias": ["jarvismeme", "mj"], "category": "maker", "description": "Membuat meme Jarvis dengan teks custom", "usage": ".jarvis <teks>", "example": ".jarvis Jarvis, tolong atur dulu itu biar ga apa kali", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-jarvis": "jarvis", "rimuru-jarvis": "jarvis", "rimuru-jarvismeme": "jarvismeme", "jarvis": "jarvis", "jarvismeme": "jarvismeme"}
export default handler
