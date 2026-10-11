/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/nisfusyaban.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nisfusyaban", "category": "religi", "aliasMap": {"rimuru-religi-nisfusyaban": "nisfusyaban", "rimuru-nisfusyaban": "nisfusyaban", "rimuru-nisfu": "nisfu", "rimuru-malamnisfu": "malamnisfu", "rimuru-syaban": "syaban", "nisfusyaban": "nisfusyaban", "nisfu": "nisfu", "malamnisfu": "malamnisfu", "syaban": "syaban"}, "description": "Informasi lengkap tentang Malam Nisfu Syaban (doa, amalan, keutamaan)", "usage": ".nisfusyaban", "example": ".nisfusyaban", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/nisfusyaban.js", metadata, m, extra)
handler.help = ["rimuru-religi-nisfusyaban"]
handler.command = ["rimuru-religi-nisfusyaban", "rimuru-nisfusyaban", "rimuru-nisfu", "rimuru-malamnisfu", "rimuru-syaban", "nisfusyaban", "nisfu", "malamnisfu", "syaban"]
handler.tags = ["religi"]
handler.description = "Informasi lengkap tentang Malam Nisfu Syaban (doa, amalan, keutamaan)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nisfusyaban", "alias": ["nisfu", "malamnisfu", "syaban"], "category": "religi", "description": "Informasi lengkap tentang Malam Nisfu Syaban (doa, amalan, keutamaan)", "usage": ".nisfusyaban", "example": ".nisfusyaban", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-nisfusyaban": "nisfusyaban", "rimuru-nisfusyaban": "nisfusyaban", "rimuru-nisfu": "nisfu", "rimuru-malamnisfu": "malamnisfu", "rimuru-syaban": "syaban", "nisfusyaban": "nisfusyaban", "nisfu": "nisfu", "malamnisfu": "malamnisfu", "syaban": "syaban"}
export default handler
