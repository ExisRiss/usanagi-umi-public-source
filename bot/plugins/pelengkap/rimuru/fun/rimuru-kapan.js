/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/kapan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kapan", "category": "fun", "aliasMap": {"rimuru-fun-kapan": "kapan", "rimuru-kapan": "kapan", "rimuru-when": "when"}, "description": "Tanya bot kapan sesuatu", "usage": ".kapan <pertanyaan>", "example": ".kapan aku nikah?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/kapan.js", metadata, m, extra)
handler.help = ["rimuru-fun-kapan <pertanyaan>"]
handler.command = ["rimuru-fun-kapan", "rimuru-kapan", "rimuru-when"]
handler.tags = ["fun"]
handler.description = "Tanya bot kapan sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kapan", "alias": ["when"], "category": "fun", "description": "Tanya bot kapan sesuatu", "usage": ".kapan <pertanyaan>", "example": ".kapan aku nikah?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-kapan": "kapan", "rimuru-kapan": "kapan", "rimuru-when": "when"}
export default handler
