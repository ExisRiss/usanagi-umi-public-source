/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/custompayment.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "custompayment", "category": "owner", "aliasMap": {"rimuru-owner-custompayment": "custompayment", "rimuru-custompayment": "custompayment", "rimuru-setpayment": "setpayment", "rimuru-setpaytext": "setpaytext", "custompayment": "custompayment", "setpayment": "setpayment", "setpaytext": "setpaytext"}, "description": "Atur teks custom untuk .payment dengan placeholder", "usage": ".custompayment <teks> / .custompayment reset", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/custompayment.js", metadata, m, extra)
handler.help = ["rimuru-owner-custompayment <teks> / .custompayment reset"]
handler.command = ["rimuru-owner-custompayment", "rimuru-custompayment", "rimuru-setpayment", "rimuru-setpaytext", "custompayment", "setpayment", "setpaytext"]
handler.tags = ["owner"]
handler.description = "Atur teks custom untuk .payment dengan placeholder"
handler.importSource = "rimuru"
handler.importConfig = {"name": "custompayment", "alias": ["setpayment", "setpaytext"], "category": "owner", "description": "Atur teks custom untuk .payment dengan placeholder", "usage": ".custompayment <teks> / .custompayment reset", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-custompayment": "custompayment", "rimuru-custompayment": "custompayment", "rimuru-setpayment": "setpayment", "rimuru-setpaytext": "setpaytext", "custompayment": "custompayment", "setpayment": "setpayment", "setpaytext": "setpaytext"}
export default handler
