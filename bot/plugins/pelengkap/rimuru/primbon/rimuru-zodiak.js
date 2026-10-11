/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/zodiak.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "zodiak", "category": "primbon", "aliasMap": {"rimuru-primbon-zodiak": "zodiak", "rimuru-zodiak": "zodiak", "rimuru-horoscope": "horoscope", "rimuru-ramalan": "ramalan", "zodiak": "zodiak", "horoscope": "horoscope"}, "description": "Ramalan zodiak", "usage": ".zodiak <nama zodiak>", "example": ".zodiak aries", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/zodiak.js", metadata, m, extra)
handler.help = ["rimuru-primbon-zodiak <nama zodiak>"]
handler.command = ["rimuru-primbon-zodiak", "rimuru-zodiak", "rimuru-horoscope", "rimuru-ramalan", "zodiak", "horoscope"]
handler.tags = ["primbon"]
handler.description = "Ramalan zodiak"
handler.importSource = "rimuru"
handler.importConfig = {"name": "zodiak", "alias": ["horoscope", "ramalan"], "category": "primbon", "description": "Ramalan zodiak", "usage": ".zodiak <nama zodiak>", "example": ".zodiak aries", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-zodiak": "zodiak", "rimuru-zodiak": "zodiak", "rimuru-horoscope": "horoscope", "rimuru-ramalan": "ramalan", "zodiak": "zodiak", "horoscope": "horoscope"}
export default handler
