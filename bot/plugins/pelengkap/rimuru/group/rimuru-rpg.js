/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/rpg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rpg", "category": "group", "aliasMap": {"rimuru-group-rpg": "rpg", "rimuru-rpg": "rpg", "rimuru-togglerpg": "togglerpg", "rpg": "rpg", "togglerpg": "togglerpg"}, "description": "Mengaktifkan atau menonaktifkan fitur RPG di grup", "usage": ".rpg <on/off>", "example": ".rpg on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/rpg.js", metadata, m, extra)
handler.help = ["rimuru-group-rpg <on/off>"]
handler.command = ["rimuru-group-rpg", "rimuru-rpg", "rimuru-togglerpg", "rpg", "togglerpg"]
handler.tags = ["group"]
handler.description = "Mengaktifkan atau menonaktifkan fitur RPG di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rpg", "alias": ["togglerpg"], "category": "group", "description": "Mengaktifkan atau menonaktifkan fitur RPG di grup", "usage": ".rpg <on/off>", "example": ".rpg on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-rpg": "rpg", "rimuru-rpg": "rpg", "rimuru-togglerpg": "togglerpg", "rpg": "rpg", "togglerpg": "togglerpg"}
export default handler
