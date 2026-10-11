/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/delstickercmd.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delstickercmd", "category": "group", "aliasMap": {"rimuru-group-delstickercmd": "delstickercmd", "rimuru-delstickercmd": "delstickercmd", "rimuru-delcmdsticker": "delcmdsticker", "rimuru-removesticker": "removesticker", "rimuru-unsticker": "unsticker", "delstickercmd": "delstickercmd", "delcmdsticker": "delcmdsticker", "removesticker": "removesticker", "unsticker": "unsticker"}, "description": "Hapus sticker command", "usage": ".delstickercmd <command> atau reply sticker", "example": ".delstickercmd menu", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/delstickercmd.js", metadata, m, extra)
handler.help = ["rimuru-group-delstickercmd <command> atau reply sticker"]
handler.command = ["rimuru-group-delstickercmd", "rimuru-delstickercmd", "rimuru-delcmdsticker", "rimuru-removesticker", "rimuru-unsticker", "delstickercmd", "delcmdsticker", "removesticker", "unsticker"]
handler.tags = ["group"]
handler.description = "Hapus sticker command"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delstickercmd", "alias": ["delcmdsticker", "removesticker", "unsticker"], "category": "group", "description": "Hapus sticker command", "usage": ".delstickercmd <command> atau reply sticker", "example": ".delstickercmd menu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "isAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-delstickercmd": "delstickercmd", "rimuru-delstickercmd": "delstickercmd", "rimuru-delcmdsticker": "delcmdsticker", "rimuru-removesticker": "removesticker", "rimuru-unsticker": "unsticker", "delstickercmd": "delstickercmd", "delcmdsticker": "delcmdsticker", "removesticker": "removesticker", "unsticker": "unsticker"}
export default handler
