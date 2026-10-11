/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekotot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekotot", "category": "fun", "aliasMap": {"rimuru-fun-cekotot": "cekotot", "rimuru-cekotot": "cekotot", "rimuru-ototcheck": "ototcheck", "rimuru-cekmuscle": "cekmuscle", "cekotot": "cekotot", "ototcheck": "ototcheck", "cekmuscle": "cekmuscle"}, "description": "Cek seberapa berotot kamu (random)", "usage": ".cekotot <nama>", "example": ".cekotot Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekotot.js", metadata, m, extra)
handler.help = ["rimuru-fun-cekotot <nama>"]
handler.command = ["rimuru-fun-cekotot", "rimuru-cekotot", "rimuru-ototcheck", "rimuru-cekmuscle", "cekotot", "ototcheck", "cekmuscle"]
handler.tags = ["fun"]
handler.description = "Cek seberapa berotot kamu (random)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekotot", "alias": ["ototcheck", "cekmuscle"], "category": "fun", "description": "Cek seberapa berotot kamu (random)", "usage": ".cekotot <nama>", "example": ".cekotot Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-cekotot": "cekotot", "rimuru-cekotot": "cekotot", "rimuru-ototcheck": "ototcheck", "rimuru-cekmuscle": "cekmuscle", "cekotot": "cekotot", "ototcheck": "ototcheck", "cekmuscle": "cekmuscle"}
export default handler
