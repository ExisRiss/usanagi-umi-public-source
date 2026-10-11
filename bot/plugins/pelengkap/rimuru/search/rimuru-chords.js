/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/chords.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "chords", "category": "search", "aliasMap": {"rimuru-search-chords": "chords", "rimuru-chords": "chords", "rimuru-chord": "chord", "rimuru-kunci": "kunci", "rimuru-kuncigitar": "kuncigitar", "chords": "chords", "chord": "chord", "kunci": "kunci", "kuncigitar": "kuncigitar"}, "description": "Cari chord/kunci gitar lagu", "usage": ".chords <judul lagu>", "example": ".chords komang", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/chords.js", metadata, m, extra)
handler.help = ["rimuru-search-chords <judul lagu>"]
handler.command = ["rimuru-search-chords", "rimuru-chords", "rimuru-chord", "rimuru-kunci", "rimuru-kuncigitar", "chords", "chord", "kunci", "kuncigitar"]
handler.tags = ["search"]
handler.description = "Cari chord/kunci gitar lagu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "chords", "alias": ["chord", "kunci", "kuncigitar"], "category": "search", "description": "Cari chord/kunci gitar lagu", "usage": ".chords <judul lagu>", "example": ".chords komang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-chords": "chords", "rimuru-chords": "chords", "rimuru-chord": "chord", "rimuru-kunci": "kunci", "rimuru-kuncigitar": "kuncigitar", "chords": "chords", "chord": "chord", "kunci": "kunci", "kuncigitar": "kuncigitar"}
export default handler
