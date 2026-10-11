/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/tiktokchat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tiktokchat", "category": "canvas", "aliasMap": {"rimuru-canvas-tiktokchat": "tiktokchat", "rimuru-tiktokchat": "tiktokchat", "rimuru-tiktok-chat": "tiktok-chat", "rimuru-ttchat": "ttchat", "tiktokchat": "tiktokchat", "tiktok-chat": "tiktok-chat", "ttchat": "ttchat"}, "description": "Membuat fake chat TikTok dari avatar kamu", "usage": ".tiktokchat username | pesan (reply gambar)", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/tiktokchat.js", metadata, m, extra)
handler.help = ["rimuru-canvas-tiktokchat username | pesan (reply gambar)"]
handler.command = ["rimuru-canvas-tiktokchat", "rimuru-tiktokchat", "rimuru-tiktok-chat", "rimuru-ttchat", "tiktokchat", "tiktok-chat", "ttchat"]
handler.tags = ["canvas"]
handler.description = "Membuat fake chat TikTok dari avatar kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tiktokchat", "alias": ["tiktok-chat", "ttchat"], "category": "canvas", "description": "Membuat fake chat TikTok dari avatar kamu", "usage": ".tiktokchat username | pesan (reply gambar)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-tiktokchat": "tiktokchat", "rimuru-tiktokchat": "tiktokchat", "rimuru-tiktok-chat": "tiktok-chat", "rimuru-ttchat": "ttchat", "tiktokchat": "tiktokchat", "tiktok-chat": "tiktok-chat", "ttchat": "ttchat"}
export default handler
