/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/tolak.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tolak", "category": "fun", "aliasMap": {"rimuru-fun-tolak": "tolak", "rimuru-tolak": "tolak", "rimuru-reject": "reject", "rimuru-no": "no", "rimuru-gaktau": "gaktau", "no": "no", "gaktau": "gaktau"}, "description": "Menolak tembakan dari seseorang", "usage": ".tolak @tag", "example": ".tolak @628xxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/tolak.js", metadata, m, extra)
handler.help = ["rimuru-fun-tolak @tag"]
handler.command = ["rimuru-fun-tolak", "rimuru-tolak", "rimuru-reject", "rimuru-no", "rimuru-gaktau", "no", "gaktau"]
handler.tags = ["fun"]
handler.description = "Menolak tembakan dari seseorang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tolak", "alias": ["reject", "no", "gaktau"], "category": "fun", "description": "Menolak tembakan dari seseorang", "usage": ".tolak @tag", "example": ".tolak @628xxx", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-tolak": "tolak", "rimuru-tolak": "tolak", "rimuru-reject": "reject", "rimuru-no": "no", "rimuru-gaktau": "gaktau", "no": "no", "gaktau": "gaktau"}
export default handler
