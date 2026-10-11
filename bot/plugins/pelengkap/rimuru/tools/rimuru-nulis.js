/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/nulis.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nulis", "category": "tools", "aliasMap": {"rimuru-tools-nulis": "nulis", "rimuru-tulis": "tulis", "rimuru-write": "write"}, "description": "Generate tulisan tangan di kertas", "usage": ".nulis <teks>", "example": ".nulis Aku cinta kamu selamanya", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/nulis.js", metadata, m, extra)
handler.help = ["rimuru-tools-nulis <teks>"]
handler.command = ["rimuru-tools-nulis", "rimuru-tulis", "rimuru-write"]
handler.tags = ["tools"]
handler.description = "Generate tulisan tangan di kertas"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nulis", "alias": ["tulis", "write"], "category": "tools", "description": "Generate tulisan tangan di kertas", "usage": ".nulis <teks>", "example": ".nulis Aku cinta kamu selamanya", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-nulis": "nulis", "rimuru-tulis": "tulis", "rimuru-write": "write"}
export default handler
