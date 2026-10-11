/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/setpp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setpp", "category": "tools", "aliasMap": {"rimuru-tools-setpp": "setpp", "rimuru-setpp": "setpp", "rimuru-setprofilebot": "setprofilebot", "rimuru-setppbot": "setppbot", "rimuru-setfotobot": "setfotobot", "setpp": "setpp", "setprofilebot": "setprofilebot", "setfotobot": "setfotobot"}, "description": "Mengubah foto profil bot", "usage": ".setpp (reply gambar)", "example": ".setpp", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/setpp.js", metadata, m, extra)
handler.help = ["rimuru-tools-setpp (reply gambar)"]
handler.command = ["rimuru-tools-setpp", "rimuru-setpp", "rimuru-setprofilebot", "rimuru-setppbot", "rimuru-setfotobot", "setpp", "setprofilebot", "setfotobot"]
handler.tags = ["tools"]
handler.description = "Mengubah foto profil bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setpp", "alias": ["setprofilebot", "setppbot", "setfotobot"], "category": "tools", "description": "Mengubah foto profil bot", "usage": ".setpp (reply gambar)", "example": ".setpp", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-setpp": "setpp", "rimuru-setpp": "setpp", "rimuru-setprofilebot": "setprofilebot", "rimuru-setppbot": "setppbot", "rimuru-setfotobot": "setfotobot", "setpp": "setpp", "setprofilebot": "setprofilebot", "setfotobot": "setfotobot"}
export default handler
