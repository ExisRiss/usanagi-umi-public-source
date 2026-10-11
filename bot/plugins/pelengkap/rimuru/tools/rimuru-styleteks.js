/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/styleteks.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "styleteks", "category": "tools", "aliasMap": {"rimuru-tools-styleteks": "styleteks", "rimuru-styleteks": "styleteks", "rimuru-fancytext": "fancytext", "rimuru-gaya": "gaya", "rimuru-tulisan": "tulisan", "rimuru-fontstyle": "fontstyle", "styleteks": "styleteks", "fancytext": "fancytext", "gaya": "gaya", "tulisan": "tulisan", "fontstyle": "fontstyle"}, "description": "Mengubah teks biasa menjadi berbagai gaya tulisan keren (fancy text).", "usage": ".styleteks <teks>", "example": ".styleteks Halo Dunia", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/styleteks.js", metadata, m, extra)
handler.help = ["rimuru-tools-styleteks <teks>"]
handler.command = ["rimuru-tools-styleteks", "rimuru-styleteks", "rimuru-fancytext", "rimuru-gaya", "rimuru-tulisan", "rimuru-fontstyle", "styleteks", "fancytext", "gaya", "tulisan", "fontstyle"]
handler.tags = ["tools"]
handler.description = "Mengubah teks biasa menjadi berbagai gaya tulisan keren (fancy text)."
handler.importSource = "rimuru"
handler.importConfig = {"name": "styleteks", "alias": ["fancytext", "font", "gaya", "tulisan", "fontstyle"], "category": "tools", "description": "Mengubah teks biasa menjadi berbagai gaya tulisan keren (fancy text).", "usage": ".styleteks <teks>", "example": ".styleteks Halo Dunia", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-styleteks": "styleteks", "rimuru-styleteks": "styleteks", "rimuru-fancytext": "fancytext", "rimuru-gaya": "gaya", "rimuru-tulisan": "tulisan", "rimuru-fontstyle": "fontstyle", "styleteks": "styleteks", "fancytext": "fancytext", "gaya": "gaya", "tulisan": "tulisan", "fontstyle": "fontstyle"}
export default handler
