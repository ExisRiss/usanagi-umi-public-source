/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/ramalanjodoh.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ramalanjodoh", "category": "primbon", "aliasMap": {"rimuru-primbon-ramalanjodoh": "ramalanjodoh", "rimuru-ramalanjodoh": "ramalanjodoh", "ramalanjodoh": "ramalanjodoh"}, "description": "Ramalan jodoh berdasarkan primbon Jawa", "usage": ".ramalanjodoh nama1 tgl1 bln1 thn1 nama2 tgl2 bln2 thn2", "example": ".ramalanjodoh putu 16 11 2007 keyla 1 1 2008", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/ramalanjodoh.js", metadata, m, extra)
handler.help = ["rimuru-primbon-ramalanjodoh nama1 tgl1 bln1 thn1 nama2 tgl2 bln2 thn2"]
handler.command = ["rimuru-primbon-ramalanjodoh", "rimuru-ramalanjodoh", "ramalanjodoh"]
handler.tags = ["primbon"]
handler.description = "Ramalan jodoh berdasarkan primbon Jawa"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ramalanjodoh", "alias": ["jodoh", "cekjodoh"], "category": "primbon", "description": "Ramalan jodoh berdasarkan primbon Jawa", "usage": ".ramalanjodoh nama1 tgl1 bln1 thn1 nama2 tgl2 bln2 thn2", "example": ".ramalanjodoh putu 16 11 2007 keyla 1 1 2008", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-ramalanjodoh": "ramalanjodoh", "rimuru-ramalanjodoh": "ramalanjodoh", "ramalanjodoh": "ramalanjodoh"}
export default handler
