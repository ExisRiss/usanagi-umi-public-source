/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/faketag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "faketag", "category": "tools", "aliasMap": {"rimuru-tools-faketag": "faketag", "rimuru-faketag": "faketag", "rimuru-ftag": "ftag", "rimuru-fake": "fake", "faketag": "faketag", "ftag": "ftag", "fake": "fake"}, "description": "Fake tag ala Rimuru", "usage": ".faketag @user|pesan tag|pesan", "example": ".faketag 628xxx|Darling...|Kamu dimana? 💕", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/faketag.js", metadata, m, extra)
handler.help = ["rimuru-tools-faketag @user|pesan tag|pesan"]
handler.command = ["rimuru-tools-faketag", "rimuru-faketag", "rimuru-ftag", "rimuru-fake", "faketag", "ftag", "fake"]
handler.tags = ["tools"]
handler.description = "Fake tag ala Rimuru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "faketag", "alias": ["ftag", "fake"], "category": "tools", "description": "Fake tag ala Rimuru", "usage": ".faketag @user|pesan tag|pesan", "example": ".faketag 628xxx|Darling...|Kamu dimana? 💕", "cooldown": 5, "isGroup": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-faketag": "faketag", "rimuru-faketag": "faketag", "rimuru-ftag": "ftag", "rimuru-fake": "fake", "faketag": "faketag", "ftag": "ftag", "fake": "fake"}
export default handler
