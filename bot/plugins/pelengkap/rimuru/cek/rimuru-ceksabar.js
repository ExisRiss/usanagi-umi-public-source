/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceksabar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceksabar", "category": "cek", "aliasMap": {"rimuru-cek-ceksabar": "ceksabar", "rimuru-ceksabar": "ceksabar", "rimuru-sabar": "sabar", "rimuru-patience": "patience", "patience": "patience"}, "description": "Cek tingkat kesabaran kamu", "usage": ".ceksabar <nama>", "example": ".ceksabar Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceksabar.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceksabar <nama>"]
handler.command = ["rimuru-cek-ceksabar", "rimuru-ceksabar", "rimuru-sabar", "rimuru-patience", "patience"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kesabaran kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceksabar", "alias": ["sabar", "patience"], "category": "cek", "description": "Cek tingkat kesabaran kamu", "usage": ".ceksabar <nama>", "example": ".ceksabar Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceksabar": "ceksabar", "rimuru-ceksabar": "ceksabar", "rimuru-sabar": "sabar", "rimuru-patience": "patience", "patience": "patience"}
export default handler
