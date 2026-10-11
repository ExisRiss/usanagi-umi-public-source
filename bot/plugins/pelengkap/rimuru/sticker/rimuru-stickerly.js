/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/stickerly.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stickerly", "category": "sticker", "aliasMap": {"rimuru-sticker-stickerly": "stickerly", "rimuru-stickerly": "stickerly", "rimuru-stikerly": "stikerly", "rimuru-stickerlysearch": "stickerlysearch", "stikerly": "stikerly", "stickerlysearch": "stickerlysearch"}, "description": "Cari dan download sticker pack dari Sticker.ly", "usage": ".stickerly <query / url>", "example": ".stickerly anime", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/stickerly.js", metadata, m, extra)
handler.help = ["rimuru-sticker-stickerly <query / url>"]
handler.command = ["rimuru-sticker-stickerly", "rimuru-stickerly", "rimuru-stikerly", "rimuru-stickerlysearch", "stikerly", "stickerlysearch"]
handler.tags = ["sticker"]
handler.description = "Cari dan download sticker pack dari Sticker.ly"
handler.importSource = "rimuru"
handler.importConfig = {"name": "stickerly", "alias": ["stikerly", "stickerlysearch"], "category": "sticker", "description": "Cari dan download sticker pack dari Sticker.ly", "usage": ".stickerly <query / url>", "example": ".stickerly anime", "cooldown": 10, "energi": 2}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-stickerly": "stickerly", "rimuru-stickerly": "stickerly", "rimuru-stikerly": "stikerly", "rimuru-stickerlysearch": "stickerlysearch", "stikerly": "stikerly", "stickerlysearch": "stickerlysearch"}
export default handler
