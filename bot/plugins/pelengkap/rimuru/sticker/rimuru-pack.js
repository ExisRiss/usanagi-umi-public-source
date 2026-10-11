/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/pack.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pack", "category": "sticker", "aliasMap": {"rimuru-sticker-pack": "pack", "rimuru-pack": "pack", "pack": "pack"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/pack.js", metadata, m, extra)
handler.help = ["rimuru-sticker-pack"]
handler.command = ["rimuru-sticker-pack", "rimuru-pack", "pack"]
handler.tags = ["sticker"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pack", "alias": [], "category": "sticker", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-pack": "pack", "rimuru-pack": "pack", "pack": "pack"}
export default handler
