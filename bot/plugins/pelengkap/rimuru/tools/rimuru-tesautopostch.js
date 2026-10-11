/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/tesautopostch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tesautopostch", "category": "tools", "aliasMap": {"rimuru-tools-tesautopostch": "tesautopostch", "rimuru-tesautopostch": "tesautopostch", "rimuru-testch": "testch", "rimuru-testautopost": "testautopost", "tesautopostch": "tesautopostch", "testch": "testch", "testautopost": "testautopost"}, "description": "Test autopost ke channel sekarang", "usage": ".tesautopostch [pagi/siang/sore/malam]", "example": ".tesautopostch pagi", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/tesautopostch.js", metadata, m, extra)
handler.help = ["rimuru-tools-tesautopostch [pagi/siang/sore/malam]"]
handler.command = ["rimuru-tools-tesautopostch", "rimuru-tesautopostch", "rimuru-testch", "rimuru-testautopost", "tesautopostch", "testch", "testautopost"]
handler.tags = ["tools"]
handler.description = "Test autopost ke channel sekarang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tesautopostch", "alias": ["testch", "testautopost"], "category": "tools", "description": "Test autopost ke channel sekarang", "usage": ".tesautopostch [pagi/siang/sore/malam]", "example": ".tesautopostch pagi", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-tesautopostch": "tesautopostch", "rimuru-tesautopostch": "tesautopostch", "rimuru-testch": "testch", "rimuru-testautopost": "testautopost", "tesautopostch": "tesautopostch", "testch": "testch", "testautopost": "testautopost"}
export default handler
