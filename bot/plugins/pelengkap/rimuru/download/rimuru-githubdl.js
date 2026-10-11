/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/githubdl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "githubdl", "category": "download", "aliasMap": {"rimuru-download-githubdl": "githubdl", "rimuru-githubdl": "githubdl", "rimuru-gitdl": "gitdl", "rimuru-gitclone": "gitclone", "rimuru-repodownload": "repodownload", "githubdl": "githubdl", "gitdl": "gitdl", "gitclone": "gitclone", "repodownload": "repodownload"}, "description": "Download repository GitHub sebagai ZIP", "usage": ".githubdl <user> <repo> <branch>", "example": ".githubdl niceplugin NiceBot main", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/githubdl.js", metadata, m, extra)
handler.help = ["rimuru-download-githubdl <user> <repo> <branch>"]
handler.command = ["rimuru-download-githubdl", "rimuru-githubdl", "rimuru-gitdl", "rimuru-gitclone", "rimuru-repodownload", "githubdl", "gitdl", "gitclone", "repodownload"]
handler.tags = ["download"]
handler.description = "Download repository GitHub sebagai ZIP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "githubdl", "alias": ["gitdl", "gitclone", "repodownload"], "category": "download", "description": "Download repository GitHub sebagai ZIP", "usage": ".githubdl <user> <repo> <branch>", "example": ".githubdl niceplugin NiceBot main", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-githubdl": "githubdl", "rimuru-githubdl": "githubdl", "rimuru-gitdl": "gitdl", "rimuru-gitclone": "gitclone", "rimuru-repodownload": "repodownload", "githubdl": "githubdl", "gitdl": "gitdl", "gitclone": "gitclone", "repodownload": "repodownload"}
export default handler
