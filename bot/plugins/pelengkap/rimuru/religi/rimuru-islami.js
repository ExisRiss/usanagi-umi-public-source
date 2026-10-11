/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/religi/islami.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "islami", "category": "religi", "aliasMap": {"rimuru-religi-islami": "islami", "rimuru-islami": "islami", "rimuru-niatsholat": "niatsholat", "rimuru-niatshalat": "niatshalat", "rimuru-doa": "doa", "rimuru-berdoa": "berdoa", "rimuru-gislam": "gislam", "islami": "islami", "niatsholat": "niatsholat", "niatshalat": "niatshalat", "berdoa": "berdoa", "gislam": "gislam"}, "description": "Kumpulan fitur Islami (Asmaul Husna, Niat Sholat, Surah, Doa, Artikel, Kata Mutiara)", "usage": ".islami <fitur>", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/religi/islami.js", metadata, m, extra)
handler.help = ["rimuru-religi-islami <fitur>"]
handler.command = ["rimuru-religi-islami", "rimuru-islami", "rimuru-niatsholat", "rimuru-niatshalat", "rimuru-doa", "rimuru-berdoa", "rimuru-gislam", "islami", "niatsholat", "niatshalat", "berdoa", "gislam"]
handler.tags = ["religi"]
handler.description = "Kumpulan fitur Islami (Asmaul Husna, Niat Sholat, Surah, Doa, Artikel, Kata Mutiara)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "islami", "alias": ["asmaulhusna", "niatsholat", "niatshalat", "surah", "doa", "berdoa", "gislam"], "category": "religi", "description": "Kumpulan fitur Islami (Asmaul Husna, Niat Sholat, Surah, Doa, Artikel, Kata Mutiara)", "usage": ".islami <fitur>", "isGroup": false, "isBotAdmin": false, "isAdmin": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-religi-islami": "islami", "rimuru-islami": "islami", "rimuru-niatsholat": "niatsholat", "rimuru-niatshalat": "niatshalat", "rimuru-doa": "doa", "rimuru-berdoa": "berdoa", "rimuru-gislam": "gislam", "islami": "islami", "niatsholat": "niatsholat", "niatshalat": "niatshalat", "berdoa": "berdoa", "gislam": "gislam"}
export default handler
