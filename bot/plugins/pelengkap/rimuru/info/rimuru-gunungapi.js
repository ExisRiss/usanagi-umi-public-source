/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/gunungapi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gunungapi", "category": "info", "aliasMap": {"rimuru-info-gunungapi": "gunungapi", "rimuru-gunungapi": "gunungapi", "rimuru-magma": "magma", "rimuru-gunung": "gunung", "rimuru-erupsi": "erupsi", "rimuru-volcano": "volcano", "gunungapi": "gunungapi", "gunung": "gunung", "erupsi": "erupsi", "volcano": "volcano"}, "description": "Informasi aktivitas gunung api Indonesia dari MAGMA ESDM", "usage": ".magma | .magma status <kode> | .magma gunung <nama> | .magma list <halaman>", "cooldown": 5, "energi": 0, "limit": true}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/gunungapi.js", metadata, m, extra)
handler.help = ["rimuru-info-gunungapi | .magma status <kode> | .magma gunung <nama> | .magma list <halaman>"]
handler.command = ["rimuru-info-gunungapi", "rimuru-gunungapi", "rimuru-magma", "rimuru-gunung", "rimuru-erupsi", "rimuru-volcano", "gunungapi", "gunung", "erupsi", "volcano"]
handler.tags = ["info"]
handler.description = "Informasi aktivitas gunung api Indonesia dari MAGMA ESDM"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gunungapi", "alias": ["magma", "gunung", "erupsi", "volcano"], "category": "info", "description": "Informasi aktivitas gunung api Indonesia dari MAGMA ESDM", "usage": ".magma | .magma status <kode> | .magma gunung <nama> | .magma list <halaman>", "cooldown": 5, "energi": 0, "limit": true, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-gunungapi": "gunungapi", "rimuru-gunungapi": "gunungapi", "rimuru-magma": "magma", "rimuru-gunung": "gunung", "rimuru-erupsi": "erupsi", "rimuru-volcano": "volcano", "gunungapi": "gunungapi", "gunung": "gunung", "erupsi": "erupsi", "volcano": "volcano"}
export default handler
