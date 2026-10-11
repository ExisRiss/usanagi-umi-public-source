/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/img2vid.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "img2vid", "category": "ai", "aliasMap": {"rimuru-ai-img2vid": "img2vid", "rimuru-img2vid": "img2vid", "rimuru-image2video": "image2video", "rimuru-animateimg": "animateimg", "rimuru-animatephoto": "animatephoto", "image2video": "image2video", "animateimg": "animateimg", "animatephoto": "animatephoto"}, "description": "Ubah gambar jadi video dengan AI", "usage": ".img2vid <prompt> (reply gambar)", "example": ".img2vid Animate my photo", "cooldown": 60, "energi": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/img2vid.js", metadata, m, extra)
handler.help = ["rimuru-ai-img2vid <prompt> (reply gambar)"]
handler.command = ["rimuru-ai-img2vid", "rimuru-img2vid", "rimuru-image2video", "rimuru-animateimg", "rimuru-animatephoto", "image2video", "animateimg", "animatephoto"]
handler.tags = ["ai"]
handler.description = "Ubah gambar jadi video dengan AI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "img2vid", "alias": ["image2video", "animateimg", "animatephoto"], "category": "ai", "description": "Ubah gambar jadi video dengan AI", "usage": ".img2vid <prompt> (reply gambar)", "example": ".img2vid Animate my photo", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-img2vid": "img2vid", "rimuru-img2vid": "img2vid", "rimuru-image2video": "image2video", "rimuru-animateimg": "animateimg", "rimuru-animatephoto": "animatephoto", "image2video": "image2video", "animateimg": "animateimg", "animatephoto": "animatephoto"}
export default handler
