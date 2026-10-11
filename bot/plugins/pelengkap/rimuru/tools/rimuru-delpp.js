/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/delpp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delpp", "category": "tools", "aliasMap": {"rimuru-tools-delpp": "delpp", "rimuru-delpp": "delpp", "rimuru-delprofilebot": "delprofilebot", "rimuru-delppbot": "delppbot", "rimuru-hapusppbot": "hapusppbot", "delpp": "delpp", "delprofilebot": "delprofilebot", "delppbot": "delppbot", "hapusppbot": "hapusppbot"}, "description": "Menghapus foto profil bot", "usage": ".delpp", "example": ".delpp", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/delpp.js", metadata, m, extra)
handler.help = ["rimuru-tools-delpp"]
handler.command = ["rimuru-tools-delpp", "rimuru-delpp", "rimuru-delprofilebot", "rimuru-delppbot", "rimuru-hapusppbot", "delpp", "delprofilebot", "delppbot", "hapusppbot"]
handler.tags = ["tools"]
handler.description = "Menghapus foto profil bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delpp", "alias": ["delprofilebot", "delppbot", "hapusppbot"], "category": "tools", "description": "Menghapus foto profil bot", "usage": ".delpp", "example": ".delpp", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-delpp": "delpp", "rimuru-delpp": "delpp", "rimuru-delprofilebot": "delprofilebot", "rimuru-delppbot": "delppbot", "rimuru-hapusppbot": "hapusppbot", "delpp": "delpp", "delprofilebot": "delprofilebot", "delppbot": "delppbot", "hapusppbot": "hapusppbot"}
export default handler
