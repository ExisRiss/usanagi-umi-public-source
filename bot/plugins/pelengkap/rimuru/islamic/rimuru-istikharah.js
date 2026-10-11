/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/istikharah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "istikharah", "category": "religi", "aliasMap": {"rimuru-religi-istikharah": "istikharah", "rimuru-istikharah": "istikharah", "rimuru-sholatistikharah": "sholatistikharah", "rimuru-istikhoroh": "istikhoroh", "rimuru-istikharoh": "istikharoh", "istikharah": "istikharah", "sholatistikharah": "sholatistikharah", "istikhoroh": "istikhoroh", "istikharoh": "istikharoh"}, "description": "Panduan Sholat Istikharah lengkap (tata cara, doa, waktu, dan keutamaan)", "usage": ".istikharah", "example": ".istikharah", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/istikharah.js", metadata, m, extra)
handler.help = ["rimuru-religi-istikharah"]
handler.command = ["rimuru-religi-istikharah", "rimuru-istikharah", "rimuru-sholatistikharah", "rimuru-istikhoroh", "rimuru-istikharoh", "istikharah", "sholatistikharah", "istikhoroh", "istikharoh"]
handler.tags = ["religi"]
handler.description = "Panduan Sholat Istikharah lengkap (tata cara, doa, waktu, dan keutamaan)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "istikharah", "alias": ["sholatistikharah", "istikhoroh", "istikharoh"], "category": "religi", "description": "Panduan Sholat Istikharah lengkap (tata cara, doa, waktu, dan keutamaan)", "usage": ".istikharah", "example": ".istikharah", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-istikharah": "istikharah", "rimuru-istikharah": "istikharah", "rimuru-sholatistikharah": "sholatistikharah", "rimuru-istikhoroh": "istikhoroh", "rimuru-istikharoh": "istikharoh", "istikharah": "istikharah", "sholatistikharah": "sholatistikharah", "istikhoroh": "istikhoroh", "istikharoh": "istikharoh"}
export default handler
