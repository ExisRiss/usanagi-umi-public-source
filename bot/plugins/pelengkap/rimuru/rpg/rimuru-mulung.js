/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/mulung.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mulung", "category": "rpg", "aliasMap": {"rimuru-rpg-mulung": "mulung", "rimuru-mulung": "mulung", "rimuru-scavenge": "scavenge", "rimuru-kumpulsampah": "kumpulsampah"}, "description": "Memulung untuk mengumpulkan barang", "usage": ".mulung", "example": ".mulung", "cooldown": 300, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/mulung.js", metadata, m, extra)
handler.help = ["rimuru-rpg-mulung"]
handler.command = ["rimuru-rpg-mulung", "rimuru-mulung", "rimuru-scavenge", "rimuru-kumpulsampah"]
handler.tags = ["rpg"]
handler.description = "Memulung untuk mengumpulkan barang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mulung", "alias": ["scavenge", "kumpulsampah"], "category": "rpg", "description": "Memulung untuk mengumpulkan barang", "usage": ".mulung", "example": ".mulung", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 300, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-mulung": "mulung", "rimuru-mulung": "mulung", "rimuru-scavenge": "scavenge", "rimuru-kumpulsampah": "kumpulsampah"}
export default handler
