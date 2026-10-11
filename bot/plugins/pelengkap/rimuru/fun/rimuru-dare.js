/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/dare.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dare", "category": "fun", "aliasMap": {"rimuru-fun-dare": "dare", "rimuru-dare": "dare", "rimuru-dareq": "dareq", "rimuru-tantang": "tantang", "dareq": "dareq"}, "description": "Random tantangan dare", "usage": ".dare", "example": ".dare", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/dare.js", metadata, m, extra)
handler.help = ["rimuru-fun-dare"]
handler.command = ["rimuru-fun-dare", "rimuru-dare", "rimuru-dareq", "rimuru-tantang", "dareq"]
handler.tags = ["fun"]
handler.description = "Random tantangan dare"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dare", "alias": ["dareq", "tantang"], "category": "fun", "description": "Random tantangan dare", "usage": ".dare", "example": ".dare", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-dare": "dare", "rimuru-dare": "dare", "rimuru-dareq": "dareq", "rimuru-tantang": "tantang", "dareq": "dareq"}
export default handler
