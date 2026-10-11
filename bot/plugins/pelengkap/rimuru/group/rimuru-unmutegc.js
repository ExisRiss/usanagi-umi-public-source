/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/unmutegc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "unmutegc", "category": "group", "aliasMap": {"rimuru-group-unmutegc": "unmutegc", "rimuru-unmutegc": "unmutegc", "rimuru-unmutegrup": "unmutegrup", "rimuru-unmutebot": "unmutebot", "rimuru-unblockbot": "unblockbot", "rimuru-unlockbot": "unlockbot", "unmutegc": "unmutegc", "unmutegrup": "unmutegrup", "unmutebot": "unmutebot", "unblockbot": "unblockbot", "unlockbot": "unlockbot"}, "description": "Buka blokir command bot untuk member di grup", "usage": ".unmutegc", "example": ".unmutegc", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/unmutegc.js", metadata, m, extra)
handler.help = ["rimuru-group-unmutegc"]
handler.command = ["rimuru-group-unmutegc", "rimuru-unmutegc", "rimuru-unmutegrup", "rimuru-unmutebot", "rimuru-unblockbot", "rimuru-unlockbot", "unmutegc", "unmutegrup", "unmutebot", "unblockbot", "unlockbot"]
handler.tags = ["group"]
handler.description = "Buka blokir command bot untuk member di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "unmutegc", "alias": ["unmutegrup", "unmutebot", "unblockbot", "unlockbot"], "category": "group", "description": "Buka blokir command bot untuk member di grup", "usage": ".unmutegc", "example": ".unmutegc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-unmutegc": "unmutegc", "rimuru-unmutegc": "unmutegc", "rimuru-unmutegrup": "unmutegrup", "rimuru-unmutebot": "unmutebot", "rimuru-unblockbot": "unblockbot", "rimuru-unlockbot": "unlockbot", "unmutegc": "unmutegc", "unmutegrup": "unmutegrup", "unmutebot": "unmutebot", "unblockbot": "unblockbot", "unlockbot": "unlockbot"}
export default handler
