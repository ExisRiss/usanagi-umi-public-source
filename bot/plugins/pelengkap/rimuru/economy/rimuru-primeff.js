/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/economy/primeff.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "primeff", "category": "economy", "aliasMap": {"rimuru-economy-primeff": "primeff", "rimuru-primeff": "primeff", "rimuru-prime": "prime", "rimuru-kalkulatorprime": "kalkulatorprime", "rimuru-primefreefire": "primefreefire", "rimuru-ffprime": "ffprime", "primeff": "primeff", "prime": "prime", "kalkulatorprime": "kalkulatorprime", "primefreefire": "primefreefire", "ffprime": "ffprime"}, "description": "Kalkulator Prime Free Fire untuk menghitung estimasi diamond dan harga rupiah", "usage": ".primeff <jumlah poin>", "example": ".primeff 12900", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/economy/primeff.js", metadata, m, extra)
handler.help = ["rimuru-economy-primeff <jumlah poin>"]
handler.command = ["rimuru-economy-primeff", "rimuru-primeff", "rimuru-prime", "rimuru-kalkulatorprime", "rimuru-primefreefire", "rimuru-ffprime", "primeff", "prime", "kalkulatorprime", "primefreefire", "ffprime"]
handler.tags = ["economy"]
handler.description = "Kalkulator Prime Free Fire untuk menghitung estimasi diamond dan harga rupiah"
handler.importSource = "rimuru"
handler.importConfig = {"name": "primeff", "alias": ["prime", "kalkulatorprime", "primefreefire", "ffprime"], "category": "economy", "description": "Kalkulator Prime Free Fire untuk menghitung estimasi diamond dan harga rupiah", "usage": ".primeff <jumlah poin>", "example": ".primeff 12900", "isOwner": false, "isPremium": false, "cooldown": 5, "energi": 0}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-economy-primeff": "primeff", "rimuru-primeff": "primeff", "rimuru-prime": "prime", "rimuru-kalkulatorprime": "kalkulatorprime", "rimuru-primefreefire": "primefreefire", "rimuru-ffprime": "ffprime", "primeff": "primeff", "prime": "prime", "kalkulatorprime": "kalkulatorprime", "primefreefire": "primefreefire", "ffprime": "ffprime"}
export default handler
