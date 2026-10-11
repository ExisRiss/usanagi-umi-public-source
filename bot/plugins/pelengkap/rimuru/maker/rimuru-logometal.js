/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/logometal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "logo-metal", "category": "maker", "aliasMap": {"rimuru-maker-logo-metal": "logo-metal", "rimuru-logo-metal": "logo-metal", "rimuru-logometal": "logometal", "rimuru-metallogo": "metallogo", "rimuru-steellogo": "steellogo", "rimuru-metaltext": "metaltext", "logo-metal": "logo-metal", "logometal": "logometal", "metallogo": "metallogo", "steellogo": "steellogo", "metaltext": "metaltext"}, "description": "Buat logo dengan efek logam/steel", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/logometal.js", metadata, m, extra)
handler.help = ["rimuru-maker-logo-metal"]
handler.command = ["rimuru-maker-logo-metal", "rimuru-logo-metal", "rimuru-logometal", "rimuru-metallogo", "rimuru-steellogo", "rimuru-metaltext", "logo-metal", "logometal", "metallogo", "steellogo", "metaltext"]
handler.tags = ["maker"]
handler.description = "Buat logo dengan efek logam/steel"
handler.importSource = "rimuru"
handler.importConfig = {"name": "logo-metal", "alias": ["logometal", "metallogo", "steellogo", "metaltext"], "category": "maker", "description": "Buat logo dengan efek logam/steel", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-logo-metal": "logo-metal", "rimuru-logo-metal": "logo-metal", "rimuru-logometal": "logometal", "rimuru-metallogo": "metallogo", "rimuru-steellogo": "steellogo", "rimuru-metaltext": "metaltext", "logo-metal": "logo-metal", "logometal": "logometal", "metallogo": "metallogo", "steellogo": "steellogo", "metaltext": "metaltext"}
export default handler
