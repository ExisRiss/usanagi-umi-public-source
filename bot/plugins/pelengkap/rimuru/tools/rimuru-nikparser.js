/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/nikparser.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nikparser", "category": "tools", "aliasMap": {"rimuru-tools-nikparser": "nikparser", "rimuru-nikparser": "nikparser", "rimuru-nik": "nik", "rimuru-ceknik": "ceknik", "nikparser": "nikparser", "nik": "nik", "ceknik": "ceknik"}, "description": "Parse dan validasi NIK KTP", "usage": ".nikparser <16 digit NIK>", "example": ".nikparser 3517072109020003", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/nikparser.js", metadata, m, extra)
handler.help = ["rimuru-tools-nikparser <16 digit NIK>"]
handler.command = ["rimuru-tools-nikparser", "rimuru-nikparser", "rimuru-nik", "rimuru-ceknik", "nikparser", "nik", "ceknik"]
handler.tags = ["tools"]
handler.description = "Parse dan validasi NIK KTP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nikparser", "alias": ["nik", "ceknik"], "category": "tools", "description": "Parse dan validasi NIK KTP", "usage": ".nikparser <16 digit NIK>", "example": ".nikparser 3517072109020003", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-nikparser": "nikparser", "rimuru-nikparser": "nikparser", "rimuru-nik": "nik", "rimuru-ceknik": "ceknik", "nikparser": "nikparser", "nik": "nik", "ceknik": "ceknik"}
export default handler
