/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/artaai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "arta", "category": "ai", "aliasMap": {"rimuru-ai-arta": "arta", "rimuru-arta": "arta", "rimuru-artagen": "artagen", "rimuru-artai": "artai", "rimuru-aiarta": "aiarta", "arta": "arta", "artagen": "artagen", "artai": "artai", "aiarta": "aiarta"}, "description": "Membuat gambar AI menggunakan Arta AI Generator", "usage": ".arta Prompt | Style | Negative Prompt", "example": ".arta beautiful anime girl with katana | Katayama-mix-xl | low quality, blurry", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/artaai.js", metadata, m, extra)
handler.help = ["rimuru-ai-arta Prompt | Style | Negative Prompt"]
handler.command = ["rimuru-ai-arta", "rimuru-arta", "rimuru-artagen", "rimuru-artai", "rimuru-aiarta", "arta", "artagen", "artai", "aiarta"]
handler.tags = ["ai"]
handler.description = "Membuat gambar AI menggunakan Arta AI Generator"
handler.importSource = "rimuru"
handler.importConfig = {"name": "arta", "alias": ["artagen", "artai", "aiarta"], "category": "ai", "description": "Membuat gambar AI menggunakan Arta AI Generator", "usage": ".arta Prompt | Style | Negative Prompt", "example": ".arta beautiful anime girl with katana | Katayama-mix-xl | low quality, blurry", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-arta": "arta", "rimuru-arta": "arta", "rimuru-artagen": "artagen", "rimuru-artai": "artai", "rimuru-aiarta": "aiarta", "arta": "arta", "artagen": "artagen", "artai": "artai", "aiarta": "aiarta"}
export default handler
