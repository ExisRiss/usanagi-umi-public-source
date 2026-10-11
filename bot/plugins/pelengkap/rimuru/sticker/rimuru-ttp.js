/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/ttp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ttp", "category": "maker", "aliasMap": {"rimuru-maker-ttp": "ttp", "rimuru-ttp": "ttp", "rimuru-texttopicture": "texttopicture", "ttp": "ttp", "texttopicture": "texttopicture"}, "description": "Membuat stiker keren dari teks", "usage": ".ttp <teks>", "example": ".ttp Hai Cantik", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/ttp.js", metadata, m, extra)
handler.help = ["rimuru-maker-ttp <teks>"]
handler.command = ["rimuru-maker-ttp", "rimuru-ttp", "rimuru-texttopicture", "ttp", "texttopicture"]
handler.tags = ["maker"]
handler.description = "Membuat stiker keren dari teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ttp", "alias": ["texttopicture"], "category": "maker", "description": "Membuat stiker keren dari teks", "usage": ".ttp <teks>", "example": ".ttp Hai Cantik", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-ttp": "ttp", "rimuru-ttp": "ttp", "rimuru-texttopicture": "texttopicture", "ttp": "ttp", "texttopicture": "texttopicture"}
export default handler
