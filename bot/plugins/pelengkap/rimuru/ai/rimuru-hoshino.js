/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/hoshino.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hoshino", "category": "ai", "aliasMap": {"rimuru-ai-hoshino": "hoshino", "rimuru-hoshino": "hoshino", "rimuru-hoshinoba": "hoshinoba", "hoshino": "hoshino", "hoshinoba": "hoshinoba"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/hoshino.js", metadata, m, extra)
handler.help = ["rimuru-ai-hoshino"]
handler.command = ["rimuru-ai-hoshino", "rimuru-hoshino", "rimuru-hoshinoba", "hoshino", "hoshinoba"]
handler.tags = ["ai"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hoshino", "alias": ["hoshinoba"], "category": "ai", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-hoshino": "hoshino", "rimuru-hoshino": "hoshino", "rimuru-hoshinoba": "hoshinoba", "hoshino": "hoshino", "hoshinoba": "hoshinoba"}
export default handler
