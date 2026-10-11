/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanannounce.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanannounce", "category": "clan", "aliasMap": {"rimuru-clan-clanannounce": "clanannounce", "rimuru-clanannounce": "clanannounce", "rimuru-announce": "announce", "rimuru-clanbroadcast": "clanbroadcast", "rimuru-pengumuman": "pengumuman", "clanannounce": "clanannounce", "announce": "announce", "clanbroadcast": "clanbroadcast", "pengumuman": "pengumuman"}, "description": "Kirim pengumuman ke semua member clan", "usage": ".clanannounce <pesan>", "example": ".clanannounce Besok ada event war!", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanannounce.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanannounce <pesan>"]
handler.command = ["rimuru-clan-clanannounce", "rimuru-clanannounce", "rimuru-announce", "rimuru-clanbroadcast", "rimuru-pengumuman", "clanannounce", "announce", "clanbroadcast", "pengumuman"]
handler.tags = ["clan"]
handler.description = "Kirim pengumuman ke semua member clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanannounce", "alias": ["announce", "clanbroadcast", "pengumuman"], "category": "clan", "description": "Kirim pengumuman ke semua member clan", "usage": ".clanannounce <pesan>", "example": ".clanannounce Besok ada event war!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanannounce": "clanannounce", "rimuru-clanannounce": "clanannounce", "rimuru-announce": "announce", "rimuru-clanbroadcast": "clanbroadcast", "rimuru-pengumuman": "pengumuman", "clanannounce": "clanannounce", "announce": "announce", "clanbroadcast": "clanbroadcast", "pengumuman": "pengumuman"}
export default handler
