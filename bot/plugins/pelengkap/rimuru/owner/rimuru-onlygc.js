/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/onlygc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "onlygc", "category": "owner", "aliasMap": {"rimuru-owner-onlygc": "onlygc", "rimuru-onlygc": "onlygc", "rimuru-onlygroup": "onlygroup", "rimuru-grouponly": "grouponly", "onlygroup": "onlygroup", "grouponly": "grouponly"}, "description": "Toggle mode bot hanya di grup", "usage": ".onlygc on/off", "example": ".onlygc on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/onlygc.js", metadata, m, extra)
handler.help = ["rimuru-owner-onlygc on/off"]
handler.command = ["rimuru-owner-onlygc", "rimuru-onlygc", "rimuru-onlygroup", "rimuru-grouponly", "onlygroup", "grouponly"]
handler.tags = ["owner"]
handler.description = "Toggle mode bot hanya di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "onlygc", "alias": ["onlygroup", "grouponly"], "category": "owner", "description": "Toggle mode bot hanya di grup", "usage": ".onlygc on/off", "example": ".onlygc on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-onlygc": "onlygc", "rimuru-onlygc": "onlygc", "rimuru-onlygroup": "onlygroup", "rimuru-grouponly": "grouponly", "onlygroup": "onlygroup", "grouponly": "grouponly"}
export default handler
