/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/yen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "yen", "category": "economy", "aliasMap": {"rimuru-economy-yen": "yen", "rimuru-yen": "yen", "rimuru-jpy": "jpy", "rimuru-kursyen": "kursyen", "rimuru-jepang": "jepang", "rimuru-konversiyen": "konversiyen", "yen": "yen", "jpy": "jpy", "kursyen": "kursyen", "jepang": "jepang", "konversiyen": "konversiyen"}, "description": "Konversi mata uang Rupiah ke Yen Jepang / sebaliknya", "usage": ".yen <nominal> <idr/jpy>", "example": ".yen 100000 idr\n.yen 5000 jpy", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/yen.js", metadata, m, extra)
handler.help = ["rimuru-economy-yen <nominal> <idr/jpy>"]
handler.command = ["rimuru-economy-yen", "rimuru-yen", "rimuru-jpy", "rimuru-kursyen", "rimuru-jepang", "rimuru-konversiyen", "yen", "jpy", "kursyen", "jepang", "konversiyen"]
handler.tags = ["economy"]
handler.description = "Konversi mata uang Rupiah ke Yen Jepang / sebaliknya"
handler.importSource = "rimuru"
handler.importConfig = {"name": "yen", "alias": ["jpy", "kursyen", "jepang", "konversiyen"], "category": "economy", "description": "Konversi mata uang Rupiah ke Yen Jepang / sebaliknya", "usage": ".yen <nominal> <idr/jpy>", "example": ".yen 100000 idr\n.yen 5000 jpy", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-economy-yen": "yen", "rimuru-yen": "yen", "rimuru-jpy": "jpy", "rimuru-kursyen": "kursyen", "rimuru-jepang": "jepang", "rimuru-konversiyen": "konversiyen", "yen": "yen", "jpy": "jpy", "kursyen": "kursyen", "jepang": "jepang", "konversiyen": "konversiyen"}
export default handler
