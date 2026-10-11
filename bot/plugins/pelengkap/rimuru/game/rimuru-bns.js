/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/bns.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "benaratausalah", "category": "game", "aliasMap": {"rimuru-game-benaratausalah": "benaratausalah", "rimuru-benaratausalah": "benaratausalah", "rimuru-bata": "bata", "rimuru-benarsalah": "benarsalah", "rimuru-bors": "bors", "benaratausalah": "benaratausalah", "bata": "bata", "benarsalah": "benarsalah", "bors": "bors"}, "description": "Game benar atau salah — jawab pertanyaan dengan 'benar' / 'salah'", "usage": ".benaratausalah", "example": ".benaratausalah", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/bns.js", metadata, m, extra)
handler.help = ["rimuru-game-benaratausalah"]
handler.command = ["rimuru-game-benaratausalah", "rimuru-benaratausalah", "rimuru-bata", "rimuru-benarsalah", "rimuru-bors", "benaratausalah", "bata", "benarsalah", "bors"]
handler.tags = ["game"]
handler.description = "Game benar atau salah — jawab pertanyaan dengan 'benar' / 'salah'"
handler.importSource = "rimuru"
handler.importConfig = {"name": "benaratausalah", "alias": ["bata", "benarsalah", "bors"], "category": "game", "description": "Game benar atau salah — jawab pertanyaan dengan 'benar' / 'salah'", "usage": ".benaratausalah", "example": ".benaratausalah", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-benaratausalah": "benaratausalah", "rimuru-benaratausalah": "benaratausalah", "rimuru-bata": "bata", "rimuru-benarsalah": "benarsalah", "rimuru-bors": "bors", "benaratausalah": "benaratausalah", "bata": "bata", "benarsalah": "benarsalah", "bors": "bors"}
export default handler
