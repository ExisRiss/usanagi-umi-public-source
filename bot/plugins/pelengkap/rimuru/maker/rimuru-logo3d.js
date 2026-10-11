/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/logo3d.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "logo-3d", "category": "maker", "aliasMap": {"rimuru-maker-logo-3d": "logo-3d", "rimuru-logo-3d": "logo-3d", "rimuru-logo3d": "logo3d", "rimuru-3dlogo": "3dlogo", "rimuru-3dtext": "3dtext", "logo-3d": "logo-3d", "logo3d": "logo3d", "3dlogo": "3dlogo", "3dtext": "3dtext"}, "description": "Buat logo dengan efek 3D pop out", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/logo3d.js", metadata, m, extra)
handler.help = ["rimuru-maker-logo-3d"]
handler.command = ["rimuru-maker-logo-3d", "rimuru-logo-3d", "rimuru-logo3d", "rimuru-3dlogo", "rimuru-3dtext", "logo-3d", "logo3d", "3dlogo", "3dtext"]
handler.tags = ["maker"]
handler.description = "Buat logo dengan efek 3D pop out"
handler.importSource = "rimuru"
handler.importConfig = {"name": "logo-3d", "alias": ["logo3d", "3dlogo", "3dtext"], "category": "maker", "description": "Buat logo dengan efek 3D pop out", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-logo-3d": "logo-3d", "rimuru-logo-3d": "logo-3d", "rimuru-logo3d": "logo3d", "rimuru-3dlogo": "3dlogo", "rimuru-3dtext": "3dtext", "logo-3d": "logo-3d", "logo3d": "logo3d", "3dlogo": "3dlogo", "3dtext": "3dtext"}
export default handler
