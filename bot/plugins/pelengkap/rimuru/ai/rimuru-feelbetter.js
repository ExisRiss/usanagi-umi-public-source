/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/feelbetter.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "feelbetter", "category": "ai", "aliasMap": {"rimuru-ai-feelbetter": "feelbetter", "rimuru-feelbetter": "feelbetter", "rimuru-feelbetterbot": "feelbetterbot", "rimuru-healing": "healing", "feelbetter": "feelbetter", "feelbetterbot": "feelbetterbot", "healing": "healing"}, "description": "Chat dengan FeelBetterBot — AI yang siap mendengarkan tanpa menghakimi", "usage": ".feelbetter <curhat/pertanyaan>", "example": ".feelbetter lagi sedih nih", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/feelbetter.js", metadata, m, extra)
handler.help = ["rimuru-ai-feelbetter <curhat/pertanyaan>"]
handler.command = ["rimuru-ai-feelbetter", "rimuru-feelbetter", "rimuru-feelbetterbot", "rimuru-healing", "feelbetter", "feelbetterbot", "healing"]
handler.tags = ["ai"]
handler.description = "Chat dengan FeelBetterBot — AI yang siap mendengarkan tanpa menghakimi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "feelbetter", "alias": ["fb", "feelbetterbot", "healing"], "category": "ai", "description": "Chat dengan FeelBetterBot — AI yang siap mendengarkan tanpa menghakimi", "usage": ".feelbetter <curhat/pertanyaan>", "example": ".feelbetter lagi sedih nih", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-feelbetter": "feelbetter", "rimuru-feelbetter": "feelbetter", "rimuru-feelbetterbot": "feelbetterbot", "rimuru-healing": "healing", "feelbetter": "feelbetter", "feelbetterbot": "feelbetterbot", "healing": "healing"}
export default handler
