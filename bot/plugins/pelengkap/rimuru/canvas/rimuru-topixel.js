/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/topixel.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "topixel", "category": "canvas", "aliasMap": {"rimuru-canvas-topixel": "topixel", "rimuru-topixel": "topixel", "rimuru-pixelate": "pixelate", "rimuru-pixelart": "pixelart", "topixel": "topixel", "pixelate": "pixelate", "pixelart": "pixelart"}, "description": "Ubah foto kamu jadi gambar pixel art yang keren", "usage": ".topixel [level] (reply/kirim foto)", "example": ".topixel 30", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/topixel.js", metadata, m, extra)
handler.help = ["rimuru-canvas-topixel [level] (reply/kirim foto)"]
handler.command = ["rimuru-canvas-topixel", "rimuru-topixel", "rimuru-pixelate", "rimuru-pixelart", "topixel", "pixelate", "pixelart"]
handler.tags = ["canvas"]
handler.description = "Ubah foto kamu jadi gambar pixel art yang keren"
handler.importSource = "rimuru"
handler.importConfig = {"name": "topixel", "alias": ["pixelate", "pixelart"], "category": "canvas", "description": "Ubah foto kamu jadi gambar pixel art yang keren", "usage": ".topixel [level] (reply/kirim foto)", "example": ".topixel 30", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-topixel": "topixel", "rimuru-topixel": "topixel", "rimuru-pixelate": "pixelate", "rimuru-pixelart": "pixelart", "topixel": "topixel", "pixelate": "pixelate", "pixelart": "pixelart"}
export default handler
