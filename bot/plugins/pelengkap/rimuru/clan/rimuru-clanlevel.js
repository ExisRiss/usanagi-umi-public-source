/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanlevel.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanlevel", "category": "clan", "aliasMap": {"rimuru-clan-clanlevel": "clanlevel", "rimuru-clanlevel": "clanlevel", "rimuru-levelclan": "levelclan", "rimuru-clanlvl": "clanlvl", "clanlevel": "clanlevel", "levelclan": "levelclan", "clanlvl": "clanlvl"}, "description": "Lihat level clan", "usage": ".clanlevel", "example": ".clanlevel", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanlevel.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanlevel"]
handler.command = ["rimuru-clan-clanlevel", "rimuru-clanlevel", "rimuru-levelclan", "rimuru-clanlvl", "clanlevel", "levelclan", "clanlvl"]
handler.tags = ["clan"]
handler.description = "Lihat level clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanlevel", "alias": ["levelclan", "clanlvl"], "category": "clan", "description": "Lihat level clan", "usage": ".clanlevel", "example": ".clanlevel", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanlevel": "clanlevel", "rimuru-clanlevel": "clanlevel", "rimuru-levelclan": "levelclan", "rimuru-clanlvl": "clanlvl", "clanlevel": "clanlevel", "levelclan": "levelclan", "clanlvl": "clanlvl"}
export default handler
