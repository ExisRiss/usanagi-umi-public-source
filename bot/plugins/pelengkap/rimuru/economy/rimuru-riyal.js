/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/riyal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "riyal", "category": "economy", "aliasMap": {"rimuru-economy-riyal": "riyal", "rimuru-riyal": "riyal", "rimuru-sar": "sar", "rimuru-kursriyal": "kursriyal", "rimuru-arab": "arab", "rimuru-konversiriyal": "konversiriyal", "rimuru-saudi": "saudi", "riyal": "riyal", "sar": "sar", "kursriyal": "kursriyal", "arab": "arab", "konversiriyal": "konversiriyal", "saudi": "saudi"}, "description": "Konversi mata uang Rupiah ke Riyal Arab Saudi / sebaliknya", "usage": ".riyal <nominal> <idr/sar>", "example": ".riyal 100000 idr\n.riyal 500 sar", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/riyal.js", metadata, m, extra)
handler.help = ["rimuru-economy-riyal <nominal> <idr/sar>"]
handler.command = ["rimuru-economy-riyal", "rimuru-riyal", "rimuru-sar", "rimuru-kursriyal", "rimuru-arab", "rimuru-konversiriyal", "rimuru-saudi", "riyal", "sar", "kursriyal", "arab", "konversiriyal", "saudi"]
handler.tags = ["economy"]
handler.description = "Konversi mata uang Rupiah ke Riyal Arab Saudi / sebaliknya"
handler.importSource = "rimuru"
handler.importConfig = {"name": "riyal", "alias": ["sar", "kursriyal", "arab", "konversiriyal", "saudi"], "category": "economy", "description": "Konversi mata uang Rupiah ke Riyal Arab Saudi / sebaliknya", "usage": ".riyal <nominal> <idr/sar>", "example": ".riyal 100000 idr\n.riyal 500 sar", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-economy-riyal": "riyal", "rimuru-riyal": "riyal", "rimuru-sar": "sar", "rimuru-kursriyal": "kursriyal", "rimuru-arab": "arab", "rimuru-konversiriyal": "konversiriyal", "rimuru-saudi": "saudi", "riyal": "riyal", "sar": "sar", "kursriyal": "kursriyal", "arab": "arab", "konversiriyal": "konversiriyal", "saudi": "saudi"}
export default handler
