/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekpsikopat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekpsikopat", "category": "cek", "aliasMap": {"rimuru-cek-cekpsikopat": "cekpsikopat", "rimuru-cekpsikopat": "cekpsikopat", "rimuru-psikopat": "psikopat", "rimuru-psycho": "psycho", "psycho": "psycho"}, "description": "Cek seberapa psikopat kamu", "usage": ".cekpsikopat <nama>", "example": ".cekpsikopat Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekpsikopat.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekpsikopat <nama>"]
handler.command = ["rimuru-cek-cekpsikopat", "rimuru-cekpsikopat", "rimuru-psikopat", "rimuru-psycho", "psycho"]
handler.tags = ["cek"]
handler.description = "Cek seberapa psikopat kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekpsikopat", "alias": ["psikopat", "psycho"], "category": "cek", "description": "Cek seberapa psikopat kamu", "usage": ".cekpsikopat <nama>", "example": ".cekpsikopat Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekpsikopat": "cekpsikopat", "rimuru-cekpsikopat": "cekpsikopat", "rimuru-psikopat": "psikopat", "rimuru-psycho": "psycho", "psycho": "psycho"}
export default handler
