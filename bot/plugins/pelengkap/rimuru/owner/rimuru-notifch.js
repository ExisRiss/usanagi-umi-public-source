/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/notifch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "notifch", "category": "owner", "aliasMap": {"rimuru-owner-notifch": "notifch", "rimuru-notifch": "notifch", "rimuru-mutech": "mutech", "notifch": "notifch", "mutech": "mutech"}, "description": "Mengatur notifikasi channel WhatsApp yang diikuti bot", "usage": ".notifch <nomor>|on/off", "example": ".notifch 1,3|on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/notifch.js", metadata, m, extra)
handler.help = ["rimuru-owner-notifch <nomor>|on/off"]
handler.command = ["rimuru-owner-notifch", "rimuru-notifch", "rimuru-mutech", "notifch", "mutech"]
handler.tags = ["owner"]
handler.description = "Mengatur notifikasi channel WhatsApp yang diikuti bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "notifch", "alias": ["mutech"], "category": "owner", "description": "Mengatur notifikasi channel WhatsApp yang diikuti bot", "usage": ".notifch <nomor>|on/off", "example": ".notifch 1,3|on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-notifch": "notifch", "rimuru-notifch": "notifch", "rimuru-mutech": "mutech", "notifch": "notifch", "mutech": "mutech"}
export default handler
