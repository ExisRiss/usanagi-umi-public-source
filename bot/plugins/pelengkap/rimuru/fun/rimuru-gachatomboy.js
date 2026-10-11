/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/gachatomboy.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gachatomboy", "category": "fun", "aliasMap": {"rimuru-fun-gachatomboy": "gachatomboy", "rimuru-gachatomboy": "gachatomboy", "gachatomboy": "gachatomboy"}, "description": "Gacha char anime tomboy random 100+ karakter", "usage": ".gachatomboy"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/gachatomboy.js", metadata, m, extra)
handler.help = ["rimuru-fun-gachatomboy"]
handler.command = ["rimuru-fun-gachatomboy", "rimuru-gachatomboy", "gachatomboy"]
handler.tags = ["fun"]
handler.description = "Gacha char anime tomboy random 100+ karakter"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gachatomboy", "category": "fun", "description": "Gacha char anime tomboy random 100+ karakter", "usage": ".gachatomboy", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-gachatomboy": "gachatomboy", "rimuru-gachatomboy": "gachatomboy", "gachatomboy": "gachatomboy"}
export default handler
