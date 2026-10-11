/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/mywaifu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mywaifu", "category": "anime", "aliasMap": {"rimuru-anime-mywaifu": "mywaifu", "rimuru-mywaifu": "mywaifu", "rimuru-waifuim": "waifuim", "rimuru-waifu": "waifu", "rimuru-waifus": "waifus", "mywaifu": "mywaifu", "waifuim": "waifuim", "waifu": "waifu", "waifus": "waifus"}, "description": "Mencari sekumpulan gambar waifu (SFW / NSFW) menggunakan API Waifu.im.", "usage": ".mywaifu sfw\nAtau\n.mywaifu nsfw", "example": ".mywaifu sfw", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/mywaifu.js", metadata, m, extra)
handler.help = ["rimuru-anime-mywaifu sfw\nAtau\n.mywaifu nsfw"]
handler.command = ["rimuru-anime-mywaifu", "rimuru-mywaifu", "rimuru-waifuim", "rimuru-waifu", "rimuru-waifus", "mywaifu", "waifuim", "waifu", "waifus"]
handler.tags = ["anime"]
handler.description = "Mencari sekumpulan gambar waifu (SFW / NSFW) menggunakan API Waifu.im."
handler.importSource = "rimuru"
handler.importConfig = {"name": "mywaifu", "alias": ["waifuim", "waifu", "waifus"], "category": "anime", "description": "Mencari sekumpulan gambar waifu (SFW / NSFW) menggunakan API Waifu.im.", "usage": ".mywaifu sfw\nAtau\n.mywaifu nsfw", "example": ".mywaifu sfw", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-mywaifu": "mywaifu", "rimuru-mywaifu": "mywaifu", "rimuru-waifuim": "waifuim", "rimuru-waifu": "waifu", "rimuru-waifus": "waifus", "mywaifu": "mywaifu", "waifuim": "waifuim", "waifu": "waifu", "waifus": "waifus"}
export default handler
