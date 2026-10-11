/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hdvideo2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hdvideo2", "category": "tools", "aliasMap": {"rimuru-tools-hdvideo2": "hdvideo2", "rimuru-hdvideo2": "hdvideo2", "rimuru-enhancevideo2": "enhancevideo2", "rimuru-videohd2": "videohd2", "rimuru-videoenhance2": "videoenhance2", "rimuru-video2k2": "video2k2", "hdvideo2": "hdvideo2", "enhancevideo2": "enhancevideo2", "videohd2": "videohd2", "videoenhance2": "videoenhance2", "video2k2": "video2k2"}, "description": "Enhance/upscale video ke kualitas 2K dengan AI", "usage": ".hdvideo (reply video)", "example": ".hdvideo", "cooldown": 180, "energi": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hdvideo2.js", metadata, m, extra)
handler.help = ["rimuru-tools-hdvideo2 (reply video)"]
handler.command = ["rimuru-tools-hdvideo2", "rimuru-hdvideo2", "rimuru-enhancevideo2", "rimuru-videohd2", "rimuru-videoenhance2", "rimuru-video2k2", "hdvideo2", "enhancevideo2", "videohd2", "videoenhance2", "video2k2"]
handler.tags = ["tools"]
handler.description = "Enhance/upscale video ke kualitas 2K dengan AI"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hdvideo2", "alias": ["enhancevideo2", "videohd2", "videoenhance2", "video2k2"], "category": "tools", "description": "Enhance/upscale video ke kualitas 2K dengan AI", "usage": ".hdvideo (reply video)", "example": ".hdvideo", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 10, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-hdvideo2": "hdvideo2", "rimuru-hdvideo2": "hdvideo2", "rimuru-enhancevideo2": "enhancevideo2", "rimuru-videohd2": "videohd2", "rimuru-videoenhance2": "videoenhance2", "rimuru-video2k2": "video2k2", "hdvideo2": "hdvideo2", "enhancevideo2": "enhancevideo2", "videohd2": "videohd2", "videoenhance2": "videoenhance2", "video2k2": "video2k2"}
export default handler
