/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/add.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "add", "category": "group", "aliasMap": {"rimuru-group-add": "add", "rimuru-add": "add", "rimuru-addmember": "addmember", "rimuru-invite": "invite", "addmember": "addmember", "invite": "invite"}, "description": "Menambahkan member ke grup (support multiple)", "usage": ".add <nomor1> [nomor2] [nomor3]... [link_grup]", "example": ".add 6281234567890 6281234567890", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/add.js", metadata, m, extra)
handler.help = ["rimuru-group-add <nomor1> [nomor2] [nomor3]... [link_grup]"]
handler.command = ["rimuru-group-add", "rimuru-add", "rimuru-addmember", "rimuru-invite", "addmember", "invite"]
handler.tags = ["group"]
handler.description = "Menambahkan member ke grup (support multiple)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "add", "alias": ["addmember", "invite"], "category": "group", "description": "Menambahkan member ke grup (support multiple)", "usage": ".add <nomor1> [nomor2] [nomor3]... [link_grup]", "example": ".add 6281234567890 6281234567890", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-add": "add", "rimuru-add": "add", "rimuru-addmember": "addmember", "rimuru-invite": "invite", "addmember": "addmember", "invite": "invite"}
export default handler
