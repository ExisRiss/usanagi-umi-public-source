/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/general/mcaddons.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mcaddons", "category": "general", "aliasMap": {"rimuru-general-mcaddons": "mcaddons", "rimuru-mcaddons": "mcaddons", "rimuru-mcmap": "mcmap", "mcaddons": "mcaddons", "mcmap": "mcmap"}, "description": "Mencari Minecraft Bedrock addon dan map terbaru", "usage": ".mcaddons [atau .mcmap]", "example": ".mcaddons", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/general/mcaddons.js", metadata, m, extra)
handler.help = ["rimuru-general-mcaddons [atau .mcmap]"]
handler.command = ["rimuru-general-mcaddons", "rimuru-mcaddons", "rimuru-mcmap", "mcaddons", "mcmap"]
handler.tags = ["general"]
handler.description = "Mencari Minecraft Bedrock addon dan map terbaru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mcaddons", "alias": ["mcmap"], "category": "general", "description": "Mencari Minecraft Bedrock addon dan map terbaru", "usage": ".mcaddons [atau .mcmap]", "example": ".mcaddons", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-general-mcaddons": "mcaddons", "rimuru-mcaddons": "mcaddons", "rimuru-mcmap": "mcmap", "mcaddons": "mcaddons", "mcmap": "mcmap"}
export default handler
