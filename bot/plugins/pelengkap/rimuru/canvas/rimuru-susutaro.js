/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/susutaro.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "susutaro", "category": "canvas", "aliasMap": {"rimuru-canvas-susutaro": "susutaro", "rimuru-susutaro": "susutaro", "rimuru-taro": "taro", "susutaro": "susutaro", "taro": "taro"}, "description": "Memberikan efek Susu Taro pada gambar", "usage": ".susutaro <reply image>", "example": ".susutaro", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/susutaro.js", metadata, m, extra)
handler.help = ["rimuru-canvas-susutaro <reply image>"]
handler.command = ["rimuru-canvas-susutaro", "rimuru-susutaro", "rimuru-taro", "susutaro", "taro"]
handler.tags = ["canvas"]
handler.description = "Memberikan efek Susu Taro pada gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "susutaro", "alias": ["taro"], "category": "canvas", "description": "Memberikan efek Susu Taro pada gambar", "usage": ".susutaro <reply image>", "example": ".susutaro", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-susutaro": "susutaro", "rimuru-susutaro": "susutaro", "rimuru-taro": "taro", "susutaro": "susutaro", "taro": "taro"}
export default handler
