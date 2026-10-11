/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hitungwrmlbb.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hitungwrmlbb", "category": "tools", "aliasMap": {"rimuru-tools-hitungwrmlbb": "hitungwrmlbb", "rimuru-hitungwrmlbb": "hitungwrmlbb", "rimuru-wrml": "wrml", "rimuru-wrmlbb": "wrmlbb", "rimuru-winrate": "winrate", "hitungwrmlbb": "hitungwrmlbb", "wrml": "wrml", "wrmlbb": "wrmlbb", "winrate": "winrate"}, "description": "Hitung kebutuhan win tanpa lose untuk mencapai target win rate di Mobile Legends.", "usage": ".hitungwrmlbb <total_match> <wr_sekarang> <wr_target>", "example": ".hitungwrmlbb 4242 22 88", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hitungwrmlbb.js", metadata, m, extra)
handler.help = ["rimuru-tools-hitungwrmlbb <total_match> <wr_sekarang> <wr_target>"]
handler.command = ["rimuru-tools-hitungwrmlbb", "rimuru-hitungwrmlbb", "rimuru-wrml", "rimuru-wrmlbb", "rimuru-winrate", "hitungwrmlbb", "wrml", "wrmlbb", "winrate"]
handler.tags = ["tools"]
handler.description = "Hitung kebutuhan win tanpa lose untuk mencapai target win rate di Mobile Legends."
handler.importSource = "rimuru"
handler.importConfig = {"name": "hitungwrmlbb", "alias": ["wrml", "wrmlbb", "winrate"], "category": "tools", "description": "Hitung kebutuhan win tanpa lose untuk mencapai target win rate di Mobile Legends.", "usage": ".hitungwrmlbb <total_match> <wr_sekarang> <wr_target>", "example": ".hitungwrmlbb 4242 22 88", "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-hitungwrmlbb": "hitungwrmlbb", "rimuru-hitungwrmlbb": "hitungwrmlbb", "rimuru-wrml": "wrml", "rimuru-wrmlbb": "wrmlbb", "rimuru-winrate": "winrate", "hitungwrmlbb": "hitungwrmlbb", "wrml": "wrml", "wrmlbb": "wrmlbb", "winrate": "winrate"}
export default handler
