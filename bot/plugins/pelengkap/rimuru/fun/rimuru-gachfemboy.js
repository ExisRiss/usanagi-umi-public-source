/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/gachfemboy.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gachafemboy", "category": "fun", "aliasMap": {"rimuru-fun-gachafemboy": "gachafemboy", "rimuru-gachafemboy": "gachafemboy", "gachafemboy": "gachafemboy"}, "description": "Gacha femboy anime random", "usage": ".gachafemboy", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/gachfemboy.js", metadata, m, extra)
handler.help = ["rimuru-fun-gachafemboy"]
handler.command = ["rimuru-fun-gachafemboy", "rimuru-gachafemboy", "gachafemboy"]
handler.tags = ["fun"]
handler.description = "Gacha femboy anime random"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gachafemboy", "category": "fun", "description": "Gacha femboy anime random", "usage": ".gachafemboy", "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-gachafemboy": "gachafemboy", "rimuru-gachafemboy": "gachafemboy", "gachafemboy": "gachafemboy"}
export default handler
