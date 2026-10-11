/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/talkingphoto.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "talkingphoto", "category": "ai", "aliasMap": {"rimuru-ai-talkingphoto": "talkingphoto", "rimuru-talkingphoto": "talkingphoto", "rimuru-talkphoto": "talkphoto", "talkingphoto": "talkingphoto", "talkphoto": "talkphoto"}, "description": "Mengubah foto menjadi talking photo/video", "usage": ".talkingphoto <teks> | woman1|woman2|man1|man2 (reply gambar)", "example": ".talkingphoto aku adalah asisten AI | woman1", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/talkingphoto.js", metadata, m, extra)
handler.help = ["rimuru-ai-talkingphoto <teks> | woman1|woman2|man1|man2 (reply gambar)"]
handler.command = ["rimuru-ai-talkingphoto", "rimuru-talkingphoto", "rimuru-talkphoto", "talkingphoto", "talkphoto"]
handler.tags = ["ai"]
handler.description = "Mengubah foto menjadi talking photo/video"
handler.importSource = "rimuru"
handler.importConfig = {"name": "talkingphoto", "alias": ["talkphoto"], "category": "ai", "description": "Mengubah foto menjadi talking photo/video", "usage": ".talkingphoto <teks> | woman1|woman2|man1|man2 (reply gambar)", "example": ".talkingphoto aku adalah asisten AI | woman1", "isPremium": true, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-talkingphoto": "talkingphoto", "rimuru-talkingphoto": "talkingphoto", "rimuru-talkphoto": "talkphoto", "talkingphoto": "talkingphoto", "talkphoto": "talkphoto"}
export default handler
