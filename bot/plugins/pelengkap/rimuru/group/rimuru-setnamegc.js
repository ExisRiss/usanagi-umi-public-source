/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setnamegc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setnamegc", "category": "group", "aliasMap": {"rimuru-group-setnamegc": "setnamegc", "rimuru-setnamegc": "setnamegc", "rimuru-setnamegrup": "setnamegrup", "rimuru-setgcname": "setgcname", "rimuru-setnamegroup": "setnamegroup", "rimuru-setnamagrup": "setnamagrup", "setnamegc": "setnamegc", "setnamegrup": "setnamegrup", "setgcname": "setgcname", "setnamegroup": "setnamegroup", "setnamagrup": "setnamagrup"}, "description": "Mengubah nama grup", "usage": ".setnamegc <nama baru>", "example": ".setnamegc Grup Keren", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setnamegc.js", metadata, m, extra)
handler.help = ["rimuru-group-setnamegc <nama baru>"]
handler.command = ["rimuru-group-setnamegc", "rimuru-setnamegc", "rimuru-setnamegrup", "rimuru-setgcname", "rimuru-setnamegroup", "rimuru-setnamagrup", "setnamegc", "setnamegrup", "setgcname", "setnamegroup", "setnamagrup"]
handler.tags = ["group"]
handler.description = "Mengubah nama grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setnamegc", "alias": ["setnamegrup", "setgcname", "setnamegroup", "setnamagrup"], "category": "group", "description": "Mengubah nama grup", "usage": ".setnamegc <nama baru>", "example": ".setnamegc Grup Keren", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-setnamegc": "setnamegc", "rimuru-setnamegc": "setnamegc", "rimuru-setnamegrup": "setnamegrup", "rimuru-setgcname": "setgcname", "rimuru-setnamegroup": "setnamegroup", "rimuru-setnamagrup": "setnamagrup", "setnamegc": "setnamegc", "setnamegrup": "setnamegrup", "setgcname": "setgcname", "setnamegroup": "setnamegroup", "setnamagrup": "setnamagrup"}
export default handler
