/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/angry_birds.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "angrybirds", "category": "game", "aliasMap": {"rimuru-game-angrybirds": "angrybirds", "rimuru-angrybirds": "angrybirds", "rimuru-angrybird": "angrybird", "rimuru-abirds": "abirds", "angrybirds": "angrybirds", "angrybird": "angrybird", "abirds": "abirds"}, "description": "Angry Birds mini - tembak burung ke target!", "usage": "", "example": ".angrybird", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/angry_birds.js", metadata, m, extra)
handler.help = ["rimuru-game-angrybirds"]
handler.command = ["rimuru-game-angrybirds", "rimuru-angrybirds", "rimuru-angrybird", "rimuru-abirds", "angrybirds", "angrybird", "abirds"]
handler.tags = ["game"]
handler.description = "Angry Birds mini - tembak burung ke target!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "angrybirds", "alias": ["angrybird", "abirds"], "category": "game", "description": "Angry Birds mini - tembak burung ke target!", "usage": "", "example": ".angrybird", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-angrybirds": "angrybirds", "rimuru-angrybirds": "angrybirds", "rimuru-angrybird": "angrybird", "rimuru-abirds": "abirds", "angrybirds": "angrybirds", "angrybird": "angrybird", "abirds": "abirds"}
export default handler
