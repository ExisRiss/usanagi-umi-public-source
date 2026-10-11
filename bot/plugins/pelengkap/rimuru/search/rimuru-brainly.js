/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/brainly.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "brainly", "category": "search", "aliasMap": {"rimuru-search-brainly": "brainly", "rimuru-brainly": "brainly", "rimuru-brain": "brain", "rimuru-jawab": "jawab", "brainly": "brainly", "brain": "brain", "jawab": "jawab"}, "description": "Cari jawaban di Brainly", "usage": ".brainly <pertanyaan>", "example": ".brainly 1+1", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/brainly.js", metadata, m, extra)
handler.help = ["rimuru-search-brainly <pertanyaan>"]
handler.command = ["rimuru-search-brainly", "rimuru-brainly", "rimuru-brain", "rimuru-jawab", "brainly", "brain", "jawab"]
handler.tags = ["search"]
handler.description = "Cari jawaban di Brainly"
handler.importSource = "rimuru"
handler.importConfig = {"name": "brainly", "alias": ["brain", "jawab"], "category": "search", "description": "Cari jawaban di Brainly", "usage": ".brainly <pertanyaan>", "example": ".brainly 1+1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-brainly": "brainly", "rimuru-brainly": "brainly", "rimuru-brain": "brain", "rimuru-jawab": "jawab", "brainly": "brainly", "brain": "brain", "jawab": "jawab"}
export default handler
