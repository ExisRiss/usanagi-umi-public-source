/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/animewall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animewall", "category": "anime", "aliasMap": {"rimuru-anime-animewall": "animewall", "rimuru-animewall": "animewall", "rimuru-animewallpaper": "animewallpaper", "rimuru-wallanime": "wallanime", "rimuru-wpanime": "wpanime", "animewall": "animewall", "animewallpaper": "animewallpaper", "wallanime": "wallanime", "wpanime": "wpanime"}, "description": "Dapatkan random wallpaper anime HD dari berbagai series", "usage": ".animewall [series]", "example": ".animewall\n.animewall naruto\n.animewall zero two", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/animewall.js", metadata, m, extra)
handler.help = ["rimuru-anime-animewall [series]"]
handler.command = ["rimuru-anime-animewall", "rimuru-animewall", "rimuru-animewallpaper", "rimuru-wallanime", "rimuru-wpanime", "animewall", "animewallpaper", "wallanime", "wpanime"]
handler.tags = ["anime"]
handler.description = "Dapatkan random wallpaper anime HD dari berbagai series"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animewall", "alias": ["animewallpaper", "wallanime", "wpanime"], "category": "anime", "description": "Dapatkan random wallpaper anime HD dari berbagai series", "usage": ".animewall [series]", "example": ".animewall\n.animewall naruto\n.animewall zero two", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-animewall": "animewall", "rimuru-animewall": "animewall", "rimuru-animewallpaper": "animewallpaper", "rimuru-wallanime": "wallanime", "rimuru-wpanime": "wpanime", "animewall": "animewall", "animewallpaper": "animewallpaper", "wallanime": "wallanime", "wpanime": "wpanime"}
export default handler
