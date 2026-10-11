/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antisticker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antisticker", "category": "group", "aliasMap": {"rimuru-group-antisticker": "antisticker", "rimuru-antisticker": "antisticker", "rimuru-nosticker": "nosticker", "antisticker": "antisticker", "as": "as", "nosticker": "nosticker"}, "description": "Mengatur antisticker di grup", "usage": ".antisticker <on/off>", "example": ".antisticker on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antisticker.js", metadata, m, extra)
handler.help = ["rimuru-group-antisticker <on/off>"]
handler.command = ["rimuru-group-antisticker", "rimuru-antisticker", "rimuru-nosticker", "antisticker", "as", "nosticker"]
handler.tags = ["group"]
handler.description = "Mengatur antisticker di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antisticker", "alias": ["as", "nosticker"], "category": "group", "description": "Mengatur antisticker di grup", "usage": ".antisticker <on/off>", "example": ".antisticker on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antisticker": "antisticker", "rimuru-antisticker": "antisticker", "rimuru-nosticker": "nosticker", "antisticker": "antisticker", "as": "as", "nosticker": "nosticker"}
export default handler
