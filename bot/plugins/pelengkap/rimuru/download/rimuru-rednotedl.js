/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/rednotedl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rednotedl", "category": "download", "aliasMap": {"rimuru-download-rednotedl": "rednotedl", "rimuru-rednotedl": "rednotedl", "rimuru-rednote": "rednote", "rimuru-xhsdl": "xhsdl", "rimuru-xiaohongshu": "xiaohongshu", "rednotedl": "rednotedl", "rednote": "rednote", "xhsdl": "xhsdl", "xiaohongshu": "xiaohongshu"}, "description": "Download video/foto dari RedNote (XiaoHongShu)", "usage": ".rednotedl <url>", "example": ".rednotedl https://www.xiaohongshu.com/xxx", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/rednotedl.js", metadata, m, extra)
handler.help = ["rimuru-download-rednotedl <url>"]
handler.command = ["rimuru-download-rednotedl", "rimuru-rednotedl", "rimuru-rednote", "rimuru-xhsdl", "rimuru-xiaohongshu", "rednotedl", "rednote", "xhsdl", "xiaohongshu"]
handler.tags = ["download"]
handler.description = "Download video/foto dari RedNote (XiaoHongShu)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rednotedl", "alias": ["rednote", "xhsdl", "xiaohongshu"], "category": "download", "description": "Download video/foto dari RedNote (XiaoHongShu)", "usage": ".rednotedl <url>", "example": ".rednotedl https://www.xiaohongshu.com/xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-rednotedl": "rednotedl", "rimuru-rednotedl": "rednotedl", "rimuru-rednote": "rednote", "rimuru-xhsdl": "xhsdl", "rimuru-xiaohongshu": "xiaohongshu", "rednotedl": "rednotedl", "rednote": "rednote", "xhsdl": "xhsdl", "xiaohongshu": "xiaohongshu"}
export default handler
