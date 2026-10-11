/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/slot2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "slot2", "category": "game", "aliasMap": {"rimuru-game-slot2": "slot2", "rimuru-slot2": "slot2", "rimuru-slots2": "slots2", "rimuru-mesin2": "mesin2", "rimuru-mesinslot2": "mesinslot2", "slots2": "slots2", "mesin2": "mesin2", "mesinslot2": "mesinslot2"}, "description": "Inline Fruit Bonanza slot game", "usage": ".slot2", "example": ".slot2", "cooldown": 1, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/slot2.js", metadata, m, extra)
handler.help = ["rimuru-game-slot2"]
handler.command = ["rimuru-game-slot2", "rimuru-slot2", "rimuru-slots2", "rimuru-mesin2", "rimuru-mesinslot2", "slots2", "mesin2", "mesinslot2"]
handler.tags = ["game"]
handler.description = "Inline Fruit Bonanza slot game"
handler.importSource = "rimuru"
handler.importConfig = {"name": "slot2", "alias": ["slots2", "mesin2", "mesinslot2"], "category": "game", "description": "Inline Fruit Bonanza slot game", "usage": ".slot2", "example": ".slot2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 1, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-slot2": "slot2", "rimuru-slot2": "slot2", "rimuru-slots2": "slots2", "rimuru-mesin2": "mesin2", "rimuru-mesinslot2": "mesinslot2", "slots2": "slots2", "mesin2": "mesin2", "mesinslot2": "mesinslot2"}
export default handler
