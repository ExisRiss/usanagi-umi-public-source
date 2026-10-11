/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/characterai.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "character-ai", "category": "ai", "aliasMap": {"rimuru-ai-character-ai": "character-ai", "rimuru-character-ai": "character-ai", "rimuru-cai": "cai", "rimuru-charai": "charai", "character-ai": "character-ai", "cai": "cai", "charai": "charai"}, "description": "Cari karakter AI dan jadikan sebagai Auto AI di chat ini", "usage": ".character-ai search <nama> | .character-ai off | .character-ai reset", "example": ".character-ai search yuji", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/characterai.js", metadata, m, extra)
handler.help = ["rimuru-ai-character-ai search <nama> | .character-ai off | .character-ai reset"]
handler.command = ["rimuru-ai-character-ai", "rimuru-character-ai", "rimuru-cai", "rimuru-charai", "character-ai", "cai", "charai"]
handler.tags = ["ai"]
handler.description = "Cari karakter AI dan jadikan sebagai Auto AI di chat ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "character-ai", "alias": ["cai", "charai"], "category": "ai", "description": "Cari karakter AI dan jadikan sebagai Auto AI di chat ini", "usage": ".character-ai search <nama> | .character-ai off | .character-ai reset", "example": ".character-ai search yuji", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-character-ai": "character-ai", "rimuru-character-ai": "character-ai", "rimuru-cai": "cai", "rimuru-charai": "charai", "character-ai": "character-ai", "cai": "cai", "charai": "charai"}
export default handler
