/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekkepribadian.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkepribadian", "category": "cek", "aliasMap": {"rimuru-cek-cekkepribadian": "cekkepribadian", "rimuru-cekkepribadian": "cekkepribadian", "rimuru-kepribadian": "kepribadian", "rimuru-personality": "personality", "personality": "personality"}, "description": "Cek kepribadian kamu", "usage": ".cekkepribadian <nama>", "example": ".cekkepribadian Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekkepribadian.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekkepribadian <nama>"]
handler.command = ["rimuru-cek-cekkepribadian", "rimuru-cekkepribadian", "rimuru-kepribadian", "rimuru-personality", "personality"]
handler.tags = ["cek"]
handler.description = "Cek kepribadian kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkepribadian", "alias": ["kepribadian", "personality"], "category": "cek", "description": "Cek kepribadian kamu", "usage": ".cekkepribadian <nama>", "example": ".cekkepribadian Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekkepribadian": "cekkepribadian", "rimuru-cekkepribadian": "cekkepribadian", "rimuru-kepribadian": "kepribadian", "rimuru-personality": "personality", "personality": "personality"}
export default handler
