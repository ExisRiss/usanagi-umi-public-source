/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/random/superhero.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "superhero", "category": "random", "aliasMap": {"rimuru-random-superhero": "superhero", "rimuru-superhero": "superhero", "rimuru-hero": "hero", "rimuru-pahlawan": "pahlawan", "superhero": "superhero", "hero": "hero", "pahlawan": "pahlawan"}, "description": "Cari informasi superhero", "usage": ".superhero <nama>", "example": ".superhero batman", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/random/superhero.js", metadata, m, extra)
handler.help = ["rimuru-random-superhero <nama>"]
handler.command = ["rimuru-random-superhero", "rimuru-superhero", "rimuru-hero", "rimuru-pahlawan", "superhero", "hero", "pahlawan"]
handler.tags = ["random"]
handler.description = "Cari informasi superhero"
handler.importSource = "rimuru"
handler.importConfig = {"name": "superhero", "alias": ["hero", "pahlawan"], "category": "random", "description": "Cari informasi superhero", "usage": ".superhero <nama>", "example": ".superhero batman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-random-superhero": "superhero", "rimuru-superhero": "superhero", "rimuru-hero": "hero", "rimuru-pahlawan": "pahlawan", "superhero": "superhero", "hero": "hero", "pahlawan": "pahlawan"}
export default handler
