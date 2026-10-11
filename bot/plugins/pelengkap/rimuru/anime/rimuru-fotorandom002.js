/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/fotorandom002.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fotorandom002", "category": "anime", "aliasMap": {"rimuru-anime-fotorandom002": "fotorandom002", "rimuru-fotorandom002": "fotorandom002", "rimuru-fotorimuru": "fotorimuru", "rimuru-randomfotozero": "randomfotozero", "fotorandom002": "fotorandom002", "fotorimuru": "fotorimuru", "randomfotozero": "randomfotozero"}, "description": "Rimuru random image 💗", "usage": ".foto-randomrimuru", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/fotorandom002.js", metadata, m, extra)
handler.help = ["rimuru-anime-fotorandom002"]
handler.command = ["rimuru-anime-fotorandom002", "rimuru-fotorandom002", "rimuru-fotorimuru", "rimuru-randomfotozero", "fotorandom002", "fotorimuru", "randomfotozero"]
handler.tags = ["anime"]
handler.description = "Rimuru random image 💗"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fotorandom002", "alias": ["fotorimuru", "randomfotozero"], "category": "anime", "description": "Rimuru random image 💗", "usage": ".foto-randomrimuru", "isEnabled": true, "cooldown": 5}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-anime-fotorandom002": "fotorandom002", "rimuru-fotorandom002": "fotorandom002", "rimuru-fotorimuru": "fotorimuru", "rimuru-randomfotozero": "randomfotozero", "fotorandom002": "fotorandom002", "fotorimuru": "fotorimuru", "randomfotozero": "randomfotozero"}
export default handler
