/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/sider.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sider", "category": "group", "aliasMap": {"rimuru-group-sider": "sider", "rimuru-sider": "sider", "rimuru-silentreader": "silentreader", "rimuru-deteksisider": "deteksisider", "rimuru-srdetector": "srdetector", "silentreader": "silentreader", "deteksisider": "deteksisider", "srdetector": "srdetector"}, "description": "Mendeteksi member yang tidak pernah chat dalam periode tertentu", "usage": ".sider <on/off/cek/set>", "example": ".sider cek", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/sider.js", metadata, m, extra)
handler.help = ["rimuru-group-sider <on/off/cek/set>"]
handler.command = ["rimuru-group-sider", "rimuru-sider", "rimuru-silentreader", "rimuru-deteksisider", "rimuru-srdetector", "silentreader", "deteksisider", "srdetector"]
handler.tags = ["group"]
handler.description = "Mendeteksi member yang tidak pernah chat dalam periode tertentu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sider", "alias": ["silentreader", "deteksisider", "srdetector"], "category": "group", "description": "Mendeteksi member yang tidak pernah chat dalam periode tertentu", "usage": ".sider <on/off/cek/set>", "example": ".sider cek", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-sider": "sider", "rimuru-sider": "sider", "rimuru-silentreader": "silentreader", "rimuru-deteksisider": "deteksisider", "rimuru-srdetector": "srdetector", "silentreader": "silentreader", "deteksisider": "deteksisider", "srdetector": "srdetector"}
export default handler
