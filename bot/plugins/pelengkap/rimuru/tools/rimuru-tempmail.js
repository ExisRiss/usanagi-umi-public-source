/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/tempmail.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tempmail", "category": "tools", "aliasMap": {"rimuru-tools-tempmail": "tempmail", "rimuru-tempmail": "tempmail", "rimuru-tmpmail": "tmpmail", "rimuru-tmp": "tmp", "rimuru-trashmail": "trashmail", "tmpmail": "tmpmail", "tmp": "tmp", "trashmail": "trashmail"}, "description": "Buat email sementara & cek inbox", "usage": ".tempmail create/inbox", "example": ".tempmail create", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/tempmail.js", metadata, m, extra)
handler.help = ["rimuru-tools-tempmail create/inbox"]
handler.command = ["rimuru-tools-tempmail", "rimuru-tempmail", "rimuru-tmpmail", "rimuru-tmp", "rimuru-trashmail", "tmpmail", "tmp", "trashmail"]
handler.tags = ["tools"]
handler.description = "Buat email sementara & cek inbox"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tempmail", "alias": ["tmpmail", "tmp", "trashmail"], "category": "tools", "description": "Buat email sementara & cek inbox", "usage": ".tempmail create/inbox", "example": ".tempmail create", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-tempmail": "tempmail", "rimuru-tempmail": "tempmail", "rimuru-tmpmail": "tmpmail", "rimuru-tmp": "tmp", "rimuru-trashmail": "trashmail", "tmpmail": "tmpmail", "tmp": "tmp", "trashmail": "trashmail"}
export default handler
