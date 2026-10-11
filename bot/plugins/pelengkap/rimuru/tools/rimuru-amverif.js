/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/amverif.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "amverif", "category": "tools", "aliasMap": {"rimuru-tools-amverif": "amverif", "rimuru-amverif": "amverif", "rimuru-ampverif": "ampverif", "rimuru-verifyam": "verifyam", "rimuru-amverify": "amverify", "amverif": "amverif", "ampverif": "ampverif", "verifyam": "verifyam", "amverify": "amverify"}, "description": "Alias: verifikasi AM (pakai .amprem)", "usage": ".amverif → gunakan .amprem", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/amverif.js", metadata, m, extra)
handler.help = ["rimuru-tools-amverif → gunakan .amprem"]
handler.command = ["rimuru-tools-amverif", "rimuru-amverif", "rimuru-ampverif", "rimuru-verifyam", "rimuru-amverify", "amverif", "ampverif", "verifyam", "amverify"]
handler.tags = ["tools"]
handler.description = "Alias: verifikasi AM (pakai .amprem)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "amverif", "alias": ["ampverif", "verifyam", "amverify"], "category": "tools", "description": "Alias: verifikasi AM (pakai .amprem)", "usage": ".amverif → gunakan .amprem", "isOwner": false, "isPremium": false, "isEnabled": true, "cooldown": 5}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-amverif": "amverif", "rimuru-amverif": "amverif", "rimuru-ampverif": "ampverif", "rimuru-verifyam": "verifyam", "rimuru-amverify": "amverify", "amverif": "amverif", "ampverif": "ampverif", "verifyam": "verifyam", "amverify": "amverify"}
export default handler
