/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/toimg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "toimg", "category": "tools", "aliasMap": {"rimuru-tools-toimg": "toimg", "rimuru-toimg": "toimg", "rimuru-toimage": "toimage", "rimuru-stickertoimage": "stickertoimage", "rimuru-stimg": "stimg"}, "description": "Mengubah sticker menjadi gambar", "usage": ".toimg (reply/caption sticker)", "example": ".toimg", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/toimg.js", metadata, m, extra)
handler.help = ["rimuru-tools-toimg (reply/caption sticker)"]
handler.command = ["rimuru-tools-toimg", "rimuru-toimg", "rimuru-toimage", "rimuru-stickertoimage", "rimuru-stimg"]
handler.tags = ["tools"]
handler.description = "Mengubah sticker menjadi gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "toimg", "alias": ["toimage", "stickertoimage", "stimg"], "category": "tools", "description": "Mengubah sticker menjadi gambar", "usage": ".toimg (reply/caption sticker)", "example": ".toimg", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-toimg": "toimg", "rimuru-toimg": "toimg", "rimuru-toimage": "toimage", "rimuru-stickertoimage": "stickertoimage", "rimuru-stimg": "stimg"}
export default handler
