/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/rimurubanana2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rimurubanana2", "category": "ai", "aliasMap": {"rimuru-ai-rimurubanana2": "rimurubanana2", "rimuru-rimurubanana2": "rimurubanana2", "rimurubanana2": "rimurubanana2"}, "description": "Buat gambar dengan AI menggunakan prompt", "usage": ".rimurubanana2 <prompt>", "example": ".rimurubanana2 make it anime style", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/rimurubanana2.js", metadata, m, extra)
handler.help = ["rimuru-ai-rimurubanana2 <prompt>"]
handler.command = ["rimuru-ai-rimurubanana2", "rimuru-rimurubanana2", "rimurubanana2"]
handler.tags = ["ai"]
handler.description = "Buat gambar dengan AI menggunakan prompt"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rimurubanana2", "alias": [], "category": "ai", "description": "Buat gambar dengan AI menggunakan prompt", "usage": ".rimurubanana2 <prompt>", "example": ".rimurubanana2 make it anime style", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-rimurubanana2": "rimurubanana2", "rimuru-rimurubanana2": "rimurubanana2", "rimurubanana2": "rimurubanana2"}
export default handler
