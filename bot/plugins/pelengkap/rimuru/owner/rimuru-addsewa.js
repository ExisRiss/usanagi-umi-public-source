/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addsewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addsewa", "category": "owner", "aliasMap": {"rimuru-owner-addsewa": "addsewa", "rimuru-addsewa": "addsewa", "rimuru-sewaadd": "sewaadd", "rimuru-tambahsewa": "tambahsewa", "addsewa": "addsewa", "sewaadd": "sewaadd", "tambahsewa": "tambahsewa"}, "description": "Tambah grup ke whitelist sewa + auto join", "usage": ".addsewa <link/id grup> <durasi>", "example": ".addsewa https://chat.whatsapp.com/xxx 30d", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addsewa.js", metadata, m, extra)
handler.help = ["rimuru-owner-addsewa <link/id grup> <durasi>"]
handler.command = ["rimuru-owner-addsewa", "rimuru-addsewa", "rimuru-sewaadd", "rimuru-tambahsewa", "addsewa", "sewaadd", "tambahsewa"]
handler.tags = ["owner"]
handler.description = "Tambah grup ke whitelist sewa + auto join"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addsewa", "alias": ["sewaadd", "tambahsewa"], "category": "owner", "description": "Tambah grup ke whitelist sewa + auto join", "usage": ".addsewa <link/id grup> <durasi>", "example": ".addsewa https://chat.whatsapp.com/xxx 30d", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addsewa": "addsewa", "rimuru-addsewa": "addsewa", "rimuru-sewaadd": "sewaadd", "rimuru-tambahsewa": "tambahsewa", "addsewa": "addsewa", "sewaadd": "sewaadd", "tambahsewa": "tambahsewa"}
export default handler
