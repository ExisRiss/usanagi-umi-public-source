/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/downloader/mcpedldl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mcpedldl", "category": "downloader", "aliasMap": {"rimuru-downloader-mcpedldl": "mcpedldl", "rimuru-mcpedldl": "mcpedldl", "rimuru-dlmcpedl": "dlmcpedl", "rimuru-mcpedldownload": "mcpedldownload", "rimuru-mcdl": "mcdl", "mcpedldl": "mcpedldl", "dlmcpedl": "dlmcpedl", "mcpedldownload": "mcpedldownload", "mcdl": "mcdl"}, "description": "Mengunduh file atau mengambil detail dari MCPEDL", "usage": ".mcpedldl <url/slug>", "example": ".mcpedldl lunac-shaders", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/downloader/mcpedldl.js", metadata, m, extra)
handler.help = ["rimuru-downloader-mcpedldl <url/slug>"]
handler.command = ["rimuru-downloader-mcpedldl", "rimuru-mcpedldl", "rimuru-dlmcpedl", "rimuru-mcpedldownload", "rimuru-mcdl", "mcpedldl", "dlmcpedl", "mcpedldownload", "mcdl"]
handler.tags = ["downloader"]
handler.description = "Mengunduh file atau mengambil detail dari MCPEDL"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mcpedldl", "alias": ["dlmcpedl", "mcpedldownload", "mcdl"], "category": "downloader", "description": "Mengunduh file atau mengambil detail dari MCPEDL", "usage": ".mcpedldl <url/slug>", "example": ".mcpedldl lunac-shaders", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-downloader-mcpedldl": "mcpedldl", "rimuru-mcpedldl": "mcpedldl", "rimuru-dlmcpedl": "dlmcpedl", "rimuru-mcpedldownload": "mcpedldownload", "rimuru-mcdl": "mcdl", "mcpedldl": "mcpedldl", "dlmcpedl": "dlmcpedl", "mcpedldownload": "mcpedldownload", "mcdl": "mcdl"}
export default handler
