/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/bucin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bucin", "category": "fun", "aliasMap": {"rimuru-fun-bucin": "bucin", "rimuru-gombal": "gombal", "rimuru-love": "love", "rimuru-romantis": "romantis"}, "description": "Random kata-kata bucin/romantis", "usage": ".bucin", "example": ".bucin", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/bucin.js", metadata, m, extra)
handler.help = ["rimuru-fun-bucin"]
handler.command = ["rimuru-fun-bucin", "rimuru-gombal", "rimuru-love", "rimuru-romantis"]
handler.tags = ["fun"]
handler.description = "Random kata-kata bucin/romantis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bucin", "alias": ["gombal", "love", "romantis"], "category": "fun", "description": "Random kata-kata bucin/romantis", "usage": ".bucin", "example": ".bucin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-bucin": "bucin", "rimuru-gombal": "gombal", "rimuru-love": "love", "rimuru-romantis": "romantis"}
export default handler
