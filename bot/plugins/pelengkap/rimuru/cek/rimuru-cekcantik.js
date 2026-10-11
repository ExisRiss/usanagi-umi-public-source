/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekcantik.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekcantik", "category": "cek", "aliasMap": {"rimuru-cek-cekcantik": "cekcantik", "rimuru-cekcantik": "cekcantik", "rimuru-cantik": "cantik", "rimuru-beautiful": "beautiful", "beautiful": "beautiful"}, "description": "Cek seberapa cantik kamu", "usage": ".cekcantik <nama>", "example": ".cekcantik Ani", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekcantik.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekcantik <nama>"]
handler.command = ["rimuru-cek-cekcantik", "rimuru-cekcantik", "rimuru-cantik", "rimuru-beautiful", "beautiful"]
handler.tags = ["cek"]
handler.description = "Cek seberapa cantik kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekcantik", "alias": ["cantik", "beautiful"], "category": "cek", "description": "Cek seberapa cantik kamu", "usage": ".cekcantik <nama>", "example": ".cekcantik Ani", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekcantik": "cekcantik", "rimuru-cekcantik": "cekcantik", "rimuru-cantik": "cantik", "rimuru-beautiful": "beautiful", "beautiful": "beautiful"}
export default handler
