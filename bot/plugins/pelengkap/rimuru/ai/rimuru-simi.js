/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/simi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "simi", "category": "ai", "aliasMap": {"rimuru-ai-simi": "simi", "rimuru-simi": "simi", "rimuru-simisimi": "simisimi", "simi": "simi", "simisimi": "simisimi"}, "description": "Ngobrol santai bareng SimiSimi", "usage": ".simi <pesan>", "example": ".simi Halo Simi!", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/simi.js", metadata, m, extra)
handler.help = ["rimuru-ai-simi <pesan>"]
handler.command = ["rimuru-ai-simi", "rimuru-simi", "rimuru-simisimi", "simi", "simisimi"]
handler.tags = ["ai"]
handler.description = "Ngobrol santai bareng SimiSimi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "simi", "alias": ["simisimi"], "category": "ai", "description": "Ngobrol santai bareng SimiSimi", "usage": ".simi <pesan>", "example": ".simi Halo Simi!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-simi": "simi", "rimuru-simi": "simi", "rimuru-simisimi": "simisimi", "simi": "simi", "simisimi": "simisimi"}
export default handler
