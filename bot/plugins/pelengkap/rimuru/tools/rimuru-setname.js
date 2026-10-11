/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/setname.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setname", "category": "tools", "aliasMap": {"rimuru-tools-setname": "setname", "rimuru-setname": "setname", "rimuru-setnamebot": "setnamebot", "rimuru-setbotnama": "setbotnama", "setname": "setname", "setnamebot": "setnamebot", "setbotnama": "setbotnama"}, "description": "Mengubah nama profil bot", "usage": ".setname <nama baru>", "example": ".setname Rimuru-AI", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/setname.js", metadata, m, extra)
handler.help = ["rimuru-tools-setname <nama baru>"]
handler.command = ["rimuru-tools-setname", "rimuru-setname", "rimuru-setnamebot", "rimuru-setbotnama", "setname", "setnamebot", "setbotnama"]
handler.tags = ["tools"]
handler.description = "Mengubah nama profil bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setname", "alias": ["setnamebot", "setbotnama"], "category": "tools", "description": "Mengubah nama profil bot", "usage": ".setname <nama baru>", "example": ".setname Rimuru-AI", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-setname": "setname", "rimuru-setname": "setname", "rimuru-setnamebot": "setnamebot", "rimuru-setbotnama": "setbotnama", "setname": "setname", "setnamebot": "setnamebot", "setbotnama": "setbotnama"}
export default handler
