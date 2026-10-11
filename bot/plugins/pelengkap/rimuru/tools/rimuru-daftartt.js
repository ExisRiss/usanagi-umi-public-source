/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/daftartt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "daftartiktok", "category": "stalker", "aliasMap": {"rimuru-stalker-daftartiktok": "daftartiktok", "rimuru-daftartiktok": "daftartiktok", "rimuru-daftartt": "daftartt", "rimuru-regtt": "regtt", "daftartiktok": "daftartiktok", "daftartt": "daftartt", "regtt": "regtt"}, "description": "Mendaftarkan username TikTok ke database user", "usage": ".daftartt <username>", "example": ".daftartt faizprst7", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/daftartt.js", metadata, m, extra)
handler.help = ["rimuru-stalker-daftartiktok <username>"]
handler.command = ["rimuru-stalker-daftartiktok", "rimuru-daftartiktok", "rimuru-daftartt", "rimuru-regtt", "daftartiktok", "daftartt", "regtt"]
handler.tags = ["stalker"]
handler.description = "Mendaftarkan username TikTok ke database user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "daftartiktok", "alias": ["daftartt", "regtt"], "category": "stalker", "description": "Mendaftarkan username TikTok ke database user", "usage": ".daftartt <username>", "example": ".daftartt faizprst7", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-daftartiktok": "daftartiktok", "rimuru-daftartiktok": "daftartiktok", "rimuru-daftartt": "daftartt", "rimuru-regtt": "regtt", "daftartiktok": "daftartiktok", "daftartt": "daftartt", "regtt": "regtt"}
export default handler
