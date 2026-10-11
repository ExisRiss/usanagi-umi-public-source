/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/tahlil.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tahlil", "category": "religi", "aliasMap": {"rimuru-religi-tahlil": "tahlil", "rimuru-tahlil": "tahlil", "rimuru-tahlilan": "tahlilan", "rimuru-doatahlil": "doatahlil", "tahlil": "tahlil", "tahlilan": "tahlilan", "doatahlil": "doatahlil"}, "description": "Panduan Tahlil Lengkap (Doa, Bacaan, dan Tata Cara)", "usage": ".tahlil", "example": ".tahlil", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/tahlil.js", metadata, m, extra)
handler.help = ["rimuru-religi-tahlil"]
handler.command = ["rimuru-religi-tahlil", "rimuru-tahlil", "rimuru-tahlilan", "rimuru-doatahlil", "tahlil", "tahlilan", "doatahlil"]
handler.tags = ["religi"]
handler.description = "Panduan Tahlil Lengkap (Doa, Bacaan, dan Tata Cara)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tahlil", "alias": ["tahlilan", "doatahlil", "tahlil"], "category": "religi", "description": "Panduan Tahlil Lengkap (Doa, Bacaan, dan Tata Cara)", "usage": ".tahlil", "example": ".tahlil", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-tahlil": "tahlil", "rimuru-tahlil": "tahlil", "rimuru-tahlilan": "tahlilan", "rimuru-doatahlil": "doatahlil", "tahlil": "tahlil", "tahlilan": "tahlilan", "doatahlil": "doatahlil"}
export default handler
