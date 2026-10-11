/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/logogold.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "logo-gold", "category": "maker", "aliasMap": {"rimuru-maker-logo-gold": "logo-gold", "rimuru-logo-gold": "logo-gold", "rimuru-logogold": "logogold", "rimuru-goldlogo": "goldlogo", "rimuru-goldtext": "goldtext", "rimuru-emastulisan": "emastulisan", "logo-gold": "logo-gold", "logogold": "logogold", "goldlogo": "goldlogo", "goldtext": "goldtext", "emastulisan": "emastulisan"}, "description": "Buat logo dengan efek emas mewah (gold premium)", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/logogold.js", metadata, m, extra)
handler.help = ["rimuru-maker-logo-gold"]
handler.command = ["rimuru-maker-logo-gold", "rimuru-logo-gold", "rimuru-logogold", "rimuru-goldlogo", "rimuru-goldtext", "rimuru-emastulisan", "logo-gold", "logogold", "goldlogo", "goldtext", "emastulisan"]
handler.tags = ["maker"]
handler.description = "Buat logo dengan efek emas mewah (gold premium)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "logo-gold", "alias": ["logogold", "goldlogo", "goldtext", "emastulisan"], "category": "maker", "description": "Buat logo dengan efek emas mewah (gold premium)", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-logo-gold": "logo-gold", "rimuru-logo-gold": "logo-gold", "rimuru-logogold": "logogold", "rimuru-goldlogo": "goldlogo", "rimuru-goldtext": "goldtext", "rimuru-emastulisan": "emastulisan", "logo-gold": "logo-gold", "logogold": "logogold", "goldlogo": "goldlogo", "goldtext": "goldtext", "emastulisan": "emastulisan"}
export default handler
