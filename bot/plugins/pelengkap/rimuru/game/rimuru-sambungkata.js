/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/sambungkata.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sambungkata", "category": "game", "aliasMap": {"rimuru-game-sambungkata": "sambungkata", "rimuru-sambungkata": "sambungkata", "rimuru-skata": "skata", "rimuru-sambungkat": "sambungkat", "rimuru-wordchain": "wordchain", "skata": "skata", "sambungkat": "sambungkat", "wordchain": "wordchain"}, "description": "Game sambung kata dari huruf akhir kata sebelumnya (KBBI) — special from Ai~! ⭐", "usage": ".sambungkata | .sambungkata start | .sambungkata stop", "example": ".sambungkata", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/sambungkata.js", metadata, m, extra)
handler.help = ["rimuru-game-sambungkata | .sambungkata start | .sambungkata stop"]
handler.command = ["rimuru-game-sambungkata", "rimuru-sambungkata", "rimuru-skata", "rimuru-sambungkat", "rimuru-wordchain", "skata", "sambungkat", "wordchain"]
handler.tags = ["game"]
handler.description = "Game sambung kata dari huruf akhir kata sebelumnya (KBBI) — special from Ai~! ⭐"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sambungkata", "alias": ["skata", "sambungkat", "wordchain"], "category": "game", "description": "Game sambung kata dari huruf akhir kata sebelumnya (KBBI) — special from Ai~! ⭐", "usage": ".sambungkata | .sambungkata start | .sambungkata stop", "example": ".sambungkata", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-sambungkata": "sambungkata", "rimuru-sambungkata": "sambungkata", "rimuru-skata": "skata", "rimuru-sambungkat": "sambungkat", "rimuru-wordchain": "wordchain", "skata": "skata", "sambungkat": "sambungkat", "wordchain": "wordchain"}
export default handler
