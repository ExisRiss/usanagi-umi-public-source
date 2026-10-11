/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/bcgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bcgc", "category": "owner", "aliasMap": {"rimuru-owner-bcgc": "bcgc", "rimuru-bcgc": "bcgc", "rimuru-broadcastgc": "broadcastgc", "rimuru-bcgroup": "bcgroup", "rimuru-jedabcgc": "jedabcgc", "rimuru-delaybcgc": "delaybcgc", "rimuru-setjedabcgc": "setjedabcgc", "rimuru-stopbcgc": "stopbcgc", "rimuru-stopbroadcastgc": "stopbroadcastgc", "bcgc": "bcgc", "broadcastgc": "broadcastgc", "bcgroup": "bcgroup", "jedabcgc": "jedabcgc", "delaybcgc": "delaybcgc", "setjedabcgc": "setjedabcgc", "stopbcgc": "stopbcgc", "stopbroadcastgc": "stopbroadcastgc"}, "description": "Broadcast pesan ke semua grup dengan dukungan semua jenis media", "usage": ".bcgc", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/bcgc.js", metadata, m, extra)
handler.help = ["rimuru-owner-bcgc"]
handler.command = ["rimuru-owner-bcgc", "rimuru-bcgc", "rimuru-broadcastgc", "rimuru-bcgroup", "rimuru-jedabcgc", "rimuru-delaybcgc", "rimuru-setjedabcgc", "rimuru-stopbcgc", "rimuru-stopbroadcastgc", "bcgc", "broadcastgc", "bcgroup", "jedabcgc", "delaybcgc", "setjedabcgc", "stopbcgc", "stopbroadcastgc"]
handler.tags = ["owner"]
handler.description = "Broadcast pesan ke semua grup dengan dukungan semua jenis media"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bcgc", "alias": ["broadcastgc", "bcgroup", "jedabcgc", "delaybcgc", "setjedabcgc", "stopbcgc", "stopbroadcastgc"], "category": "owner", "description": "Broadcast pesan ke semua grup dengan dukungan semua jenis media", "usage": ".bcgc", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-bcgc": "bcgc", "rimuru-bcgc": "bcgc", "rimuru-broadcastgc": "broadcastgc", "rimuru-bcgroup": "bcgroup", "rimuru-jedabcgc": "jedabcgc", "rimuru-delaybcgc": "delaybcgc", "rimuru-setjedabcgc": "setjedabcgc", "rimuru-stopbcgc": "stopbcgc", "rimuru-stopbroadcastgc": "stopbroadcastgc", "bcgc": "bcgc", "broadcastgc": "broadcastgc", "bcgroup": "bcgroup", "jedabcgc": "jedabcgc", "delaybcgc": "delaybcgc", "setjedabcgc": "setjedabcgc", "stopbcgc": "stopbcgc", "stopbroadcastgc": "stopbroadcastgc"}
export default handler
