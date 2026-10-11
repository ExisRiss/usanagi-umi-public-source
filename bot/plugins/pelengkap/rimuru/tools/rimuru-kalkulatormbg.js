/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/kalkulatormbg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kalkulatormbg", "category": "tools", "aliasMap": {"rimuru-tools-kalkulatormbg": "kalkulatormbg", "rimuru-kalkulatormbg": "kalkulatormbg", "rimuru-kkmbg": "kkmbg"}, "description": "Hitung durasi dan perbandingan dana Makan Bergizi Gratis (MBG)", "usage": ".kkmbg <jumlah_uang>", "example": ".kkmbg 1000000000", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/kalkulatormbg.js", metadata, m, extra)
handler.help = ["rimuru-tools-kalkulatormbg <jumlah_uang>"]
handler.command = ["rimuru-tools-kalkulatormbg", "rimuru-kalkulatormbg", "rimuru-kkmbg"]
handler.tags = ["tools"]
handler.description = "Hitung durasi dan perbandingan dana Makan Bergizi Gratis (MBG)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kalkulatormbg", "alias": ["kkmbg"], "category": "tools", "description": "Hitung durasi dan perbandingan dana Makan Bergizi Gratis (MBG)", "usage": ".kkmbg <jumlah_uang>", "example": ".kkmbg 1000000000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-kalkulatormbg": "kalkulatormbg", "rimuru-kalkulatormbg": "kalkulatormbg", "rimuru-kkmbg": "kkmbg"}
export default handler
