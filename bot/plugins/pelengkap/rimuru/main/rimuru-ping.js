/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/ping.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ping", "category": "main", "aliasMap": {"rimuru-main-ping": "ping", "rimuru-ping": "ping", "rimuru-speed": "speed", "rimuru-p": "p", "rimuru-latency": "latency", "rimuru-sys": "sys", "speed": "speed", "p": "p", "latency": "latency", "sys": "sys", "status": "status"}, "description": "Cek performa dan status sistem bot secara real-time (Canvas Epic)", "usage": ".ping", "example": ".ping", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/ping.js", metadata, m, extra)
handler.help = ["rimuru-main-ping"]
handler.command = ["rimuru-main-ping", "rimuru-ping", "rimuru-speed", "rimuru-p", "rimuru-latency", "rimuru-sys", "speed", "p", "latency", "sys", "status"]
handler.tags = ["main"]
handler.description = "Cek performa dan status sistem bot secara real-time (Canvas Epic)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ping", "alias": ["speed", "p", "latency", "sys", "status"], "category": "main", "description": "Cek performa dan status sistem bot secara real-time (Canvas Epic)", "usage": ".ping", "example": ".ping", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-ping": "ping", "rimuru-ping": "ping", "rimuru-speed": "speed", "rimuru-p": "p", "rimuru-latency": "latency", "rimuru-sys": "sys", "speed": "speed", "p": "p", "latency": "latency", "sys": "sys", "status": "status"}
export default handler
