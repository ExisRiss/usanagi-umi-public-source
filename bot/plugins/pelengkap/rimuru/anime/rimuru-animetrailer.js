/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animetrailer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animetrailer", "category": "anime", "aliasMap": {"rimuru-anime-animetrailer": "animetrailer", "rimuru-animetrailer": "animetrailer", "rimuru-traileranime": "traileranime", "rimuru-animepv": "animepv", "rimuru-animepromo": "animepromo", "animetrailer": "animetrailer", "traileranime": "traileranime", "animepv": "animepv", "animepromo": "animepromo"}, "description": "Cari dan share trailer / PV anime terbaru dari YouTube", "usage": ".animetrailer <judul anime>", "example": ".animetrailer jujutsu kaisen\n.animetrailer chainsaw man\n.animetrailer one piece", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animetrailer.js", metadata, m, extra)
handler.help = ["rimuru-anime-animetrailer <judul anime>"]
handler.command = ["rimuru-anime-animetrailer", "rimuru-animetrailer", "rimuru-traileranime", "rimuru-animepv", "rimuru-animepromo", "animetrailer", "traileranime", "animepv", "animepromo"]
handler.tags = ["anime"]
handler.description = "Cari dan share trailer / PV anime terbaru dari YouTube"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animetrailer", "alias": ["traileranime", "animepv", "animepromo"], "category": "anime", "description": "Cari dan share trailer / PV anime terbaru dari YouTube", "usage": ".animetrailer <judul anime>", "example": ".animetrailer jujutsu kaisen\n.animetrailer chainsaw man\n.animetrailer one piece", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animetrailer": "animetrailer", "rimuru-animetrailer": "animetrailer", "rimuru-traileranime": "traileranime", "rimuru-animepv": "animepv", "rimuru-animepromo": "animepromo", "animetrailer": "animetrailer", "traileranime": "traileranime", "animepv": "animepv", "animepromo": "animepromo"}
export default handler
