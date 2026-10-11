/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/character.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "character", "category": "anime", "aliasMap": {"rimuru-anime-character": "character", "rimuru-character": "character", "rimuru-karakter": "karakter", "rimuru-animechar": "animechar", "rimuru-char": "char", "character": "character", "karakter": "karakter", "animechar": "animechar", "char": "char"}, "description": "Cari profil karakter anime dari MyAnimeList", "usage": ".character <nama karakter>", "example": ".character zero two\n.character gojo\n.character luffy", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/character.js", metadata, m, extra)
handler.help = ["rimuru-anime-character <nama karakter>"]
handler.command = ["rimuru-anime-character", "rimuru-character", "rimuru-karakter", "rimuru-animechar", "rimuru-char", "character", "karakter", "animechar", "char"]
handler.tags = ["anime"]
handler.description = "Cari profil karakter anime dari MyAnimeList"
handler.importSource = "rimuru"
handler.importConfig = {"name": "character", "alias": ["karakter", "animechar", "char"], "category": "anime", "description": "Cari profil karakter anime dari MyAnimeList", "usage": ".character <nama karakter>", "example": ".character zero two\n.character gojo\n.character luffy", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-character": "character", "rimuru-character": "character", "rimuru-karakter": "karakter", "rimuru-animechar": "animechar", "rimuru-char": "char", "character": "character", "karakter": "karakter", "animechar": "animechar", "char": "char"}
export default handler
