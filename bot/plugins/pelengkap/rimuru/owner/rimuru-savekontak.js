/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/savekontak.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "savekontak", "category": "owner", "aliasMap": {"rimuru-owner-savekontak": "savekontak", "rimuru-savekontak": "savekontak", "rimuru-sv": "sv", "rimuru-svkontak": "svkontak", "savekontak": "savekontak", "sv": "sv", "svkontak": "svkontak"}, "description": "Menyimpan kontak dari grup menjadi file VCF", "usage": ".savekontak <nama>", "example": ".savekontak Fulan", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/savekontak.js", metadata, m, extra)
handler.help = ["rimuru-owner-savekontak <nama>"]
handler.command = ["rimuru-owner-savekontak", "rimuru-savekontak", "rimuru-sv", "rimuru-svkontak", "savekontak", "sv", "svkontak"]
handler.tags = ["owner"]
handler.description = "Menyimpan kontak dari grup menjadi file VCF"
handler.importSource = "rimuru"
handler.importConfig = {"name": "savekontak", "alias": ["sv", "svkontak"], "category": "owner", "description": "Menyimpan kontak dari grup menjadi file VCF", "usage": ".savekontak <nama>", "example": ".savekontak Fulan", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-savekontak": "savekontak", "rimuru-savekontak": "savekontak", "rimuru-sv": "sv", "rimuru-svkontak": "svkontak", "savekontak": "savekontak", "sv": "sv", "svkontak": "svkontak"}
export default handler
