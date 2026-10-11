/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakengl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakengl", "category": "canvas", "aliasMap": {"rimuru-canvas-fakengl": "fakengl", "rimuru-fakengl": "fakengl", "rimuru-fngl": "fngl", "rimuru-nglfake": "nglfake", "fakengl": "fakengl", "fngl": "fngl", "nglfake": "nglfake"}, "description": "Membuat screenshot pesan NGL palsu (have fun only)", "usage": ".fakengl <teks>", "example": ".fakengl Gw tuh sebenarnya ultramen", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakengl.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakengl <teks>"]
handler.command = ["rimuru-canvas-fakengl", "rimuru-fakengl", "rimuru-fngl", "rimuru-nglfake", "fakengl", "fngl", "nglfake"]
handler.tags = ["canvas"]
handler.description = "Membuat screenshot pesan NGL palsu (have fun only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakengl", "alias": ["fngl", "nglfake"], "category": "canvas", "description": "Membuat screenshot pesan NGL palsu (have fun only)", "usage": ".fakengl <teks>", "example": ".fakengl Gw tuh sebenarnya ultramen", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-canvas-fakengl": "fakengl", "rimuru-fakengl": "fakengl", "rimuru-fngl": "fngl", "rimuru-nglfake": "nglfake", "fakengl": "fakengl", "fngl": "fngl", "nglfake": "nglfake"}
export default handler
