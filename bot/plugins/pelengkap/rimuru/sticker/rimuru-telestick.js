/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/telestick.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "telestick", "category": "sticker", "aliasMap": {"rimuru-sticker-telestick": "telestick", "rimuru-telestick": "telestick", "rimuru-tgsticker": "tgsticker", "rimuru-telegramsticker": "telegramsticker", "telestick": "telestick", "tgsticker": "tgsticker", "telegramsticker": "telegramsticker"}, "description": "Ambil sticker pack dari Telegram dan kirim sebagai sticker pack WhatsApp", "usage": ".telestick <url>", "example": ".telestick https://t.me/addstickers/AnimeSticker", "cooldown": 30, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/telestick.js", metadata, m, extra)
handler.help = ["rimuru-sticker-telestick <url>"]
handler.command = ["rimuru-sticker-telestick", "rimuru-telestick", "rimuru-tgsticker", "rimuru-telegramsticker", "telestick", "tgsticker", "telegramsticker"]
handler.tags = ["sticker"]
handler.description = "Ambil sticker pack dari Telegram dan kirim sebagai sticker pack WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "telestick", "alias": ["tgsticker", "telegramsticker"], "category": "sticker", "description": "Ambil sticker pack dari Telegram dan kirim sebagai sticker pack WhatsApp", "usage": ".telestick <url>", "example": ".telestick https://t.me/addstickers/AnimeSticker", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 30, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-telestick": "telestick", "rimuru-telestick": "telestick", "rimuru-tgsticker": "tgsticker", "rimuru-telegramsticker": "telegramsticker", "telestick": "telestick", "tgsticker": "tgsticker", "telegramsticker": "telegramsticker"}
export default handler
