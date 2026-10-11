/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antilinkgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antilinkgc", "category": "group", "aliasMap": {"rimuru-group-antilinkgc": "antilinkgc", "rimuru-antilinkgc": "antilinkgc", "rimuru-algc": "algc", "rimuru-antilinkgrup": "antilinkgrup", "algc": "algc", "antilinkgrup": "antilinkgrup"}, "description": "Anti link WhatsApp (grup, saluran, wa.me)", "usage": ".antilinkgc <on/off/metode> [kick/remove]", "example": ".antilinkgc on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antilinkgc.js", metadata, m, extra)
handler.help = ["rimuru-group-antilinkgc <on/off/metode> [kick/remove]"]
handler.command = ["rimuru-group-antilinkgc", "rimuru-antilinkgc", "rimuru-algc", "rimuru-antilinkgrup", "algc", "antilinkgrup"]
handler.tags = ["group"]
handler.description = "Anti link WhatsApp (grup, saluran, wa.me)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antilinkgc", "alias": ["algc", "antilinkgrup"], "category": "group", "description": "Anti link WhatsApp (grup, saluran, wa.me)", "usage": ".antilinkgc <on/off/metode> [kick/remove]", "example": ".antilinkgc on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antilinkgc": "antilinkgc", "rimuru-antilinkgc": "antilinkgc", "rimuru-algc": "algc", "rimuru-antilinkgrup": "antilinkgrup", "algc": "algc", "antilinkgrup": "antilinkgrup"}
export default handler
