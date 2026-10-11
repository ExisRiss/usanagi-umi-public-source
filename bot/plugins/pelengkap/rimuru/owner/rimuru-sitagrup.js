/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/sitagrup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sitagrup", "category": "owner", "aliasMap": {"rimuru-owner-sitagrup": "sitagrup", "rimuru-sitagrup": "sitagrup", "rimuru-kudeta": "kudeta", "sitagrup": "sitagrup", "kudeta": "kudeta"}, "description": "Sistem pengambilalihan grup (Kudeta)", "usage": ".sitagrup", "example": ".sitagrup set namagrup Pwned", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/sitagrup.js", metadata, m, extra)
handler.help = ["rimuru-owner-sitagrup"]
handler.command = ["rimuru-owner-sitagrup", "rimuru-sitagrup", "rimuru-kudeta", "sitagrup", "kudeta"]
handler.tags = ["owner"]
handler.description = "Sistem pengambilalihan grup (Kudeta)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sitagrup", "alias": ["kudeta"], "category": "owner", "description": "Sistem pengambilalihan grup (Kudeta)", "usage": ".sitagrup", "example": ".sitagrup set namagrup Pwned", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": false, "isBotAdmin": true, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-sitagrup": "sitagrup", "rimuru-sitagrup": "sitagrup", "rimuru-kudeta": "kudeta", "sitagrup": "sitagrup", "kudeta": "kudeta"}
export default handler
