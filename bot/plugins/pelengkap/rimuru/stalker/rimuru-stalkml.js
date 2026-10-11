/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/stalkml.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "stalkml", "category": "stalker", "aliasMap": {"rimuru-stalker-stalkml": "stalkml", "rimuru-stalkml": "stalkml", "rimuru-mlstalk": "mlstalk", "rimuru-ceknickml": "ceknickml", "rimuru-nickml": "nickml", "stalkml": "stalkml", "mlstalk": "mlstalk", "ceknickml": "ceknickml", "nickml": "nickml"}, "description": "Mengetahui nama/nickname akun Mobile Legends berdasarkan ID dan Server.", "usage": ".stalkml <id> | <server>", "example": ".stalkml 1264042367 | 15139", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/stalkml.js", metadata, m, extra)
handler.help = ["rimuru-stalker-stalkml <id> | <server>"]
handler.command = ["rimuru-stalker-stalkml", "rimuru-stalkml", "rimuru-mlstalk", "rimuru-ceknickml", "rimuru-nickml", "stalkml", "mlstalk", "ceknickml", "nickml"]
handler.tags = ["stalker"]
handler.description = "Mengetahui nama/nickname akun Mobile Legends berdasarkan ID dan Server."
handler.importSource = "rimuru"
handler.importConfig = {"name": "stalkml", "alias": ["mlstalk", "ceknickml", "nickml"], "category": "stalker", "description": "Mengetahui nama/nickname akun Mobile Legends berdasarkan ID dan Server.", "usage": ".stalkml <id> | <server>", "example": ".stalkml 1264042367 | 15139", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-stalkml": "stalkml", "rimuru-stalkml": "stalkml", "rimuru-mlstalk": "mlstalk", "rimuru-ceknickml": "ceknickml", "rimuru-nickml": "nickml", "stalkml": "stalkml", "mlstalk": "mlstalk", "ceknickml": "ceknickml", "nickml": "nickml"}
export default handler
