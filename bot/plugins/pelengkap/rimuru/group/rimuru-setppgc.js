/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/setppgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setppgc", "category": "group", "aliasMap": {"rimuru-group-setppgc": "setppgc", "rimuru-setppgc": "setppgc", "rimuru-setprofilegc": "setprofilegc", "rimuru-setppgroup": "setppgroup", "rimuru-setppgrup": "setppgrup", "setppgc": "setppgc", "setprofilegc": "setprofilegc", "setppgroup": "setppgroup", "setppgrup": "setppgrup"}, "description": "Mengubah foto profil grup", "usage": ".setppgc (reply gambar)", "example": ".setppgc", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/setppgc.js", metadata, m, extra)
handler.help = ["rimuru-group-setppgc (reply gambar)"]
handler.command = ["rimuru-group-setppgc", "rimuru-setppgc", "rimuru-setprofilegc", "rimuru-setppgroup", "rimuru-setppgrup", "setppgc", "setprofilegc", "setppgroup", "setppgrup"]
handler.tags = ["group"]
handler.description = "Mengubah foto profil grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setppgc", "alias": ["setprofilegc", "setppgroup", "setppgrup"], "category": "group", "description": "Mengubah foto profil grup", "usage": ".setppgc (reply gambar)", "example": ".setppgc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-setppgc": "setppgc", "rimuru-setppgc": "setppgc", "rimuru-setprofilegc": "setprofilegc", "rimuru-setppgroup": "setppgroup", "rimuru-setppgrup": "setppgrup", "setppgc": "setppgc", "setprofilegc": "setprofilegc", "setppgroup": "setppgroup", "setppgrup": "setppgrup"}
export default handler
