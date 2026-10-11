/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/kirimpesangc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kirimpesangc", "category": "tools", "aliasMap": {"rimuru-tools-kirimpesangc": "kirimpesangc", "rimuru-kirimpesangc": "kirimpesangc", "rimuru-sendgc": "sendgc", "rimuru-pesangc": "pesangc", "kirimpesangc": "kirimpesangc", "sendgc": "sendgc", "pesangc": "pesangc"}, "description": "Kirim pesan ke group tertentu", "usage": ".kirimpesangc pesan", "example": ".kirimpesangc ingat masa sewa kalian tinggal dikit", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/kirimpesangc.js", metadata, m, extra)
handler.help = ["rimuru-tools-kirimpesangc pesan"]
handler.command = ["rimuru-tools-kirimpesangc", "rimuru-kirimpesangc", "rimuru-sendgc", "rimuru-pesangc", "kirimpesangc", "sendgc", "pesangc"]
handler.tags = ["tools"]
handler.description = "Kirim pesan ke group tertentu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kirimpesangc", "alias": ["sendgc", "pesangc"], "category": "tools", "description": "Kirim pesan ke group tertentu", "usage": ".kirimpesangc pesan", "example": ".kirimpesangc ingat masa sewa kalian tinggal dikit", "isOwner": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-kirimpesangc": "kirimpesangc", "rimuru-kirimpesangc": "kirimpesangc", "rimuru-sendgc": "sendgc", "rimuru-pesangc": "pesangc", "kirimpesangc": "kirimpesangc", "sendgc": "sendgc", "pesangc": "pesangc"}
export default handler
