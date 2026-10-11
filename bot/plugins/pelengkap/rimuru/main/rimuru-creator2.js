/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/creator2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "creator2", "category": "main", "aliasMap": {"rimuru-main-creator2": "creator2", "rimuru-creator2": "creator2", "rimuru-owner2": "owner2", "creator2": "creator2", "owner2": "owner2"}, "description": "Varian kontak owner dari Tensura.", "usage": ".creator2", "example": ".creator2", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/creator2.js", metadata, m, extra)
handler.help = ["rimuru-main-creator2"]
handler.command = ["rimuru-main-creator2", "rimuru-creator2", "rimuru-owner2", "creator2", "owner2"]
handler.tags = ["main"]
handler.description = "Varian kontak owner dari Tensura."
handler.importSource = "rimuru"
handler.importConfig = {"name": "creator2", "alias": ["owner2"], "category": "main", "description": "Varian kontak owner dari Tensura.", "usage": ".creator2", "example": ".creator2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-creator2": "creator2", "rimuru-creator2": "creator2", "rimuru-owner2": "owner2", "creator2": "creator2", "owner2": "owner2"}
export default handler
