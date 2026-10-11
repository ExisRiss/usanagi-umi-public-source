/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanwaraccept.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanwaraccept", "category": "clan", "aliasMap": {"rimuru-clan-clanwaraccept": "clanwaraccept", "rimuru-clanwaraccept": "clanwaraccept", "rimuru-acceptwar": "acceptwar", "rimuru-waraccept": "waraccept", "rimuru-terimawar": "terimawar", "clanwaraccept": "clanwaraccept", "acceptwar": "acceptwar", "waraccept": "waraccept", "terimawar": "terimawar"}, "description": "Terima tantangan clan war", "usage": ".clanwaraccept", "example": ".clanwaraccept", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanwaraccept.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanwaraccept"]
handler.command = ["rimuru-clan-clanwaraccept", "rimuru-clanwaraccept", "rimuru-acceptwar", "rimuru-waraccept", "rimuru-terimawar", "clanwaraccept", "acceptwar", "waraccept", "terimawar"]
handler.tags = ["clan"]
handler.description = "Terima tantangan clan war"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanwaraccept", "alias": ["acceptwar", "waraccept", "terimawar"], "category": "clan", "description": "Terima tantangan clan war", "usage": ".clanwaraccept", "example": ".clanwaraccept", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanwaraccept": "clanwaraccept", "rimuru-clanwaraccept": "clanwaraccept", "rimuru-acceptwar": "acceptwar", "rimuru-waraccept": "waraccept", "rimuru-terimawar": "terimawar", "clanwaraccept": "clanwaraccept", "acceptwar": "acceptwar", "waraccept": "waraccept", "terimawar": "terimawar"}
export default handler
