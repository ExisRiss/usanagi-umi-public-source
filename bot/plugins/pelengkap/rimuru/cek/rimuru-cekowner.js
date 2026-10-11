/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekowner.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekowner", "category": "cek", "aliasMap": {"rimuru-cek-cekowner": "cekowner", "rimuru-cekowner": "cekowner", "rimuru-ownerinfo": "ownerinfo", "cekowner": "cekowner", "ownerinfo": "ownerinfo"}, "description": "Cek apakah user adalah owner bot", "usage": ".cekowner @user", "example": ".cekowner", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekowner.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekowner @user"]
handler.command = ["rimuru-cek-cekowner", "rimuru-cekowner", "rimuru-ownerinfo", "cekowner", "ownerinfo"]
handler.tags = ["cek"]
handler.description = "Cek apakah user adalah owner bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekowner", "alias": ["ownerinfo"], "category": "cek", "description": "Cek apakah user adalah owner bot", "usage": ".cekowner @user", "example": ".cekowner", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekowner": "cekowner", "rimuru-cekowner": "cekowner", "rimuru-ownerinfo": "ownerinfo", "cekowner": "cekowner", "ownerinfo": "ownerinfo"}
export default handler
