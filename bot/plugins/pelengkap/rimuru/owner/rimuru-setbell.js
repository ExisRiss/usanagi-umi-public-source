/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setbell.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setbell", "category": "owner", "aliasMap": {"rimuru-owner-setbell": "setbell", "rimuru-setbell": "setbell", "rimuru-set": "set", "setbell": "setbell", "set": "set"}, "description": "Aktif/nonaktifkan AutoAI Bell berbasis Termai/XTerm", "usage": ".set bell on|off", "example": ".set bell on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setbell.js", metadata, m, extra)
handler.help = ["rimuru-owner-setbell bell on|off"]
handler.command = ["rimuru-owner-setbell", "rimuru-setbell", "rimuru-set", "setbell", "set"]
handler.tags = ["owner"]
handler.description = "Aktif/nonaktifkan AutoAI Bell berbasis Termai/XTerm"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setbell", "alias": ["set"], "category": "owner", "description": "Aktif/nonaktifkan AutoAI Bell berbasis Termai/XTerm", "usage": ".set bell on|off", "example": ".set bell on", "isOwner": true, "isGroup": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setbell": "setbell", "rimuru-setbell": "setbell", "rimuru-set": "set", "setbell": "setbell", "set": "set"}
export default handler
