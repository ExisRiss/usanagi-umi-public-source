/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/buyfitur.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "buyfitur", "category": "user", "aliasMap": {"rimuru-user-buyfitur": "buyfitur", "rimuru-buyfitur": "buyfitur", "rimuru-belifitur": "belifitur", "rimuru-purchasefeature": "purchasefeature", "rimuru-buyfeature": "buyfeature", "buyfitur": "buyfitur", "belifitur": "belifitur", "purchasefeature": "purchasefeature", "buyfeature": "buyfeature"}, "description": "Beli fitur premium (1 fitur = 3000 koin)", "usage": ".buyfitur [nama_fitur]", "example": ".buyfitur", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/buyfitur.js", metadata, m, extra)
handler.help = ["rimuru-user-buyfitur [nama_fitur]"]
handler.command = ["rimuru-user-buyfitur", "rimuru-buyfitur", "rimuru-belifitur", "rimuru-purchasefeature", "rimuru-buyfeature", "buyfitur", "belifitur", "purchasefeature", "buyfeature"]
handler.tags = ["user"]
handler.description = "Beli fitur premium (1 fitur = 3000 koin)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "buyfitur", "alias": ["belifitur", "purchasefeature", "buyfeature"], "category": "user", "description": "Beli fitur premium (1 fitur = 3000 koin)", "usage": ".buyfitur [nama_fitur]", "example": ".buyfitur", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-buyfitur": "buyfitur", "rimuru-buyfitur": "buyfitur", "rimuru-belifitur": "belifitur", "rimuru-purchasefeature": "purchasefeature", "rimuru-buyfeature": "buyfeature", "buyfitur": "buyfitur", "belifitur": "belifitur", "purchasefeature": "purchasefeature", "buyfeature": "buyfeature"}
export default handler
