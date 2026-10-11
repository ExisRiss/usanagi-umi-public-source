/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/stikerwa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stikerwa", "category": "search", "aliasMap": {"rimuru-search-stikerwa": "stikerwa", "rimuru-stikerwa": "stikerwa", "rimuru-stickerwa": "stickerwa", "rimuru-wasearch": "wasearch", "rimuru-wassticker": "wassticker", "rimuru-stkrwa": "stkrwa", "stikerwa": "stikerwa", "stickerwa": "stickerwa", "wasearch": "wasearch", "wassticker": "wassticker", "stkrwa": "stkrwa"}, "description": "Cari sticker WhatsApp", "usage": ".stikerwa <query>", "example": ".stikerwa anime", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/stikerwa.js", metadata, m, extra)
handler.help = ["rimuru-search-stikerwa <query>"]
handler.command = ["rimuru-search-stikerwa", "rimuru-stikerwa", "rimuru-stickerwa", "rimuru-wasearch", "rimuru-wassticker", "rimuru-stkrwa", "stikerwa", "stickerwa", "wasearch", "wassticker", "stkrwa"]
handler.tags = ["search"]
handler.description = "Cari sticker WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stikerwa", "alias": ["stickerwa", "wasearch", "wassticker", "stkrwa"], "category": "search", "description": "Cari sticker WhatsApp", "usage": ".stikerwa <query>", "example": ".stikerwa anime", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-stikerwa": "stikerwa", "rimuru-stikerwa": "stikerwa", "rimuru-stickerwa": "stickerwa", "rimuru-wasearch": "wasearch", "rimuru-wassticker": "wassticker", "rimuru-stkrwa": "stkrwa", "stikerwa": "stikerwa", "stickerwa": "stickerwa", "wasearch": "wasearch", "wassticker": "wassticker", "stkrwa": "stkrwa"}
export default handler
