/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/intro.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "intro", "category": "group", "aliasMap": {"rimuru-group-intro": "intro", "rimuru-intro": "intro", "rimuru-perkenalan": "perkenalan", "rimuru-selamatdatang": "selamatdatang", "perkenalan": "perkenalan", "selamatdatang": "selamatdatang"}, "description": "Tampilkan pesan intro grup", "usage": ".intro", "example": ".intro", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/intro.js", metadata, m, extra)
handler.help = ["rimuru-group-intro"]
handler.command = ["rimuru-group-intro", "rimuru-intro", "rimuru-perkenalan", "rimuru-selamatdatang", "perkenalan", "selamatdatang"]
handler.tags = ["group"]
handler.description = "Tampilkan pesan intro grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "intro", "alias": ["perkenalan", "selamatdatang"], "category": "group", "description": "Tampilkan pesan intro grup", "usage": ".intro", "example": ".intro", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-intro": "intro", "rimuru-intro": "intro", "rimuru-perkenalan": "perkenalan", "rimuru-selamatdatang": "selamatdatang", "perkenalan": "perkenalan", "selamatdatang": "selamatdatang"}
export default handler
