/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/similarity.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "similarity", "category": "owner", "aliasMap": {"rimuru-owner-similarity": "similarity", "rimuru-similarity": "similarity", "rimuru-setsimilarity": "setsimilarity", "rimuru-sim": "sim", "similarity": "similarity", "setsimilarity": "setsimilarity", "sim": "sim"}, "description": "Mengaktifkan/menonaktifkan fitur similarity (saran typo)", "usage": ".similarity <on/off>", "example": ".similarity on", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/similarity.js", metadata, m, extra)
handler.help = ["rimuru-owner-similarity <on/off>"]
handler.command = ["rimuru-owner-similarity", "rimuru-similarity", "rimuru-setsimilarity", "rimuru-sim", "similarity", "setsimilarity", "sim"]
handler.tags = ["owner"]
handler.description = "Mengaktifkan/menonaktifkan fitur similarity (saran typo)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "similarity", "alias": ["setsimilarity", "sim"], "category": "owner", "description": "Mengaktifkan/menonaktifkan fitur similarity (saran typo)", "usage": ".similarity <on/off>", "example": ".similarity on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-similarity": "similarity", "rimuru-similarity": "similarity", "rimuru-setsimilarity": "setsimilarity", "rimuru-sim": "sim", "similarity": "similarity", "setsimilarity": "setsimilarity", "sim": "sim"}
export default handler
