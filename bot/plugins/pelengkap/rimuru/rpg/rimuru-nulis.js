/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/nulis.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nulis", "category": "rpg", "aliasMap": {"rimuru-rpg-nulis": "nulis", "rimuru-author": "author", "wattpad": "wattpad"}, "description": "Nulis cerpen atau artikel untuk dapet royalti", "usage": ".nulis", "example": ".nulis", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/nulis.js", metadata, m, extra)
handler.help = ["rimuru-rpg-nulis"]
handler.command = ["rimuru-rpg-nulis", "rimuru-author", "wattpad"]
handler.tags = ["rpg"]
handler.description = "Nulis cerpen atau artikel untuk dapet royalti"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nulis", "alias": ["author", "wattpad"], "category": "rpg", "description": "Nulis cerpen atau artikel untuk dapet royalti", "usage": ".nulis", "example": ".nulis", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-nulis": "nulis", "rimuru-author": "author", "wattpad": "wattpad"}
export default handler
