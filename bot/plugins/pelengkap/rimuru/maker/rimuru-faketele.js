/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/faketele.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "faketg", "category": "maker", "aliasMap": {"rimuru-maker-faketg": "faketg", "rimuru-faketg": "faketg", "rimuru-faketele": "faketele", "rimuru-faketelegram": "faketelegram", "faketg": "faketg", "faketelegram": "faketelegram"}, "description": "Buat gambar tampilan profil Telegram palsu", "usage": ".faketg name|number|bio|username (sambil kirim/reply gambar)", "example": ".faketg Geto|6285135853836|Suguru|Geto suguru", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/faketele.js", metadata, m, extra)
handler.help = ["rimuru-maker-faketg name|number|bio|username (sambil kirim/reply gambar)"]
handler.command = ["rimuru-maker-faketg", "rimuru-faketg", "rimuru-faketele", "rimuru-faketelegram", "faketg", "faketelegram"]
handler.tags = ["maker"]
handler.description = "Buat gambar tampilan profil Telegram palsu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "faketg", "alias": ["faketele", "faketelegram"], "category": "maker", "description": "Buat gambar tampilan profil Telegram palsu", "usage": ".faketg name|number|bio|username (sambil kirim/reply gambar)", "example": ".faketg Geto|6285135853836|Suguru|Geto suguru", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-faketg": "faketg", "rimuru-faketg": "faketg", "rimuru-faketele": "faketele", "rimuru-faketelegram": "faketelegram", "faketg": "faketg", "faketelegram": "faketelegram"}
export default handler
