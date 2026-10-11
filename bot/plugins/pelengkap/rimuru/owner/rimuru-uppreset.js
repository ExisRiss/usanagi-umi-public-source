/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/uppreset.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "uppreset", "category": "owner", "aliasMap": {"rimuru-owner-uppreset": "uppreset", "rimuru-uppreset": "uppreset", "rimuru-uploadpreset": "uploadpreset", "rimuru-sendpreset": "sendpreset", "uppreset": "uppreset", "uploadpreset": "uploadpreset", "sendpreset": "sendpreset"}, "description": "Upload preset ke channel", "usage": ".uppreset link5mb | linkxml | caption", "example": ".uppreset https://5mb.link | https://xml.link | preset jj anime", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/uppreset.js", metadata, m, extra)
handler.help = ["rimuru-owner-uppreset link5mb | linkxml | caption"]
handler.command = ["rimuru-owner-uppreset", "rimuru-uppreset", "rimuru-uploadpreset", "rimuru-sendpreset", "uppreset", "uploadpreset", "sendpreset"]
handler.tags = ["owner"]
handler.description = "Upload preset ke channel"
handler.importSource = "rimuru"
handler.importConfig = {"name": "uppreset", "alias": ["uploadpreset", "sendpreset"], "category": "owner", "description": "Upload preset ke channel", "usage": ".uppreset link5mb | linkxml | caption", "example": ".uppreset https://5mb.link | https://xml.link | preset jj anime", "isOwner": true, "cooldown": 5, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-uppreset": "uppreset", "rimuru-uppreset": "uppreset", "rimuru-uploadpreset": "uploadpreset", "rimuru-sendpreset": "sendpreset", "uppreset": "uppreset", "uploadpreset": "uploadpreset", "sendpreset": "sendpreset"}
export default handler
