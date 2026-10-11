/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/antipm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antipm", "category": "owner", "aliasMap": {"rimuru-owner-antipm": "antipm", "rimuru-antipm": "antipm", "rimuru-apm": "apm", "rimuru-nopm": "nopm", "antipm": "antipm", "apm": "apm", "nopm": "nopm"}, "description": "Anti PM - cuma nomor tertentu yang bisa chat ke bot (BLOKIR ASLI)", "usage": ".antipm <on/off/status>", "example": ".antipm on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/antipm.js", metadata, m, extra)
handler.help = ["rimuru-owner-antipm <on/off/status>"]
handler.command = ["rimuru-owner-antipm", "rimuru-antipm", "rimuru-apm", "rimuru-nopm", "antipm", "apm", "nopm"]
handler.tags = ["owner"]
handler.description = "Anti PM - cuma nomor tertentu yang bisa chat ke bot (BLOKIR ASLI)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antipm", "alias": ["apm", "nopm"], "category": "owner", "description": "Anti PM - cuma nomor tertentu yang bisa chat ke bot (BLOKIR ASLI)", "usage": ".antipm <on/off/status>", "example": ".antipm on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "isAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-antipm": "antipm", "rimuru-antipm": "antipm", "rimuru-apm": "apm", "rimuru-nopm": "nopm", "antipm": "antipm", "apm": "apm", "nopm": "nopm"}
export default handler
