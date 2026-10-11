/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/compresspdf.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "compresspdf", "category": "tools", "aliasMap": {"rimuru-tools-compresspdf": "compresspdf", "rimuru-compresspdf": "compresspdf", "rimuru-komprespdf": "komprespdf", "rimuru-pdfcompress": "pdfcompress", "compresspdf": "compresspdf", "komprespdf": "komprespdf", "pdfcompress": "pdfcompress"}, "description": "Mengompres file PDF", "usage": ".compresspdf <reply/kirim PDF>", "example": ".compresspdf", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/compresspdf.js", metadata, m, extra)
handler.help = ["rimuru-tools-compresspdf <reply/kirim PDF>"]
handler.command = ["rimuru-tools-compresspdf", "rimuru-compresspdf", "rimuru-komprespdf", "rimuru-pdfcompress", "compresspdf", "komprespdf", "pdfcompress"]
handler.tags = ["tools"]
handler.description = "Mengompres file PDF"
handler.importSource = "rimuru"
handler.importConfig = {"name": "compresspdf", "alias": ["komprespdf", "pdfcompress"], "category": "tools", "description": "Mengompres file PDF", "usage": ".compresspdf <reply/kirim PDF>", "example": ".compresspdf", "cooldown": 15, "energi": 1}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-compresspdf": "compresspdf", "rimuru-compresspdf": "compresspdf", "rimuru-komprespdf": "komprespdf", "rimuru-pdfcompress": "pdfcompress", "compresspdf": "compresspdf", "komprespdf": "komprespdf", "pdfcompress": "pdfcompress"}
export default handler
