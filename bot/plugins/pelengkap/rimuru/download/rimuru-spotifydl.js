/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/spotifydl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spotifydl", "category": "download", "aliasMap": {"rimuru-download-spotifydl": "spotifydl", "rimuru-spotifydl": "spotifydl", "rimuru-spdl": "spdl", "rimuru-spotify-dl": "spotify-dl", "rimuru-spotdl": "spotdl", "spotifydl": "spotifydl", "spotify-dl": "spotify-dl"}, "description": "Unduh lagu favoritmu langsung dari Spotify tanpa ribet!", "usage": ".spdl <link>", "example": ".spdl https://open.spotify.com/track/...", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/spotifydl.js", metadata, m, extra)
handler.help = ["rimuru-download-spotifydl <link>"]
handler.command = ["rimuru-download-spotifydl", "rimuru-spotifydl", "rimuru-spdl", "rimuru-spotify-dl", "rimuru-spotdl", "spotifydl", "spotify-dl"]
handler.tags = ["download"]
handler.description = "Unduh lagu favoritmu langsung dari Spotify tanpa ribet!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spotifydl", "alias": ["spdl", "spotify-dl", "spotdl"], "category": "download", "description": "Unduh lagu favoritmu langsung dari Spotify tanpa ribet!", "usage": ".spdl <link>", "example": ".spdl https://open.spotify.com/track/...", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-spotifydl": "spotifydl", "rimuru-spotifydl": "spotifydl", "rimuru-spdl": "spdl", "rimuru-spotify-dl": "spotify-dl", "rimuru-spotdl": "spotdl", "spotifydl": "spotifydl", "spotify-dl": "spotify-dl"}
export default handler
