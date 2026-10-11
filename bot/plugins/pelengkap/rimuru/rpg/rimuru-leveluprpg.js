/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/leveluprpg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "leveluprpg", "category": "rpg", "aliasMap": {"rimuru-rpg-leveluprpg": "leveluprpg", "rimuru-leveluprpg": "leveluprpg", "rimuru-lvluprpg": "lvluprpg", "rimuru-rpglevelup": "rpglevelup"}, "description": "Toggle notifikasi level up RPG", "usage": ".leveluprpg <on/off>", "example": ".leveluprpg on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/leveluprpg.js", metadata, m, extra)
handler.help = ["rimuru-rpg-leveluprpg <on/off>"]
handler.command = ["rimuru-rpg-leveluprpg", "rimuru-leveluprpg", "rimuru-lvluprpg", "rimuru-rpglevelup"]
handler.tags = ["rpg"]
handler.description = "Toggle notifikasi level up RPG"
handler.importSource = "rimuru"
handler.importConfig = {"name": "leveluprpg", "alias": ["lvluprpg", "rpglevelup"], "category": "rpg", "description": "Toggle notifikasi level up RPG", "usage": ".leveluprpg <on/off>", "example": ".leveluprpg on", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-leveluprpg": "leveluprpg", "rimuru-leveluprpg": "leveluprpg", "rimuru-lvluprpg": "lvluprpg", "rimuru-rpglevelup": "rpglevelup"}
export default handler
