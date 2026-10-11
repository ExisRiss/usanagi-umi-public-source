/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/stickerpack.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stickerpack", "category": "sticker", "aliasMap": {"rimuru-sticker-stickerpack": "stickerpack", "rimuru-stickerpack": "stickerpack", "rimuru-stickersearch": "stickersearch", "rimuru-searchsticker": "searchsticker", "stickerpack": "stickerpack", "searchsticker": "searchsticker"}, "description": "Cari dan kirim sticker pack", "usage": ".stickerpack <query>", "example": ".stickerpack anime", "cooldown": 20, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/stickerpack.js", metadata, m, extra)
handler.help = ["rimuru-sticker-stickerpack <query>"]
handler.command = ["rimuru-sticker-stickerpack", "rimuru-stickerpack", "rimuru-stickersearch", "rimuru-searchsticker", "stickerpack", "searchsticker"]
handler.tags = ["sticker"]
handler.description = "Cari dan kirim sticker pack"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stickerpack", "alias": ["sp", "stickersearch", "searchsticker"], "category": "sticker", "description": "Cari dan kirim sticker pack", "usage": ".stickerpack <query>", "example": ".stickerpack anime", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 20, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-stickerpack": "stickerpack", "rimuru-stickerpack": "stickerpack", "rimuru-stickersearch": "stickersearch", "rimuru-searchsticker": "searchsticker", "stickerpack": "stickerpack", "searchsticker": "searchsticker"}
export default handler
