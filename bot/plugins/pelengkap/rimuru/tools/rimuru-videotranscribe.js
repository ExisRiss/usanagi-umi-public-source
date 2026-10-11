/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/videotranscribe.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "videotranscribe", "category": "tools", "aliasMap": {"rimuru-tools-videotranscribe": "videotranscribe", "rimuru-videotranscribe": "videotranscribe", "rimuru-video-transcribe": "video-transcribe", "rimuru-transkripvideo": "transkripvideo", "videotranscribe": "videotranscribe", "video-transcribe": "video-transcribe", "transkripvideo": "transkripvideo"}, "description": "Transkrip video dari URL menjadi teks (YouTube, mp4, dll)", "usage": ".video-transcribe <url> [lang]", "example": ".video-transcribe https://youtu.be/dQw4w9WgXcQ\n.video-transcribe https://youtu.be/dQw4w9WgXcQ id", "cooldown": 30, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/videotranscribe.js", metadata, m, extra)
handler.help = ["rimuru-tools-videotranscribe <url> [lang]"]
handler.command = ["rimuru-tools-videotranscribe", "rimuru-videotranscribe", "rimuru-video-transcribe", "rimuru-transkripvideo", "videotranscribe", "video-transcribe", "transkripvideo"]
handler.tags = ["tools"]
handler.description = "Transkrip video dari URL menjadi teks (YouTube, mp4, dll)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "videotranscribe", "alias": ["video-transcribe", "transkripvideo"], "category": "tools", "description": "Transkrip video dari URL menjadi teks (YouTube, mp4, dll)", "usage": ".video-transcribe <url> [lang]", "example": ".video-transcribe https://youtu.be/dQw4w9WgXcQ\n.video-transcribe https://youtu.be/dQw4w9WgXcQ id", "cooldown": 30, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-videotranscribe": "videotranscribe", "rimuru-videotranscribe": "videotranscribe", "rimuru-video-transcribe": "video-transcribe", "rimuru-transkripvideo": "transkripvideo", "videotranscribe": "videotranscribe", "video-transcribe": "video-transcribe", "transkripvideo": "transkripvideo"}
export default handler
