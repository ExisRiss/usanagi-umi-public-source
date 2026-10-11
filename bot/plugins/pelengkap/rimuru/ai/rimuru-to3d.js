/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/to3d.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "to3d", "category": "ai", "aliasMap": {"rimuru-ai-to3d": "to3d", "rimuru-to3d": "to3d", "rimuru-3d": "3d", "rimuru-3dfy": "3dfy", "rimuru-to3dmodel": "to3dmodel", "to3d": "to3d", "3d": "3d", "3dfy": "3dfy", "to3dmodel": "to3dmodel"}, "description": "Ubah foto menjadi gaya 3D render", "usage": ".to3d (reply/kirim gambar)", "example": ".to3d", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/to3d.js", metadata, m, extra)
handler.help = ["rimuru-ai-to3d (reply/kirim gambar)"]
handler.command = ["rimuru-ai-to3d", "rimuru-to3d", "rimuru-3d", "rimuru-3dfy", "rimuru-to3dmodel", "to3d", "3d", "3dfy", "to3dmodel"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi gaya 3D render"
handler.importSource = "rimuru"
handler.importConfig = {"name": "to3d", "alias": ["3d", "3dfy", "to3dmodel"], "category": "ai", "description": "Ubah foto menjadi gaya 3D render", "usage": ".to3d (reply/kirim gambar)", "example": ".to3d", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-to3d": "to3d", "rimuru-to3d": "to3d", "rimuru-3d": "3d", "rimuru-3dfy": "3dfy", "rimuru-to3dmodel": "to3dmodel", "to3d": "to3d", "3d": "3d", "3dfy": "3dfy", "to3dmodel": "to3dmodel"}
export default handler
