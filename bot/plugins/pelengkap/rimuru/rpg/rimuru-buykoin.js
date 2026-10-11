/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/buykoin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "buykoin", "category": "rpg", "aliasMap": {"rimuru-rpg-buykoin": "buykoin", "rimuru-buykoin": "buykoin", "rimuru-belikoin": "belikoin", "rimuru-belicoin": "belicoin", "rimuru-exptokoin": "exptokoin", "rimuru-exptocoin": "exptocoin", "belicoin": "belicoin", "exptocoin": "exptocoin"}, "description": "Tukar EXP menjadi Koin", "usage": ".buykoin <jumlah>", "example": ".buykoin 10000", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/buykoin.js", metadata, m, extra)
handler.help = ["rimuru-rpg-buykoin <jumlah>"]
handler.command = ["rimuru-rpg-buykoin", "rimuru-buykoin", "rimuru-belikoin", "rimuru-belicoin", "rimuru-exptokoin", "rimuru-exptocoin", "belicoin", "exptocoin"]
handler.tags = ["rpg"]
handler.description = "Tukar EXP menjadi Koin"
handler.importSource = "rimuru"
handler.importConfig = {"name": "buykoin", "alias": ["belikoin", "belicoin", "exptokoin", "exptocoin"], "category": "rpg", "description": "Tukar EXP menjadi Koin", "usage": ".buykoin <jumlah>", "example": ".buykoin 10000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-buykoin": "buykoin", "rimuru-buykoin": "buykoin", "rimuru-belikoin": "belikoin", "rimuru-belicoin": "belicoin", "rimuru-exptokoin": "exptokoin", "rimuru-exptocoin": "exptocoin", "belicoin": "belicoin", "exptocoin": "exptocoin"}
export default handler
