/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/jail.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jail", "category": "maker", "aliasMap": {"rimuru-maker-jail": "jail", "rimuru-jail": "jail", "rimuru-penjara": "penjara", "rimuru-prison": "prison", "jail": "jail", "penjara": "penjara", "prison": "prison"}, "description": "Efek penjara pada foto", "usage": ".jail (reply foto)", "example": ".jail", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/jail.js", metadata, m, extra)
handler.help = ["rimuru-maker-jail (reply foto)"]
handler.command = ["rimuru-maker-jail", "rimuru-jail", "rimuru-penjara", "rimuru-prison", "jail", "penjara", "prison"]
handler.tags = ["maker"]
handler.description = "Efek penjara pada foto"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jail", "alias": ["penjara", "prison"], "category": "maker", "description": "Efek penjara pada foto", "usage": ".jail (reply foto)", "example": ".jail", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-jail": "jail", "rimuru-jail": "jail", "rimuru-penjara": "penjara", "rimuru-prison": "prison", "jail": "jail", "penjara": "penjara", "prison": "prison"}
export default handler
