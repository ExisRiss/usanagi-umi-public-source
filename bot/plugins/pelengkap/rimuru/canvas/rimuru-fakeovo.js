/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeovo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeovo", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeovo": "fakeovo", "rimuru-fakeovo": "fakeovo", "rimuru-fake-ovo": "fake-ovo", "fakeovo": "fakeovo", "fake-ovo": "fake-ovo"}, "description": "Membuat canvas fake ovo", "usage": ".fake-ovo <nama>", "example": ".fake-ovo Jokowi", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeovo.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeovo <nama>"]
handler.command = ["rimuru-canvas-fakeovo", "rimuru-fakeovo", "rimuru-fake-ovo", "fakeovo", "fake-ovo"]
handler.tags = ["canvas"]
handler.description = "Membuat canvas fake ovo"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeovo", "alias": ["fake-ovo", "fakeovo"], "category": "canvas", "description": "Membuat canvas fake ovo", "usage": ".fake-ovo <nama>", "example": ".fake-ovo Jokowi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeovo": "fakeovo", "rimuru-fakeovo": "fakeovo", "rimuru-fake-ovo": "fake-ovo", "fakeovo": "fakeovo", "fake-ovo": "fake-ovo"}
export default handler
