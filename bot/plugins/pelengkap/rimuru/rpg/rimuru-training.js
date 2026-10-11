/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/training.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "training", "category": "rpg", "aliasMap": {"rimuru-rpg-training": "training", "rimuru-training": "training", "rimuru-train": "train", "rimuru-latihan": "latihan", "rimuru-workout": "workout"}, "description": "Latihan untuk meningkatkan stats", "usage": ".training <attack/defense/health>", "example": ".training attack", "cooldown": 180, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/training.js", metadata, m, extra)
handler.help = ["rimuru-rpg-training <attack/defense/health>"]
handler.command = ["rimuru-rpg-training", "rimuru-training", "rimuru-train", "rimuru-latihan", "rimuru-workout"]
handler.tags = ["rpg"]
handler.description = "Latihan untuk meningkatkan stats"
handler.importSource = "rimuru"
handler.importConfig = {"name": "training", "alias": ["train", "latihan", "workout"], "category": "rpg", "description": "Latihan untuk meningkatkan stats", "usage": ".training <attack/defense/health>", "example": ".training attack", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-training": "training", "rimuru-training": "training", "rimuru-train": "train", "rimuru-latihan": "latihan", "rimuru-workout": "workout"}
export default handler
