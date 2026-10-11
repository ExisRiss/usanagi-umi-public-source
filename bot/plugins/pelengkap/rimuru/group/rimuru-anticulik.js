/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/anticulik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anticulik", "category": "group", "aliasMap": {"rimuru-group-anticulik": "anticulik", "rimuru-anticulik": "anticulik", "rimuru-antikidnap": "antikidnap", "rimuru-antiileng": "antiileng", "rimuru-anticulikgc": "anticulikgc", "anticulik": "anticulik", "antikidnap": "antikidnap", "antiileng": "antiileng", "anticulikgc": "anticulikgc"}, "description": "Bot otomatis keluar grup jika ditambah tanpa izin", "usage": ".anticulik on/off", "example": ".anticulik on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/anticulik.js", metadata, m, extra)
handler.help = ["rimuru-group-anticulik on/off"]
handler.command = ["rimuru-group-anticulik", "rimuru-anticulik", "rimuru-antikidnap", "rimuru-antiileng", "rimuru-anticulikgc", "anticulik", "antikidnap", "antiileng", "anticulikgc"]
handler.tags = ["group"]
handler.description = "Bot otomatis keluar grup jika ditambah tanpa izin"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anticulik", "alias": ["antikidnap", "antiileng", "anticulikgc"], "category": "group", "description": "Bot otomatis keluar grup jika ditambah tanpa izin", "usage": ".anticulik on/off", "example": ".anticulik on", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-anticulik": "anticulik", "rimuru-anticulik": "anticulik", "rimuru-antikidnap": "antikidnap", "rimuru-antiileng": "antiileng", "rimuru-anticulikgc": "anticulikgc", "anticulik": "anticulik", "antikidnap": "antikidnap", "antiileng": "antiileng", "anticulikgc": "anticulikgc"}
export default handler
