/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/cekakuntt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cektiktok", "category": "stalker", "aliasMap": {"rimuru-stalker-cektiktok": "cektiktok", "rimuru-cektiktok": "cektiktok", "rimuru-cekakuntt": "cekakuntt", "rimuru-cektt": "cektt", "cektiktok": "cektiktok", "cekakuntt": "cekakuntt"}, "description": "Cek informasi akun TikTok (terdaftar atau manual)", "usage": ".cektt <username>", "example": ".cektt faizprst7", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/cekakuntt.js", metadata, m, extra)
handler.help = ["rimuru-stalker-cektiktok <username>"]
handler.command = ["rimuru-stalker-cektiktok", "rimuru-cektiktok", "rimuru-cekakuntt", "rimuru-cektt", "cektiktok", "cekakuntt"]
handler.tags = ["stalker"]
handler.description = "Cek informasi akun TikTok (terdaftar atau manual)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cektiktok", "alias": ["cekakuntt", "cektt", "cektiktok"], "category": "stalker", "description": "Cek informasi akun TikTok (terdaftar atau manual)", "usage": ".cektt <username>", "example": ".cektt faizprst7", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-cektiktok": "cektiktok", "rimuru-cektiktok": "cektiktok", "rimuru-cekakuntt": "cekakuntt", "rimuru-cektt": "cektt", "cektiktok": "cektiktok", "cekakuntt": "cekakuntt"}
export default handler
