/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekcreative.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekcreative", "category": "cek", "aliasMap": {"rimuru-cek-cekcreative": "cekcreative", "rimuru-cekcreative": "cekcreative", "rimuru-creative": "creative", "rimuru-kreatif": "kreatif", "kreatif": "kreatif"}, "description": "Cek tingkat kreativitas kamu", "usage": ".cekcreative <nama>", "example": ".cekcreative Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekcreative.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekcreative <nama>"]
handler.command = ["rimuru-cek-cekcreative", "rimuru-cekcreative", "rimuru-creative", "rimuru-kreatif", "kreatif"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kreativitas kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekcreative", "alias": ["creative", "kreatif"], "category": "cek", "description": "Cek tingkat kreativitas kamu", "usage": ".cekcreative <nama>", "example": ".cekcreative Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekcreative": "cekcreative", "rimuru-cekcreative": "cekcreative", "rimuru-creative": "creative", "rimuru-kreatif": "kreatif", "kreatif": "kreatif"}
export default handler
