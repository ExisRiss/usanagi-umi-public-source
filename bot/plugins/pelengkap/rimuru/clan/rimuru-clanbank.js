/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanbank.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanbank", "category": "clan", "aliasMap": {"rimuru-clan-clanbank": "clanbank", "rimuru-clanbank": "clanbank", "rimuru-kasclan": "kasclan", "rimuru-clanbalance": "clanbalance", "clanbank": "clanbank", "kasclan": "kasclan", "clanbalance": "clanbalance"}, "description": "Cek saldo kas clan", "usage": ".clanbank", "example": ".clanbank", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanbank.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanbank"]
handler.command = ["rimuru-clan-clanbank", "rimuru-clanbank", "rimuru-kasclan", "rimuru-clanbalance", "clanbank", "kasclan", "clanbalance"]
handler.tags = ["clan"]
handler.description = "Cek saldo kas clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanbank", "alias": ["kasclan", "clanbalance"], "category": "clan", "description": "Cek saldo kas clan", "usage": ".clanbank", "example": ".clanbank", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanbank": "clanbank", "rimuru-clanbank": "clanbank", "rimuru-kasclan": "kasclan", "rimuru-clanbalance": "clanbalance", "clanbank": "clanbank", "kasclan": "kasclan", "clanbalance": "clanbalance"}
export default handler
