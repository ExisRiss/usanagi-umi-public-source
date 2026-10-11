/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/bandingkan-hp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bandingkan-hp", "category": "tools", "aliasMap": {"rimuru-tools-bandingkan-hp": "bandingkan-hp", "rimuru-bandingkan-hp": "bandingkan-hp", "rimuru-bandingkanhp": "bandingkanhp", "rimuru-comparehp": "comparehp", "bandingkan-hp": "bandingkan-hp", "bandingkanhp": "bandingkanhp", "comparehp": "comparehp"}, "description": "Membandingkan dua spesifikasi smartphone dari Carisinyal.", "usage": ".bandingkan-hp <hp1> | <hp2>", "example": ".bandingkan-hp oppo a3s | vivo y91", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/bandingkan-hp.js", metadata, m, extra)
handler.help = ["rimuru-tools-bandingkan-hp <hp1> | <hp2>"]
handler.command = ["rimuru-tools-bandingkan-hp", "rimuru-bandingkan-hp", "rimuru-bandingkanhp", "rimuru-comparehp", "bandingkan-hp", "bandingkanhp", "comparehp"]
handler.tags = ["tools"]
handler.description = "Membandingkan dua spesifikasi smartphone dari Carisinyal."
handler.importSource = "rimuru"
handler.importConfig = {"name": "bandingkan-hp", "alias": ["bandingkanhp", "comparehp"], "category": "tools", "description": "Membandingkan dua spesifikasi smartphone dari Carisinyal.", "usage": ".bandingkan-hp <hp1> | <hp2>", "example": ".bandingkan-hp oppo a3s | vivo y91", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-bandingkan-hp": "bandingkan-hp", "rimuru-bandingkan-hp": "bandingkan-hp", "rimuru-bandingkanhp": "bandingkanhp", "rimuru-comparehp": "comparehp", "bandingkan-hp": "bandingkan-hp", "bandingkanhp": "bandingkanhp", "comparehp": "comparehp"}
export default handler
