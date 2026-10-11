/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/ptvch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ptvch", "category": "owner", "aliasMap": {"rimuru-owner-ptvch": "ptvch", "rimuru-ptvch": "ptvch", "rimuru-ptvchanel": "ptvchanel", "rimuru-ptvstory": "ptvstory", "ptvch": "ptvch", "ptvchanel": "ptvchanel", "ptvstory": "ptvstory"}, "description": "Kirim video sebagai PTV ke channel", "usage": ".ptvch (reply video)", "example": ".ptvch", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/ptvch.js", metadata, m, extra)
handler.help = ["rimuru-owner-ptvch (reply video)"]
handler.command = ["rimuru-owner-ptvch", "rimuru-ptvch", "rimuru-ptvchanel", "rimuru-ptvstory", "ptvch", "ptvchanel", "ptvstory"]
handler.tags = ["owner"]
handler.description = "Kirim video sebagai PTV ke channel"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ptvch", "alias": ["ptvchanel", "ptvstory"], "category": "owner", "description": "Kirim video sebagai PTV ke channel", "usage": ".ptvch (reply video)", "example": ".ptvch", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-ptvch": "ptvch", "rimuru-ptvch": "ptvch", "rimuru-ptvchanel": "ptvchanel", "rimuru-ptvstory": "ptvstory", "ptvch": "ptvch", "ptvchanel": "ptvchanel", "ptvstory": "ptvstory"}
export default handler
