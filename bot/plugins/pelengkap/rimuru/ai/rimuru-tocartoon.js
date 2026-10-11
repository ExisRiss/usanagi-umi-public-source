/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/tocartoon.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tocartoon", "category": "ai", "aliasMap": {"rimuru-ai-tocartoon": "tocartoon", "rimuru-tocartoon": "tocartoon", "rimuru-cartoon": "cartoon", "rimuru-cartoonify": "cartoonify", "rimuru-tooncartoon": "tooncartoon", "tocartoon": "tocartoon", "cartoon": "cartoon", "cartoonify": "cartoonify", "tooncartoon": "tooncartoon"}, "description": "Ubah foto menjadi gaya kartun", "usage": ".tocartoon (reply/kirim gambar)", "example": ".tocartoon", "cooldown": 60, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/tocartoon.js", metadata, m, extra)
handler.help = ["rimuru-ai-tocartoon (reply/kirim gambar)"]
handler.command = ["rimuru-ai-tocartoon", "rimuru-tocartoon", "rimuru-cartoon", "rimuru-cartoonify", "rimuru-tooncartoon", "tocartoon", "cartoon", "cartoonify", "tooncartoon"]
handler.tags = ["ai"]
handler.description = "Ubah foto menjadi gaya kartun"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tocartoon", "alias": ["cartoon", "cartoonify", "tooncartoon"], "category": "ai", "description": "Ubah foto menjadi gaya kartun", "usage": ".tocartoon (reply/kirim gambar)", "example": ".tocartoon", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-tocartoon": "tocartoon", "rimuru-tocartoon": "tocartoon", "rimuru-cartoon": "cartoon", "rimuru-cartoonify": "cartoonify", "rimuru-tooncartoon": "tooncartoon", "tocartoon": "tocartoon", "cartoon": "cartoon", "cartoonify": "cartoonify", "tooncartoon": "tooncartoon"}
export default handler
