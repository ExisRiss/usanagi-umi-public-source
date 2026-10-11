/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/rimurubanana.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rimurubanana", "category": "ai", "aliasMap": {"rimuru-ai-rimurubanana": "rimurubanana", "rimuru-rimurubanana": "rimurubanana", "rimurubanana": "rimurubanana"}, "description": "Edit gambar dengan AI menggunakan prompt", "usage": ".rimurubanana <prompt>", "example": ".rimurubanana make it anime style", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/rimurubanana.js", metadata, m, extra)
handler.help = ["rimuru-ai-rimurubanana <prompt>"]
handler.command = ["rimuru-ai-rimurubanana", "rimuru-rimurubanana", "rimurubanana"]
handler.tags = ["ai"]
handler.description = "Edit gambar dengan AI menggunakan prompt"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rimurubanana", "alias": [], "category": "ai", "description": "Edit gambar dengan AI menggunakan prompt", "usage": ".rimurubanana <prompt>", "example": ".rimurubanana make it anime style", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-rimurubanana": "rimurubanana", "rimuru-rimurubanana": "rimurubanana", "rimurubanana": "rimurubanana"}
export default handler
