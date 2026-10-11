/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/delppgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delppgc", "category": "group", "aliasMap": {"rimuru-group-delppgc": "delppgc", "rimuru-delppgc": "delppgc", "rimuru-delprofilegc": "delprofilegc", "rimuru-delppgroup": "delppgroup", "rimuru-hapusppgc": "hapusppgc", "delppgc": "delppgc", "delprofilegc": "delprofilegc", "delppgroup": "delppgroup", "hapusppgc": "hapusppgc"}, "description": "Menghapus foto profil grup", "usage": ".delppgc", "example": ".delppgc", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/delppgc.js", metadata, m, extra)
handler.help = ["rimuru-group-delppgc"]
handler.command = ["rimuru-group-delppgc", "rimuru-delppgc", "rimuru-delprofilegc", "rimuru-delppgroup", "rimuru-hapusppgc", "delppgc", "delprofilegc", "delppgroup", "hapusppgc"]
handler.tags = ["group"]
handler.description = "Menghapus foto profil grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delppgc", "alias": ["delprofilegc", "delppgroup", "hapusppgc"], "category": "group", "description": "Menghapus foto profil grup", "usage": ".delppgc", "example": ".delppgc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-delppgc": "delppgc", "rimuru-delppgc": "delppgc", "rimuru-delprofilegc": "delprofilegc", "rimuru-delppgroup": "delppgroup", "rimuru-hapusppgc": "hapusppgc", "delppgc": "delppgc", "delprofilegc": "delprofilegc", "delppgroup": "delppgroup", "hapusppgc": "hapusppgc"}
export default handler
