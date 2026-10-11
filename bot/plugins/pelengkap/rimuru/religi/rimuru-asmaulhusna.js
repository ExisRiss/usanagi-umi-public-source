/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/religi/asmaulhusna.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "asmaulhusna", "category": "religi", "aliasMap": {"rimuru-religi-asmaulhusna": "asmaulhusna", "rimuru-asmaul": "asmaul", "rimuru-husna": "husna", "rimuru-99names": "99names", "asmaulhusna": "asmaulhusna", "asmaul": "asmaul", "husna": "husna", "99names": "99names"}, "description": "99 Nama Allah (Asmaul Husna)", "usage": ".asmaulhusna [nomor/nama]", "example": ".asmaulhusna 1\n.asmaulhusna ar rahman", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/religi/asmaulhusna.js", metadata, m, extra)
handler.help = ["rimuru-religi-asmaulhusna [nomor/nama]"]
handler.command = ["rimuru-religi-asmaulhusna", "rimuru-asmaul", "rimuru-husna", "rimuru-99names", "asmaulhusna", "asmaul", "husna", "99names"]
handler.tags = ["religi"]
handler.description = "99 Nama Allah (Asmaul Husna)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "asmaulhusna", "alias": ["asmaul", "husna", "99names"], "category": "religi", "description": "99 Nama Allah (Asmaul Husna)", "usage": ".asmaulhusna [nomor/nama]", "example": ".asmaulhusna 1\n.asmaulhusna ar rahman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-asmaulhusna": "asmaulhusna", "rimuru-asmaul": "asmaul", "rimuru-husna": "husna", "rimuru-99names": "99names", "asmaulhusna": "asmaulhusna", "asmaul": "asmaul", "husna": "husna", "99names": "99names"}
export default handler
