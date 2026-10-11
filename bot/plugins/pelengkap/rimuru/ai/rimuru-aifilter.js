/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/aifilter.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "aifilter", "category": "ai", "aliasMap": {"rimuru-ai-aifilter": "aifilter", "rimuru-aifilter": "aifilter", "rimuru-filterai": "filterai", "rimuru-filterreaction": "filterreaction", "rimuru-filter-reaction": "filter-reaction", "rimuru-reactionfilter": "reactionfilter", "aifilter": "aifilter", "filterai": "filterai", "filterreaction": "filterreaction", "filter-reaction": "filter-reaction", "reactionfilter": "reactionfilter"}, "description": "AI image filter dan perubahan ekspresi wajah, diadaptasi dari CANTARELLA", "usage": ".aifilter <style> (reply gambar) / .filterreaction <expression> (reply gambar)", "example": ".aifilter anime", "cooldown": 30, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/aifilter.js", metadata, m, extra)
handler.help = ["rimuru-ai-aifilter <style> (reply gambar) / .filterreaction <expression> (reply gambar)"]
handler.command = ["rimuru-ai-aifilter", "rimuru-aifilter", "rimuru-filterai", "rimuru-filterreaction", "rimuru-filter-reaction", "rimuru-reactionfilter", "aifilter", "filterai", "filterreaction", "filter-reaction", "reactionfilter"]
handler.tags = ["ai"]
handler.description = "AI image filter dan perubahan ekspresi wajah, diadaptasi dari CANTARELLA"
handler.importSource = "rimuru"
handler.importConfig = {"name": "aifilter", "alias": ["filterai", "filterreaction", "filter-reaction", "reactionfilter"], "category": "ai", "description": "AI image filter dan perubahan ekspresi wajah, diadaptasi dari CANTARELLA", "usage": ".aifilter <style> (reply gambar) / .filterreaction <expression> (reply gambar)", "example": ".aifilter anime", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-aifilter": "aifilter", "rimuru-aifilter": "aifilter", "rimuru-filterai": "filterai", "rimuru-filterreaction": "filterreaction", "rimuru-filter-reaction": "filter-reaction", "rimuru-reactionfilter": "reactionfilter", "aifilter": "aifilter", "filterai": "filterai", "filterreaction": "filterreaction", "filter-reaction": "filter-reaction", "reactionfilter": "reactionfilter"}
export default handler
