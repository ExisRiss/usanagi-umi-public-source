/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/logoglow.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "logo-glow", "category": "maker", "aliasMap": {"rimuru-maker-logo-glow": "logo-glow", "rimuru-logo-glow": "logo-glow", "rimuru-logoglow": "logoglow", "rimuru-neonlogo": "neonlogo", "rimuru-glowlogo": "glowlogo", "logo-glow": "logo-glow", "logoglow": "logoglow", "neonlogo": "neonlogo", "glowlogo": "glowlogo"}, "description": "Buat logo dengan efek neon glow", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/logoglow.js", metadata, m, extra)
handler.help = ["rimuru-maker-logo-glow"]
handler.command = ["rimuru-maker-logo-glow", "rimuru-logo-glow", "rimuru-logoglow", "rimuru-neonlogo", "rimuru-glowlogo", "logo-glow", "logoglow", "neonlogo", "glowlogo"]
handler.tags = ["maker"]
handler.description = "Buat logo dengan efek neon glow"
handler.importSource = "rimuru"
handler.importConfig = {"name": "logo-glow", "alias": ["logoglow", "neonlogo", "glowlogo"], "category": "maker", "description": "Buat logo dengan efek neon glow", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-logo-glow": "logo-glow", "rimuru-logo-glow": "logo-glow", "rimuru-logoglow": "logoglow", "rimuru-neonlogo": "neonlogo", "rimuru-glowlogo": "glowlogo", "logo-glow": "logo-glow", "logoglow": "logoglow", "neonlogo": "neonlogo", "glowlogo": "glowlogo"}
export default handler
