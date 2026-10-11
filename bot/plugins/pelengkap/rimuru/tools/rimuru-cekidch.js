/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/cekidch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekidch", "category": "tools", "aliasMap": {"rimuru-tools-cekidch": "cekidch", "rimuru-cekidch": "cekidch", "rimuru-idch": "idch", "rimuru-channelid": "channelid", "rimuru-infoch": "infoch", "idch": "idch", "channelid": "channelid", "infoch": "infoch", "channelinfo": "channelinfo"}, "description": "Cek ID dan info lengkap channel dari link", "usage": ".cekidch <link channel>", "example": ".cekidch https://whatsapp.com/channel/xxxxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/cekidch.js", metadata, m, extra)
handler.help = ["rimuru-tools-cekidch <link channel>"]
handler.command = ["rimuru-tools-cekidch", "rimuru-cekidch", "rimuru-idch", "rimuru-channelid", "rimuru-infoch", "idch", "channelid", "infoch", "channelinfo"]
handler.tags = ["tools"]
handler.description = "Cek ID dan info lengkap channel dari link"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekidch", "alias": ["idch", "channelid", "infoch", "channelinfo"], "category": "tools", "description": "Cek ID dan info lengkap channel dari link", "usage": ".cekidch <link channel>", "example": ".cekidch https://whatsapp.com/channel/xxxxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-cekidch": "cekidch", "rimuru-cekidch": "cekidch", "rimuru-idch": "idch", "rimuru-channelid": "channelid", "rimuru-infoch": "infoch", "idch": "idch", "channelid": "channelid", "infoch": "infoch", "channelinfo": "channelinfo"}
export default handler
