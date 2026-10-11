/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/utility/inspect.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "inspect", "category": "utility", "aliasMap": {"rimuru-utility-inspect": "inspect", "rimuru-cekgrup": "cekgrup", "rimuru-ceksaluran": "ceksaluran", "cekgrup": "cekgrup", "ceksaluran": "ceksaluran"}, "description": "Inspect info grup atau saluran WhatsApp via link", "usage": ".inspect <link grup/saluran>", "example": ".inspect https://chat.whatsapp.com/xxx", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/utility/inspect.js", metadata, m, extra)
handler.help = ["rimuru-utility-inspect <link grup/saluran>"]
handler.command = ["rimuru-utility-inspect", "rimuru-cekgrup", "rimuru-ceksaluran", "cekgrup", "ceksaluran"]
handler.tags = ["utility"]
handler.description = "Inspect info grup atau saluran WhatsApp via link"
handler.importSource = "rimuru"
handler.importConfig = {"name": "inspect", "alias": ["cekgrup", "ceksaluran", "groupinfo", "channelinfo"], "category": "utility", "description": "Inspect info grup atau saluran WhatsApp via link", "usage": ".inspect <link grup/saluran>", "example": ".inspect https://chat.whatsapp.com/xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-utility-inspect": "inspect", "rimuru-cekgrup": "cekgrup", "rimuru-ceksaluran": "ceksaluran", "cekgrup": "cekgrup", "ceksaluran": "ceksaluran"}
export default handler
