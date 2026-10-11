/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/searchthatsong.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "searchthatsong", "category": "search", "aliasMap": {"rimuru-search-searchthatsong": "searchthatsong", "rimuru-searchthatsong": "searchthatsong", "rimuru-sts": "sts", "rimuru-carilagu": "carilagu", "searchthatsong": "searchthatsong", "sts": "sts", "carilagu": "carilagu"}, "description": "Mencari detail sebuah lagu dari lirik atau potongan kata", "usage": ".searchthatsong <potongan lirik>", "example": ".searchthatsong ku menangis membayangkan", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/searchthatsong.js", metadata, m, extra)
handler.help = ["rimuru-search-searchthatsong <potongan lirik>"]
handler.command = ["rimuru-search-searchthatsong", "rimuru-searchthatsong", "rimuru-sts", "rimuru-carilagu", "searchthatsong", "sts", "carilagu"]
handler.tags = ["search"]
handler.description = "Mencari detail sebuah lagu dari lirik atau potongan kata"
handler.importSource = "rimuru"
handler.importConfig = {"name": "searchthatsong", "alias": ["sts", "carilagu"], "category": "search", "description": "Mencari detail sebuah lagu dari lirik atau potongan kata", "usage": ".searchthatsong <potongan lirik>", "example": ".searchthatsong ku menangis membayangkan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-searchthatsong": "searchthatsong", "rimuru-searchthatsong": "searchthatsong", "rimuru-sts": "sts", "rimuru-carilagu": "carilagu", "searchthatsong": "searchthatsong", "sts": "sts", "carilagu": "carilagu"}
export default handler
