/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/berapa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "berapa", "category": "fun", "aliasMap": {"rimuru-fun-berapa": "berapa", "rimuru-berapa": "berapa", "rimuru-howmuch": "howmuch", "rimuru-howmany": "howmany"}, "description": "Tanya bot berapa sesuatu", "usage": ".berapa <pertanyaan>", "example": ".berapa umur jodohku?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/berapa.js", metadata, m, extra)
handler.help = ["rimuru-fun-berapa <pertanyaan>"]
handler.command = ["rimuru-fun-berapa", "rimuru-berapa", "rimuru-howmuch", "rimuru-howmany"]
handler.tags = ["fun"]
handler.description = "Tanya bot berapa sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "berapa", "alias": ["howmuch", "howmany"], "category": "fun", "description": "Tanya bot berapa sesuatu", "usage": ".berapa <pertanyaan>", "example": ".berapa umur jodohku?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-berapa": "berapa", "rimuru-berapa": "berapa", "rimuru-howmuch": "howmuch", "rimuru-howmany": "howmany"}
export default handler
