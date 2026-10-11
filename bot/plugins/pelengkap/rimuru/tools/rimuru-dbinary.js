/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/dbinary.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dbinary", "category": "tools", "aliasMap": {"rimuru-tools-dbinary": "dbinary", "rimuru-dbinary": "dbinary", "rimuru-decodebinary": "decodebinary", "rimuru-binary2text": "binary2text", "dbinary": "dbinary", "decodebinary": "decodebinary", "binary2text": "binary2text"}, "description": "Decode binary menjadi teks", "usage": ".dbinary <binary>", "example": ".dbinary 1001001 110110 110", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/dbinary.js", metadata, m, extra)
handler.help = ["rimuru-tools-dbinary <binary>"]
handler.command = ["rimuru-tools-dbinary", "rimuru-dbinary", "rimuru-decodebinary", "rimuru-binary2text", "dbinary", "decodebinary", "binary2text"]
handler.tags = ["tools"]
handler.description = "Decode binary menjadi teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dbinary", "alias": ["decodebinary", "binary2text"], "category": "tools", "description": "Decode binary menjadi teks", "usage": ".dbinary <binary>", "example": ".dbinary 1001001 110110 110", "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-dbinary": "dbinary", "rimuru-dbinary": "dbinary", "rimuru-decodebinary": "decodebinary", "rimuru-binary2text": "binary2text", "dbinary": "dbinary", "decodebinary": "decodebinary", "binary2text": "binary2text"}
export default handler
