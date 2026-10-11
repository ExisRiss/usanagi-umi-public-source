/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/simi2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "simi2", "category": "fun", "aliasMap": {"rimuru-fun-simi2": "simi2", "rimuru-simi2": "simi2", "rimuru-simisimi2": "simisimi2", "simi2": "simi2", "simisimi2": "simisimi2"}, "description": "Simi chat variant dari Tensura.", "usage": ".simi2 <teks>", "example": ".simi2 <teks>", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/simi2.js", metadata, m, extra)
handler.help = ["rimuru-fun-simi2 <teks>"]
handler.command = ["rimuru-fun-simi2", "rimuru-simi2", "rimuru-simisimi2", "simi2", "simisimi2"]
handler.tags = ["fun"]
handler.description = "Simi chat variant dari Tensura."
handler.importSource = "rimuru"
handler.importConfig = {"name": "simi2", "alias": ["simisimi2"], "category": "fun", "description": "Simi chat variant dari Tensura.", "usage": ".simi2 <teks>", "example": ".simi2 <teks>", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-simi2": "simi2", "rimuru-simi2": "simi2", "rimuru-simisimi2": "simisimi2", "simi2": "simi2", "simisimi2": "simisimi2"}
export default handler
