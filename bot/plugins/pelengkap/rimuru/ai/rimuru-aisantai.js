/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/aisantai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "aisantai", "category": "ai", "aliasMap": {"rimuru-ai-aisantai": "aisantai", "rimuru-aisantai": "aisantai", "rimuru-ceai": "ceai", "rimuru-chateverywhere": "chateverywhere", "rimuru-ce": "ce", "rimuru-chatgpt": "chatgpt", "aisantai": "aisantai", "ceai": "ceai", "chateverywhere": "chateverywhere", "ce": "ce", "chatgpt": "chatgpt"}, "description": "Chat dengan AI santai (ChatEverywhere)", "usage": ".aisantai <pesan>", "example": ".aisantai Halo bro", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/aisantai.js", metadata, m, extra)
handler.help = ["rimuru-ai-aisantai <pesan>"]
handler.command = ["rimuru-ai-aisantai", "rimuru-aisantai", "rimuru-ceai", "rimuru-chateverywhere", "rimuru-ce", "rimuru-chatgpt", "aisantai", "ceai", "chateverywhere", "ce", "chatgpt"]
handler.tags = ["ai"]
handler.description = "Chat dengan AI santai (ChatEverywhere)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "aisantai", "alias": ["ceai", "chateverywhere", "ce", "chatgpt"], "category": "ai", "description": "Chat dengan AI santai (ChatEverywhere)", "usage": ".aisantai <pesan>", "example": ".aisantai Halo bro", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-aisantai": "aisantai", "rimuru-aisantai": "aisantai", "rimuru-ceai": "ceai", "rimuru-chateverywhere": "chateverywhere", "rimuru-ce": "ce", "rimuru-chatgpt": "chatgpt", "aisantai": "aisantai", "ceai": "ceai", "chateverywhere": "chateverywhere", "ce": "ce", "chatgpt": "chatgpt"}
export default handler
