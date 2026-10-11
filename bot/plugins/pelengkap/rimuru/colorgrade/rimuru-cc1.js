/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/colorgrade/cc1.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cc1", "category": "colorgrade", "aliasMap": {"rimuru-colorgrade-cc1": "cc1", "rimuru-cc1": "cc1", "rimuru-moody1": "moody1", "rimuru-darkcinematic": "darkcinematic", "cc1": "cc1", "moody1": "moody1", "darkcinematic": "darkcinematic"}, "description": "Color Grading CC1 - Dark Cinematic Moody", "usage": ".cc1 (Kirim/Reply Foto)", "example": ".cc1"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/colorgrade/cc1.js", metadata, m, extra)
handler.help = ["rimuru-colorgrade-cc1 (Kirim/Reply Foto)"]
handler.command = ["rimuru-colorgrade-cc1", "rimuru-cc1", "rimuru-moody1", "rimuru-darkcinematic", "cc1", "moody1", "darkcinematic"]
handler.tags = ["colorgrade"]
handler.description = "Color Grading CC1 - Dark Cinematic Moody"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cc1", "alias": ["cc1", "moody1", "darkcinematic"], "category": "colorgrade", "description": "Color Grading CC1 - Dark Cinematic Moody", "usage": ".cc1 (Kirim/Reply Foto)", "example": ".cc1", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-colorgrade-cc1": "cc1", "rimuru-cc1": "cc1", "rimuru-moody1": "moody1", "rimuru-darkcinematic": "darkcinematic", "cc1": "cc1", "moody1": "moody1", "darkcinematic": "darkcinematic"}
export default handler
