/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/removewm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "removewm", "category": "tools", "aliasMap": {"rimuru-tools-removewm": "removewm", "rimuru-removewm": "removewm", "rimuru-ezremove": "ezremove", "rimuru-nobgwm": "nobgwm", "rimuru-delwm": "delwm", "rimuru-unwatermark": "unwatermark", "removewm": "removewm", "ezremove": "ezremove", "nobgwm": "nobgwm", "delwm": "delwm", "unwatermark": "unwatermark"}, "description": "Menghapus watermark dari gambar (foto biasa maupun dokumen)", "usage": ".removewm (kirim/reply gambar)", "example": ".removewm (reply gambar berwatermark)", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/removewm.js", metadata, m, extra)
handler.help = ["rimuru-tools-removewm (kirim/reply gambar)"]
handler.command = ["rimuru-tools-removewm", "rimuru-removewm", "rimuru-ezremove", "rimuru-nobgwm", "rimuru-delwm", "rimuru-unwatermark", "removewm", "ezremove", "nobgwm", "delwm", "unwatermark"]
handler.tags = ["tools"]
handler.description = "Menghapus watermark dari gambar (foto biasa maupun dokumen)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "removewm", "alias": ["ezremove", "nobgwm", "delwm", "unwatermark"], "category": "tools", "description": "Menghapus watermark dari gambar (foto biasa maupun dokumen)", "usage": ".removewm (kirim/reply gambar)", "example": ".removewm (reply gambar berwatermark)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-removewm": "removewm", "rimuru-removewm": "removewm", "rimuru-ezremove": "ezremove", "rimuru-nobgwm": "nobgwm", "rimuru-delwm": "delwm", "rimuru-unwatermark": "unwatermark", "removewm": "removewm", "ezremove": "ezremove", "nobgwm": "nobgwm", "delwm": "delwm", "unwatermark": "unwatermark"}
export default handler
