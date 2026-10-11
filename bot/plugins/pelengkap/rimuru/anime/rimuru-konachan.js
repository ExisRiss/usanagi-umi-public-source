/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/konachan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "konachan", "category": "anime", "aliasMap": {"rimuru-anime-konachan": "konachan", "rimuru-konachan": "konachan", "rimuru-konasearch": "konasearch", "rimuru-kona": "kona", "rimuru-konaimg": "konaimg", "konachan": "konachan", "konasearch": "konasearch", "kona": "kona", "konaimg": "konaimg"}, "description": "Cari gambar anime dari konachan", "usage": ".konachan <tags>", "example": ".konachan long_hair blue_eyes", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/konachan.js", metadata, m, extra)
handler.help = ["rimuru-anime-konachan <tags>"]
handler.command = ["rimuru-anime-konachan", "rimuru-konachan", "rimuru-konasearch", "rimuru-kona", "rimuru-konaimg", "konachan", "konasearch", "kona", "konaimg"]
handler.tags = ["anime"]
handler.description = "Cari gambar anime dari konachan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "konachan", "alias": ["konasearch", "kona", "konaimg"], "category": "anime", "description": "Cari gambar anime dari konachan", "usage": ".konachan <tags>", "example": ".konachan long_hair blue_eyes", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-konachan": "konachan", "rimuru-konachan": "konachan", "rimuru-konasearch": "konasearch", "rimuru-kona": "kona", "rimuru-konaimg": "konaimg", "konachan": "konachan", "konasearch": "konasearch", "kona": "kona", "konaimg": "konaimg"}
export default handler
