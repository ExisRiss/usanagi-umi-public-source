/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/lifefact.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lifefact", "category": "fun", "aliasMap": {"rimuru-fun-lifefact": "lifefact", "rimuru-lifefact": "lifefact", "rimuru-funfacthidup": "funfacthidup", "rimuru-livefunfact": "livefunfact", "lifefact": "lifefact", "funfacthidup": "funfacthidup", "livefunfact": "livefunfact"}, "description": "Fakta statistik kehidupan berdasarkan tanggal lahir", "usage": ".lifefact YYYY-MM-DD", "example": ".lifefact 2002-01-11", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/lifefact.js", metadata, m, extra)
handler.help = ["rimuru-fun-lifefact YYYY-MM-DD"]
handler.command = ["rimuru-fun-lifefact", "rimuru-lifefact", "rimuru-funfacthidup", "rimuru-livefunfact", "lifefact", "funfacthidup", "livefunfact"]
handler.tags = ["fun"]
handler.description = "Fakta statistik kehidupan berdasarkan tanggal lahir"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lifefact", "alias": ["funfacthidup", "livefunfact"], "category": "fun", "description": "Fakta statistik kehidupan berdasarkan tanggal lahir", "usage": ".lifefact YYYY-MM-DD", "example": ".lifefact 2002-01-11", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-lifefact": "lifefact", "rimuru-lifefact": "lifefact", "rimuru-funfacthidup": "funfacthidup", "rimuru-livefunfact": "livefunfact", "lifefact": "lifefact", "funfacthidup": "funfacthidup", "livefunfact": "livefunfact"}
export default handler
