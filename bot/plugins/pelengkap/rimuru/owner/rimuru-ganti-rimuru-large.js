/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/ganti-rimuru-large.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rimuru-large", "category": "owner", "aliasMap": {"rimuru-owner-rimuru-large": "rimuru-large", "rimuru-rimuru-large": "rimuru-large", "rimuru-setrimurularge": "setrimurularge", "rimuru-gantirimurularge": "gantirimurularge", "rimuru-large": "large", "setrimurularge": "setrimurularge", "gantirimurularge": "gantirimurularge"}, "description": "Preset: Ganti gambar rimuru.jpg, serta rimuru-v7 hingga rimuru-v11.jpg sekaligus", "usage": ".rimuru-large (reply/kirim gambar)", "example": ".rimuru-large", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/ganti-rimuru-large.js", metadata, m, extra)
handler.help = ["rimuru-owner-rimuru-large (reply/kirim gambar)"]
handler.command = ["rimuru-owner-rimuru-large", "rimuru-rimuru-large", "rimuru-setrimurularge", "rimuru-gantirimurularge", "rimuru-large", "setrimurularge", "gantirimurularge"]
handler.tags = ["owner"]
handler.description = "Preset: Ganti gambar rimuru.jpg, serta rimuru-v7 hingga rimuru-v11.jpg sekaligus"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rimuru-large", "alias": ["setrimurularge", "gantirimurularge"], "category": "owner", "description": "Preset: Ganti gambar rimuru.jpg, serta rimuru-v7 hingga rimuru-v11.jpg sekaligus", "usage": ".rimuru-large (reply/kirim gambar)", "example": ".rimuru-large", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-rimuru-large": "rimuru-large", "rimuru-rimuru-large": "rimuru-large", "rimuru-setrimurularge": "setrimurularge", "rimuru-gantirimurularge": "gantirimurularge", "rimuru-large": "large", "setrimurularge": "setrimurularge", "gantirimurularge": "gantirimurularge"}
export default handler
