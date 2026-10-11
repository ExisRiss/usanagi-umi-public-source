/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autoreadsw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoreadsw", "category": "owner", "aliasMap": {"rimuru-owner-autoreadsw": "autoreadsw", "rimuru-autoreadsw": "autoreadsw", "rimuru-autoreadstory": "autoreadstory", "rimuru-readstory": "readstory", "rimuru-bacasw": "bacasw", "autoreadsw": "autoreadsw", "autoreadstory": "autoreadstory", "readstory": "readstory", "bacasw": "bacasw"}, "description": "Auto read semua status/story WA", "usage": ".autoreadsw on/off", "example": ".autoreadsw on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autoreadsw.js", metadata, m, extra)
handler.help = ["rimuru-owner-autoreadsw on/off"]
handler.command = ["rimuru-owner-autoreadsw", "rimuru-autoreadsw", "rimuru-autoreadstory", "rimuru-readstory", "rimuru-bacasw", "autoreadsw", "autoreadstory", "readstory", "bacasw"]
handler.tags = ["owner"]
handler.description = "Auto read semua status/story WA"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoreadsw", "alias": ["autoreadstory", "readstory", "bacasw"], "category": "owner", "description": "Auto read semua status/story WA", "usage": ".autoreadsw on/off", "example": ".autoreadsw on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-autoreadsw": "autoreadsw", "rimuru-autoreadsw": "autoreadsw", "rimuru-autoreadstory": "autoreadstory", "rimuru-readstory": "readstory", "rimuru-bacasw": "bacasw", "autoreadsw": "autoreadsw", "autoreadstory": "autoreadstory", "readstory": "readstory", "bacasw": "bacasw"}
export default handler
