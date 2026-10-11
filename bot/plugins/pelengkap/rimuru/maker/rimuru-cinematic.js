/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/cinematic.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cinematic", "category": "maker", "aliasMap": {"rimuru-maker-cinematic": "cinematic", "rimuru-cinematic": "cinematic", "rimuru-moody": "moody", "rimuru-darktone": "darktone", "rimuru-nighttone": "nighttone", "rimuru-filterdark": "filterdark", "rimuru-flashmood": "flashmood", "cinematic": "cinematic", "moody": "moody", "darktone": "darktone", "nighttone": "nighttone", "filterdark": "filterdark", "flashmood": "flashmood"}, "description": "Mengubah foto biasa menjadi Cinematic Dark Retro Flash Tone presisi", "usage": ".cinematic (Kirim/Reply Foto)", "example": ".cinematic"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/cinematic.js", metadata, m, extra)
handler.help = ["rimuru-maker-cinematic (Kirim/Reply Foto)"]
handler.command = ["rimuru-maker-cinematic", "rimuru-cinematic", "rimuru-moody", "rimuru-darktone", "rimuru-nighttone", "rimuru-filterdark", "rimuru-flashmood", "cinematic", "moody", "darktone", "nighttone", "filterdark", "flashmood"]
handler.tags = ["maker"]
handler.description = "Mengubah foto biasa menjadi Cinematic Dark Retro Flash Tone presisi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cinematic", "alias": ["moody", "darktone", "nighttone", "filterdark", "flashmood"], "category": "maker", "description": "Mengubah foto biasa menjadi Cinematic Dark Retro Flash Tone presisi", "usage": ".cinematic (Kirim/Reply Foto)", "example": ".cinematic", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-cinematic": "cinematic", "rimuru-cinematic": "cinematic", "rimuru-moody": "moody", "rimuru-darktone": "darktone", "rimuru-nighttone": "nighttone", "rimuru-filterdark": "filterdark", "rimuru-flashmood": "flashmood", "cinematic": "cinematic", "moody": "moody", "darktone": "darktone", "nighttone": "nighttone", "filterdark": "filterdark", "flashmood": "flashmood"}
export default handler
