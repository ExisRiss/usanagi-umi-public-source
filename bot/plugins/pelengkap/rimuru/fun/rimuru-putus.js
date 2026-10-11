/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/putus.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "putus", "category": "fun", "aliasMap": {"rimuru-fun-putus": "putus", "rimuru-putus": "putus", "rimuru-breakup": "breakup"}, "description": "Memutuskan hubungan dengan pasangan", "usage": ".putus", "example": ".putus", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/putus.js", metadata, m, extra)
handler.help = ["rimuru-fun-putus"]
handler.command = ["rimuru-fun-putus", "rimuru-putus", "rimuru-breakup"]
handler.tags = ["fun"]
handler.description = "Memutuskan hubungan dengan pasangan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "putus", "alias": ["breakup", "cerai"], "category": "fun", "description": "Memutuskan hubungan dengan pasangan", "usage": ".putus", "example": ".putus", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-putus": "putus", "rimuru-putus": "putus", "rimuru-breakup": "breakup"}
export default handler
