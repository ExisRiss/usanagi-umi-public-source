/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/zikir.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "zikir", "category": "religi", "aliasMap": {"rimuru-religi-zikir": "zikir", "rimuru-zikir": "zikir", "rimuru-dzikir": "dzikir", "rimuru-wirid": "wirid", "rimuru-zikirpagi": "zikirpagi", "rimuru-zikirpetang": "zikirpetang", "zikir": "zikir", "dzikir": "dzikir", "wirid": "wirid", "zikirpagi": "zikirpagi", "zikirpetang": "zikirpetang"}, "description": "Kumpulan Zikir Harian (Pagi, Petang, Setelah Sholat, dan Lainnya)", "usage": ".zikir <pagi/petang/sholat>", "example": ".zikir pagi", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/zikir.js", metadata, m, extra)
handler.help = ["rimuru-religi-zikir <pagi/petang/sholat>"]
handler.command = ["rimuru-religi-zikir", "rimuru-zikir", "rimuru-dzikir", "rimuru-wirid", "rimuru-zikirpagi", "rimuru-zikirpetang", "zikir", "dzikir", "wirid", "zikirpagi", "zikirpetang"]
handler.tags = ["religi"]
handler.description = "Kumpulan Zikir Harian (Pagi, Petang, Setelah Sholat, dan Lainnya)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "zikir", "alias": ["dzikir", "wirid", "zikirpagi", "zikirpetang"], "category": "religi", "description": "Kumpulan Zikir Harian (Pagi, Petang, Setelah Sholat, dan Lainnya)", "usage": ".zikir <pagi/petang/sholat>", "example": ".zikir pagi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-zikir": "zikir", "rimuru-zikir": "zikir", "rimuru-dzikir": "dzikir", "rimuru-wirid": "wirid", "rimuru-zikirpagi": "zikirpagi", "rimuru-zikirpetang": "zikirpetang", "zikir": "zikir", "dzikir": "dzikir", "wirid": "wirid", "zikirpagi": "zikirpagi", "zikirpetang": "zikirpetang"}
export default handler
