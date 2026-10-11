/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/enableplugin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "enableplugin", "category": "owner", "aliasMap": {"rimuru-owner-enableplugin": "enableplugin", "rimuru-enableplugin": "enableplugin", "rimuru-eplugin": "eplugin", "rimuru-pluginenable": "pluginenable", "rimuru-onplugin": "onplugin", "enableplugin": "enableplugin", "eplugin": "eplugin", "pluginenable": "pluginenable", "onplugin": "onplugin"}, "description": "Mengaktifkan kembali plugin yang dinonaktifkan", "usage": ".enableplugin <nama_plugin>", "example": ".enableplugin sticker", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/enableplugin.js", metadata, m, extra)
handler.help = ["rimuru-owner-enableplugin <nama_plugin>"]
handler.command = ["rimuru-owner-enableplugin", "rimuru-enableplugin", "rimuru-eplugin", "rimuru-pluginenable", "rimuru-onplugin", "enableplugin", "eplugin", "pluginenable", "onplugin"]
handler.tags = ["owner"]
handler.description = "Mengaktifkan kembali plugin yang dinonaktifkan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "enableplugin", "alias": ["eplugin", "pluginenable", "onplugin"], "category": "owner", "description": "Mengaktifkan kembali plugin yang dinonaktifkan", "usage": ".enableplugin <nama_plugin>", "example": ".enableplugin sticker", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-enableplugin": "enableplugin", "rimuru-enableplugin": "enableplugin", "rimuru-eplugin": "eplugin", "rimuru-pluginenable": "pluginenable", "rimuru-onplugin": "onplugin", "enableplugin": "enableplugin", "eplugin": "eplugin", "pluginenable": "pluginenable", "onplugin": "onplugin"}
export default handler
