/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/public.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "public", "category": "owner", "aliasMap": {"rimuru-owner-public": "public", "rimuru-public": "public", "rimuru-publicmode": "publicmode", "publicmode": "publicmode"}, "description": "Mengaktifkan mode public (semua user bisa akses)", "usage": ".public", "example": ".public", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/public.js", metadata, m, extra)
handler.help = ["rimuru-owner-public"]
handler.command = ["rimuru-owner-public", "rimuru-public", "rimuru-publicmode", "publicmode"]
handler.tags = ["owner"]
handler.description = "Mengaktifkan mode public (semua user bisa akses)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "public", "alias": ["publicmode", "open"], "category": "owner", "description": "Mengaktifkan mode public (semua user bisa akses)", "usage": ".public", "example": ".public", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-public": "public", "rimuru-public": "public", "rimuru-publicmode": "publicmode", "publicmode": "publicmode"}
export default handler
