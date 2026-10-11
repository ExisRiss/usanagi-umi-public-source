/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addenergi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addenergi", "category": "owner", "aliasMap": {"rimuru-owner-addenergi": "addenergi", "rimuru-addenergi": "addenergi", "rimuru-tambahenergi": "tambahenergi", "rimuru-giveenergi": "giveenergi", "rimuru-addenergy": "addenergy", "addenergi": "addenergi", "tambahenergi": "tambahenergi", "giveenergi": "giveenergi", "addenergy": "addenergy"}, "description": "Tambah energi user", "usage": ".addenergi <jumlah> @user", "example": ".addenergi 100 @user", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addenergi.js", metadata, m, extra)
handler.help = ["rimuru-owner-addenergi <jumlah> @user"]
handler.command = ["rimuru-owner-addenergi", "rimuru-addenergi", "rimuru-tambahenergi", "rimuru-giveenergi", "rimuru-addenergy", "addenergi", "tambahenergi", "giveenergi", "addenergy"]
handler.tags = ["owner"]
handler.description = "Tambah energi user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addenergi", "alias": ["tambahenergi", "giveenergi", "addenergy"], "category": "owner", "description": "Tambah energi user", "usage": ".addenergi <jumlah> @user", "example": ".addenergi 100 @user", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addenergi": "addenergi", "rimuru-addenergi": "addenergi", "rimuru-tambahenergi": "tambahenergi", "rimuru-giveenergi": "giveenergi", "rimuru-addenergy": "addenergy", "addenergi": "addenergi", "tambahenergi": "tambahenergi", "giveenergi": "giveenergi", "addenergy": "addenergy"}
export default handler
