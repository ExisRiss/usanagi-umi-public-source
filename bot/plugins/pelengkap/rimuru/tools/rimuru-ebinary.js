/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ebinary.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ebinary", "category": "tools", "aliasMap": {"rimuru-tools-ebinary": "ebinary", "rimuru-ebinary": "ebinary", "rimuru-encodebinary": "encodebinary", "rimuru-text2binary": "text2binary", "ebinary": "ebinary", "encodebinary": "encodebinary", "text2binary": "text2binary"}, "description": "Encode teks menjadi binary", "usage": ".ebinary <teks>", "example": ".ebinary Rimuru", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ebinary.js", metadata, m, extra)
handler.help = ["rimuru-tools-ebinary <teks>"]
handler.command = ["rimuru-tools-ebinary", "rimuru-ebinary", "rimuru-encodebinary", "rimuru-text2binary", "ebinary", "encodebinary", "text2binary"]
handler.tags = ["tools"]
handler.description = "Encode teks menjadi binary"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ebinary", "alias": ["encodebinary", "text2binary"], "category": "tools", "description": "Encode teks menjadi binary", "usage": ".ebinary <teks>", "example": ".ebinary Rimuru", "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ebinary": "ebinary", "rimuru-ebinary": "ebinary", "rimuru-encodebinary": "encodebinary", "rimuru-text2binary": "text2binary", "ebinary": "ebinary", "encodebinary": "encodebinary", "text2binary": "text2binary"}
export default handler
