/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/autosticker.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autosticker", "category": "group", "aliasMap": {"rimuru-group-autosticker": "autosticker", "rimuru-autosticker": "autosticker", "rimuru-autostiker": "autostiker", "autosticker": "autosticker", "autostiker": "autostiker"}, "description": "Toggle auto sticker - otomatis jadikan gambar/video jadi sticker", "usage": ".autosticker on/off", "example": ".autosticker on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/autosticker.js", metadata, m, extra)
handler.help = ["rimuru-group-autosticker on/off"]
handler.command = ["rimuru-group-autosticker", "rimuru-autosticker", "rimuru-autostiker", "autosticker", "autostiker"]
handler.tags = ["group"]
handler.description = "Toggle auto sticker - otomatis jadikan gambar/video jadi sticker"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autosticker", "alias": ["autostiker", "as"], "category": "group", "description": "Toggle auto sticker - otomatis jadikan gambar/video jadi sticker", "usage": ".autosticker on/off", "example": ".autosticker on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-autosticker": "autosticker", "rimuru-autosticker": "autosticker", "rimuru-autostiker": "autostiker", "autosticker": "autosticker", "autostiker": "autostiker"}
export default handler
