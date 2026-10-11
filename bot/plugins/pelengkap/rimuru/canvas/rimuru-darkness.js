/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/darkness.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "darkness", "category": "canvas", "aliasMap": {"rimuru-canvas-darkness": "darkness", "rimuru-darkness": "darkness", "rimuru-drakness": "drakness", "darkness": "darkness", "drakness": "drakness"}, "description": "Beri efek gelap pada gambar", "usage": ".darkness [amount]", "example": ".darkness 100 (sambil reply gambar)", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/darkness.js", metadata, m, extra)
handler.help = ["rimuru-canvas-darkness [amount]"]
handler.command = ["rimuru-canvas-darkness", "rimuru-darkness", "rimuru-drakness", "darkness", "drakness"]
handler.tags = ["canvas"]
handler.description = "Beri efek gelap pada gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "darkness", "alias": ["darkness", "drakness"], "category": "canvas", "description": "Beri efek gelap pada gambar", "usage": ".darkness [amount]", "example": ".darkness 100 (sambil reply gambar)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-darkness": "darkness", "rimuru-darkness": "darkness", "rimuru-drakness": "drakness", "darkness": "darkness", "drakness": "drakness"}
export default handler
