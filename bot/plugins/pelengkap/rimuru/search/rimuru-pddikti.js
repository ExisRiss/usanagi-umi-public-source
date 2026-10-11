/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/pddikti.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pddikti", "category": "search", "aliasMap": {"rimuru-search-pddikti": "pddikti", "rimuru-pddikti": "pddikti", "rimuru-dikti": "dikti", "rimuru-carimahasiswa": "carimahasiswa", "pddikti": "pddikti", "dikti": "dikti", "carimahasiswa": "carimahasiswa"}, "description": "Cari data Mahasiswa, Dosen, PT, dan Prodi dari PDDIKTI", "usage": ".pddikti <mode> <query>", "example": ".pddikti all Gibran Khalil\n.pddikti detail <id_mahasiswa>", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/pddikti.js", metadata, m, extra)
handler.help = ["rimuru-search-pddikti <mode> <query>"]
handler.command = ["rimuru-search-pddikti", "rimuru-pddikti", "rimuru-dikti", "rimuru-carimahasiswa", "pddikti", "dikti", "carimahasiswa"]
handler.tags = ["search"]
handler.description = "Cari data Mahasiswa, Dosen, PT, dan Prodi dari PDDIKTI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pddikti", "alias": ["dikti", "carimahasiswa"], "category": "search", "description": "Cari data Mahasiswa, Dosen, PT, dan Prodi dari PDDIKTI", "usage": ".pddikti <mode> <query>", "example": ".pddikti all Gibran Khalil\n.pddikti detail <id_mahasiswa>", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-pddikti": "pddikti", "rimuru-pddikti": "pddikti", "rimuru-dikti": "dikti", "rimuru-carimahasiswa": "carimahasiswa", "pddikti": "pddikti", "dikti": "dikti", "carimahasiswa": "carimahasiswa"}
export default handler
