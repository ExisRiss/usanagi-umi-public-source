/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/downloads/gimage.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gimage", "category": "downloads", "aliasMap": {"rimuru-downloads-gimage": "gimage", "rimuru-gimage": "gimage", "rimuru-googleimage": "googleimage", "rimuru-image": "image", "gimage": "gimage", "googleimage": "googleimage", "image": "image"}, "description": "Mencari dan mendownload gambar dari Google", "usage": ".gimage [nama gambar]", "example": ".gimage pemandangan aesthetic", "cooldown": 5, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/downloads/gimage.js", metadata, m, extra)
handler.help = ["rimuru-downloads-gimage [nama gambar]"]
handler.command = ["rimuru-downloads-gimage", "rimuru-gimage", "rimuru-googleimage", "rimuru-image", "gimage", "googleimage", "image"]
handler.tags = ["downloads"]
handler.description = "Mencari dan mendownload gambar dari Google"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gimage", "alias": ["googleimage", "image"], "category": "downloads", "description": "Mencari dan mendownload gambar dari Google", "usage": ".gimage [nama gambar]", "example": ".gimage pemandangan aesthetic", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-downloads-gimage": "gimage", "rimuru-gimage": "gimage", "rimuru-googleimage": "googleimage", "rimuru-image": "image", "gimage": "gimage", "googleimage": "googleimage", "image": "image"}
export default handler
