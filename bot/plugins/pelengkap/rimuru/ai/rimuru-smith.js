/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/smith.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "chatsmith", "category": "ai", "aliasMap": {"rimuru-ai-chatsmith": "chatsmith", "rimuru-chatsmith": "chatsmith", "rimuru-smith": "smith", "rimuru-chatsmithai": "chatsmithai", "rimuru-smithai": "smithai", "chatsmith": "chatsmith", "smith": "smith", "chatsmithai": "chatsmithai", "smithai": "smithai"}, "description": "AI Chat menggunakan Chat Smith (GPT-4o Mini)", "usage": ".chatsmith <pesan>", "example": ".chatsmith Siapakah penemu listrik?", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/smith.js", metadata, m, extra)
handler.help = ["rimuru-ai-chatsmith <pesan>"]
handler.command = ["rimuru-ai-chatsmith", "rimuru-chatsmith", "rimuru-smith", "rimuru-chatsmithai", "rimuru-smithai", "chatsmith", "smith", "chatsmithai", "smithai"]
handler.tags = ["ai"]
handler.description = "AI Chat menggunakan Chat Smith (GPT-4o Mini)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "chatsmith", "alias": ["smith", "chatsmithai", "smithai"], "category": "ai", "description": "AI Chat menggunakan Chat Smith (GPT-4o Mini)", "usage": ".chatsmith <pesan>", "example": ".chatsmith Siapakah penemu listrik?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-chatsmith": "chatsmith", "rimuru-chatsmith": "chatsmith", "rimuru-smith": "smith", "rimuru-chatsmithai": "chatsmithai", "rimuru-smithai": "smithai", "chatsmith": "chatsmith", "smith": "smith", "chatsmithai": "chatsmithai", "smithai": "smithai"}
export default handler
