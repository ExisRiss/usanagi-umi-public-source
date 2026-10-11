/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/confess.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "confess", "category": "fun", "aliasMap": {"rimuru-fun-confess": "confess", "rimuru-confess": "confess", "rimuru-confession": "confession", "rimuru-menfess": "menfess", "rimuru-anonim": "anonim", "confess": "confess", "confession": "confession", "menfess": "menfess", "anonim": "anonim"}, "description": "Kirim pesan anonim ke seseorang", "usage": ".confess nomor|pesan", "example": ".confess 6281234567890|Hai, aku suka kamu!", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/confess.js", metadata, m, extra)
handler.help = ["rimuru-fun-confess nomor|pesan"]
handler.command = ["rimuru-fun-confess", "rimuru-confess", "rimuru-confession", "rimuru-menfess", "rimuru-anonim", "confess", "confession", "menfess", "anonim"]
handler.tags = ["fun"]
handler.description = "Kirim pesan anonim ke seseorang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "confess", "alias": ["confession", "menfess", "anonim"], "category": "fun", "description": "Kirim pesan anonim ke seseorang", "usage": ".confess nomor|pesan", "example": ".confess 6281234567890|Hai, aku suka kamu!", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-confess": "confess", "rimuru-confess": "confess", "rimuru-confession": "confession", "rimuru-menfess": "menfess", "rimuru-anonim": "anonim", "confess": "confess", "confession": "confession", "menfess": "menfess", "anonim": "anonim"}
export default handler
