/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/emojitoanimasi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "emojitoanimasi", "category": "tools", "aliasMap": {"rimuru-tools-emojitoanimasi": "emojitoanimasi", "rimuru-emojitoanimasi": "emojitoanimasi", "rimuru-emoji2sticker": "emoji2sticker", "rimuru-emojisticker": "emojisticker", "rimuru-e2s": "e2s", "emojitoanimasi": "emojitoanimasi", "emoji2sticker": "emoji2sticker", "emojisticker": "emojisticker", "e2s": "e2s"}, "description": "Konversi emoji ke sticker animasi", "usage": ".emojitoanimasi <emoji>", "example": ".emojitoanimasi 😳", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/emojitoanimasi.js", metadata, m, extra)
handler.help = ["rimuru-tools-emojitoanimasi <emoji>"]
handler.command = ["rimuru-tools-emojitoanimasi", "rimuru-emojitoanimasi", "rimuru-emoji2sticker", "rimuru-emojisticker", "rimuru-e2s", "emojitoanimasi", "emoji2sticker", "emojisticker", "e2s"]
handler.tags = ["tools"]
handler.description = "Konversi emoji ke sticker animasi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "emojitoanimasi", "alias": ["emoji2sticker", "emojisticker", "e2s"], "category": "tools", "description": "Konversi emoji ke sticker animasi", "usage": ".emojitoanimasi <emoji>", "example": ".emojitoanimasi 😳", "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-emojitoanimasi": "emojitoanimasi", "rimuru-emojitoanimasi": "emojitoanimasi", "rimuru-emoji2sticker": "emoji2sticker", "rimuru-emojisticker": "emojisticker", "rimuru-e2s": "e2s", "emojitoanimasi": "emojitoanimasi", "emoji2sticker": "emoji2sticker", "emojisticker": "emojisticker", "e2s": "e2s"}
export default handler
