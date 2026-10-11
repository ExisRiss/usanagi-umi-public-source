/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/colorgrade/cc3.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cc3", "category": "colorgrade", "aliasMap": {"rimuru-colorgrade-cc3": "cc3", "rimuru-cc3": "cc3", "rimuru-cyberpunk": "cyberpunk", "rimuru-neoncity": "neoncity", "cc3": "cc3", "cyberpunk": "cyberpunk", "neoncity": "neoncity"}, "description": "Color Grading CC3 - Cyberpunk Neon Blue Pink", "usage": ".cc3 (Kirim/Reply Foto)", "example": ".cc3"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/colorgrade/cc3.js", metadata, m, extra)
handler.help = ["rimuru-colorgrade-cc3 (Kirim/Reply Foto)"]
handler.command = ["rimuru-colorgrade-cc3", "rimuru-cc3", "rimuru-cyberpunk", "rimuru-neoncity", "cc3", "cyberpunk", "neoncity"]
handler.tags = ["colorgrade"]
handler.description = "Color Grading CC3 - Cyberpunk Neon Blue Pink"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cc3", "alias": ["cc3", "cyberpunk", "neoncity"], "category": "colorgrade", "description": "Color Grading CC3 - Cyberpunk Neon Blue Pink", "usage": ".cc3 (Kirim/Reply Foto)", "example": ".cc3", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-colorgrade-cc3": "cc3", "rimuru-cc3": "cc3", "rimuru-cyberpunk": "cyberpunk", "rimuru-neoncity": "neoncity", "cc3": "cc3", "cyberpunk": "cyberpunk", "neoncity": "neoncity"}
export default handler
