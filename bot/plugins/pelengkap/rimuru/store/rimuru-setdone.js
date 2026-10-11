/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/setdone.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setdone", "category": "store", "aliasMap": {"rimuru-store-setdone": "setdone", "rimuru-setdone": "setdone", "rimuru-doneconfig": "doneconfig", "rimuru-configdone": "configdone", "setdone": "setdone", "doneconfig": "doneconfig", "configdone": "configdone"}, "description": "Set template untuk .done", "usage": ".setdone template <full text>", "example": ".setdone template 「 *TRANSAKSI BERHASIL* 」\\n\\n⌚️ JAM : {jam}", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/setdone.js", metadata, m, extra)
handler.help = ["rimuru-store-setdone template <full text>"]
handler.command = ["rimuru-store-setdone", "rimuru-setdone", "rimuru-doneconfig", "rimuru-configdone", "setdone", "doneconfig", "configdone"]
handler.tags = ["store"]
handler.description = "Set template untuk .done"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setdone", "alias": ["doneconfig", "configdone"], "category": "store", "description": "Set template untuk .done", "usage": ".setdone template <full text>", "example": ".setdone template 「 *TRANSAKSI BERHASIL* 」\\n\\n⌚️ JAM : {jam}", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-setdone": "setdone", "rimuru-setdone": "setdone", "rimuru-doneconfig": "doneconfig", "rimuru-configdone": "configdone", "setdone": "setdone", "doneconfig": "doneconfig", "configdone": "configdone"}
export default handler
