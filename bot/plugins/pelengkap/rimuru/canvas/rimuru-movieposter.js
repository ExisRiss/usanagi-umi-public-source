/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/movieposter.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "movieposter", "category": "canvas", "aliasMap": {"rimuru-canvas-movieposter": "movieposter", "rimuru-movieposter": "movieposter", "rimuru-posterfilm": "posterfilm", "rimuru-movieposterelaina": "movieposterelaina", "movieposter": "movieposter", "posterfilm": "posterfilm", "movieposterelaina": "movieposterelaina"}, "description": "Buat poster film bergaya sinematik dari nama, genre, dan judul", "usage": ".movieposter nama|genre|judul|tagline", "example": ".movieposter Anita Putri Azzahra|scifi|Rimuru: The Movie|The last slime standing", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/movieposter.js", metadata, m, extra)
handler.help = ["rimuru-canvas-movieposter nama|genre|judul|tagline"]
handler.command = ["rimuru-canvas-movieposter", "rimuru-movieposter", "rimuru-posterfilm", "rimuru-movieposterelaina", "movieposter", "posterfilm", "movieposterelaina"]
handler.tags = ["canvas"]
handler.description = "Buat poster film bergaya sinematik dari nama, genre, dan judul"
handler.importSource = "rimuru"
handler.importConfig = {"name": "movieposter", "alias": ["posterfilm", "movieposterelaina"], "category": "canvas", "description": "Buat poster film bergaya sinematik dari nama, genre, dan judul", "usage": ".movieposter nama|genre|judul|tagline", "example": ".movieposter Anita Putri Azzahra|scifi|Rimuru: The Movie|The last slime standing", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-movieposter": "movieposter", "rimuru-movieposter": "movieposter", "rimuru-posterfilm": "posterfilm", "rimuru-movieposterelaina": "movieposterelaina", "movieposter": "movieposter", "posterfilm": "posterfilm", "movieposterelaina": "movieposterelaina"}
export default handler
