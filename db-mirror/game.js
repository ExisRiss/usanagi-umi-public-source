/*
 * Umi Web Multiplayer Games — server game web yang terhubung ke bot WhatsApp.
 *
 * Berjalan di container yang sama dengan Umi DB Mirror (panel beyy), port
 * internal 3900, diteruskan Cloudflare Tunnel ke https://game.gwenna.my.id.
 * Hanya memakai modul bawaan Node (realtime via Server-Sent Events).
 *
 * Alur meja (room):
 *   1. Room dibuat dari WhatsApp (plugin bot) atau dari website.
 *      URL room acak: /uno/AbC123xYz9 (10 karakter).
 *   2. Pemain harus verifikasi nomor WhatsApp dulu untuk duduk:
 *      kirim "/uno <id-room>" ke bot utama -> bot memanggil /verify ->
 *      pemain menerima kode masuk 6 digit -> isi kode di halaman room.
 *      Alternatif: isi nama+nomor WA di halaman room (kursi pending),
 *      lalu kirim pesan verifikasi yang sama -> kursi aktif otomatis.
 *   3. Host memulai game. Kursi kosong boleh diisi bot AI (fillBots)
 *      sampai jumlah pemain yang dipilih (mis. 2, 3, 4 orang).
 *
 * Endpoint bot (Bearer token dari ./game-token.txt):
 *   POST /api/rooms            {game,name,number} -> buat room + kursi terverifikasi
 *   POST /api/rooms/:id/verify {name,number}      -> verifikasi/duduk + kode masuk
 * Endpoint publik:
 *   GET  /health, GET / (lobi), GET /:game/:id (halaman room)
 *   POST /api/rooms            {game,name,number} -> room + kursi pending (web)
 *   POST /api/rooms/:id/claim  {name,number}      -> minta kursi (pending)
 *   POST /api/rooms/:id/enter  {entryCode}        -> tukarkan kode masuk -> token kursi
 *   GET  /api/rooms/:id/events?token=...          -> SSE status room (tersanitasi)
 *   POST /api/rooms/:id/action {token,action}     -> aksi game / host / chat
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
let GAME_TOKEN = ''
try { GAME_TOKEN = fs.readFileSync(path.join(process.cwd(), 'game-token.txt'), 'utf8').trim() } catch {}
if (!GAME_TOKEN) GAME_TOKEN = String(process.env.UMI_GAME_TOKEN || '').trim()

/*
 * Mode masuk bebas (open join).
 *
 * Verifikasi WhatsApp butuh bot utama yang tersambung. Kalau bot utama sedang
 * dimatikan (MAIN_BOT_ENABLED=false / pairing off), tidak ada satu pun pemain
 * yang bisa duduk — host sendiri pun terkunci oleh "Kursimu belum
 * terverifikasi WhatsApp", jadi meja tidak bisa dimainkan sama sekali.
 *
 * Selama mode ini aktif, kursi yang diminta dari website langsung dianggap
 * terverifikasi. Halaman room menampilkannya sebagai peringatan yang jelas, dan
 * host boleh mematikannya per meja. Kembalikan ke wajib verifikasi dengan
 * UMI_GAME_OPEN_JOIN=0 setelah bot utama online lagi.
 */
const OPEN_JOIN_DEFAULT = String(process.env.UMI_GAME_OPEN_JOIN || '1').toLowerCase() !== '0'

/* URL verifikasi token UMI (halaman Profil di jadibot).
 * Dulu diarahkan ke http://167.99.67.212:3480/api/verify — IP node lama yang
 * sudah mati dan endpoint-nya memang tidak pernah ada, jadi login trading
 * selalu gagal walau tokennya benar. Ganti dengan endpoint platform:
 *   POST { token } -> { ok, user:{ username, roles, owner } }
 * Bisa ditimpa lewat env UMI_VERIFY_URL kalau backend pindah lagi. */
const VERIFY_URL = String(process.env.UMI_VERIFY_URL || 'https://jadibot-alzriss.gwenna.my.id/api/platform/verify-token').trim()
/* Endpoint top up: tarik saldo UMI (Rp) jadi $AS lewat platform. */
const TOPUP_URL = String(process.env.UMI_TOPUP_URL || 'https://jadibot-alzriss.gwenna.my.id/api/platform/game-topup').trim()

/* `cmd` adalah nama perintah WhatsApp yang benar-benar diterima plugin
 * bot/plugins/game/game-webmultiplayer.js. Catur, ular tangga, dan werewolf
 * pakai akhiran `web` karena nama polosnya sudah dipakai game WhatsApp lama —
 * halaman web harus memakai nama yang sama, kalau tidak bot tidak menjawab. */
const GAMES = {
    uno: { label: 'UNO', emoji: '🃏', min: 2, max: 10, cmd: 'uno' },
    unoflip: { label: 'UNO Flip', emoji: '🔄', min: 2, max: 10, cmd: 'unoflip' },
    chess: { label: 'Catur', emoji: '♟️', min: 2, max: 2, cmd: 'caturweb' },
    snakes: { label: 'Ular Tangga', emoji: '🐍', min: 2, max: 6, cmd: 'utweb' },
    monopoly: { label: 'Monopoli', emoji: '🏠', min: 2, max: 4, cmd: 'monopoli' },
    werewolf: { label: 'Werewolf', emoji: '🐺', min: 5, max: 12, cmd: 'wwweb' },
}
const BOT_NAMES = ['Umi-Bot', 'Kiko-Bot', 'Rin-Bot', 'Sora-Bot', 'Mika-Bot', 'Yui-Bot', 'Ren-Bot', 'Aiko-Bot', 'Tama-Bot', 'Neko-Bot', 'Piko-Bot']

const rooms = new Map()
const idAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
const newId = () => Array.from(crypto.randomBytes(10)).map(b => idAlphabet[b % idAlphabet.length]).join('')
const newToken = () => crypto.randomBytes(18).toString('hex')
const newCode = () => String(crypto.randomInt(100000, 1000000))
const shuffle = (arr) => { for (let i = arr.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [arr[i], arr[j]] = [arr[j], arr[i]] } return arr }
const pick = (arr) => arr[crypto.randomInt(arr.length)]

function sendJson(res, status, payload) {
    const body = JSON.stringify(payload)
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) })
    res.end(body)
}
function readBody(req) {
    return new Promise((resolve) => {
        const chunks = []
        let size = 0
        req.on('data', (c) => { size += c.length; if (size < 64 * 1024) chunks.push(c) })
        req.on('end', () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')) } catch { resolve({}) } })
    })
}
function botAuthorized(req) {
    if (!GAME_TOKEN) return false
    const supplied = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '').trim()
    const a = Buffer.from(supplied); const b = Buffer.from(GAME_TOKEN)
    return a.length === b.length && a.length > 0 && crypto.timingSafeEqual(a, b)
}
const cleanName = (v) => String(v || 'Pemain').replace(/[<>&"]/g, '').trim().slice(0, 24) || 'Pemain'
const cleanNumber = (v) => String(v || '').replace(/\D/g, '').slice(0, 16)

function makeSeat(name, number, kind, status) {
    return { name: cleanName(name), number: cleanNumber(number), kind, status, token: newToken(), entryCode: newCode() }
}
function createRoom(game, creatorSeat, openJoin, verifyNumber) {
    const room = {
        id: newId(), game, status: 'lobby', createdAt: Date.now(), lastActivity: Date.now(),
        seats: creatorSeat ? [creatorSeat] : [], state: null, log: [], chat: [], clients: new Set(), aiTimer: null, wwTimer: null,
        openJoin: !!openJoin, verifyNumber: cleanNumber(verifyNumber) || '',
    }
    room.log.push(`${GAMES[game].emoji} Room ${GAMES[game].label} dibuat. Bagikan tautan ini ke temanmu!`)
    if (room.openJoin) room.log.push('🔓 Mode masuk bebas aktif — pemain boleh duduk tanpa verifikasi WhatsApp.')
    rooms.set(room.id, room)
    return room
}
function seatByToken(room, token) {
    if (!token) return -1
    return room.seats.findIndex(s => s.token === token)
}
function activeHumans(room) { return room.seats.filter(s => s.kind === 'human' && s.status === 'verified') }
function say(room, text) { room.log.push(text); if (room.log.length > 60) room.log.splice(0, room.log.length - 60) }

/* ============================== UNO / UNO FLIP ============================== */
function unoDeck(flip) {
    const deck = []
    const lightColors = ['red', 'yellow', 'green', 'blue']
    const darkColors = ['purple', 'pink', 'orange', 'teal']
    for (let i = 0; i < 4; i++) {
        const lc = lightColors[i], dc = darkColors[i]
        const add = (lv, dv, n) => { for (let k = 0; k < n; k++) deck.push({ l: [lc, lv], d: [dc, dv] }) }
        add('0', '0', 1)
        for (let v = 1; v <= 9; v++) add(String(v), String(v), 2)
        add('skip', 'skipAll', 2); add('rev', 'rev', 2); add('+2', '+5', 2)
        if (flip) add('flip', 'flip', 2)
    }
    for (let k = 0; k < 4; k++) deck.push({ l: ['wild', 'wild'], d: ['wild', 'wild'] })
    for (let k = 0; k < 4; k++) deck.push({ l: ['wild', '+4'], d: ['wild', '+5'] })
    if (!flip) deck.forEach(c => { c.d = c.l.slice() })
    return shuffle(deck)
}
function unoSide(room, card) { return room.state.side === 'dark' ? card.d : card.l }
function unoStart(room) {
    const flip = room.game === 'unoflip'
    const st = { side: 'light', deck: unoDeck(flip), discard: [], hands: room.seats.map(() => []), turn: 0, dir: 1, color: null, winner: null }
    for (let r = 0; r < 7; r++) st.hands.forEach(h => h.push(st.deck.pop()))
    let top = st.deck.pop()
    while (unoSide(room0fix(st), top)[1] === 'wild' || unoSide(room0fix(st), top)[0] === 'wild') { st.deck.unshift(top); top = st.deck.pop() }
    st.discard.push(top)
    st.color = unoSide(room0fix(st), top)[0]
    room.state = st
    say(room, `🎴 Game dimulai! Kartu atas: ${unoCardLabel(st, top)}. Giliran ${room.seats[0].name}.`)
}
function room0fix(st) { return { state: st } }
function unoCardLabel(st, card) {
    const [c, v] = st.side === 'dark' ? card.d : card.l
    const names = { red: '🔴', yellow: '🟡', green: '🟢', blue: '🔵', purple: '🟣', pink: '🩷', orange: '🟠', teal: '🩵', wild: '🌈' }
    return `${names[c] || c} ${v}`
}
function unoAdvance(room, steps) {
    const n = room.seats.length
    room.state.turn = ((room.state.turn + room.state.dir * steps) % n + n) % n
}
function unoDrawCards(room, seatIdx, count) {
    const st = room.state
    for (let i = 0; i < count; i++) {
        if (!st.deck.length) { st.deck = shuffle(st.discard.splice(0, Math.max(0, st.discard.length - 1))); if (!st.deck.length) break }
        st.hands[seatIdx].push(st.deck.pop())
    }
}
function unoPlayable(room, card) {
    const st = room.state
    const [c, v] = unoSide(room, card)
    const top = st.discard[st.discard.length - 1]
    const [, tv] = unoSide(room, top)
    return c === 'wild' || c === st.color || v === tv
}
function unoAction(room, idx, act) {
    const st = room.state
    if (!st || st.winner !== null) return 'Game sudah selesai.'
    if (st.turn !== idx) return 'Bukan giliranmu.'
    if (act.type === 'draw') {
        unoDrawCards(room, idx, 1)
        say(room, `🃏 ${room.seats[idx].name} menarik 1 kartu.`)
        unoAdvance(room, 1)
        return null
    }
    if (act.type === 'play') {
        const hand = st.hands[idx]
        const card = hand[act.card]
        if (!card) return 'Kartu tidak ditemukan.'
        if (!unoPlayable(room, card)) return 'Kartu itu tidak bisa dimainkan sekarang.'
        hand.splice(act.card, 1)
        st.discard.push(card)
        const [c, v] = unoSide(room, card)
        if (c === 'wild') st.color = ['red', 'yellow', 'green', 'blue', 'purple', 'pink', 'orange', 'teal'].includes(act.color) ? act.color : 'red'
        else st.color = c
        say(room, `🎴 ${room.seats[idx].name} memainkan ${unoCardLabel(st, card)}.`)
        if (!hand.length) { st.winner = idx; room.status = 'finished'; say(room, `🏆 ${room.seats[idx].name} menang! Kartunya habis.`); return null }
        if (v === 'flip') {
            st.side = st.side === 'dark' ? 'light' : 'dark'
            const nt = st.discard[st.discard.length - 1]
            st.color = unoSide(room, nt)[0] === 'wild' ? st.color : unoSide(room, nt)[0]
            say(room, `🔄 Sisi kartu dibalik ke ${st.side === 'dark' ? 'GELAP' : 'TERANG'}!`)
            unoAdvance(room, 1)
        } else if (v === 'skip') { unoAdvance(room, 2) }
        else if (v === 'skipAll') { say(room, `⏭️ Semua pemain lain dilewati — ${room.seats[idx].name} main lagi!`) }
        else if (v === 'rev') { st.dir *= -1; unoAdvance(room, room.seats.length === 2 ? 2 : 1) }
        else if (v === '+2' || v === '+4' || v === '+5') {
            const count = v === '+2' ? 2 : v === '+4' ? 4 : 5
            const target = ((idx + st.dir) % room.seats.length + room.seats.length) % room.seats.length
            unoDrawCards(room, target, count)
            say(room, `💥 ${room.seats[target].name} kena +${count} kartu!`)
            unoAdvance(room, 2)
        } else unoAdvance(room, 1)
        return null
    }
    return 'Aksi tidak dikenal.'
}
function unoAI(room) {
    const st = room.state
    const idx = st.turn
    const hand = st.hands[idx]
    const order = hand.map((card, i) => ({ card, i })).sort((a, b) => {
        const val = (cd) => { const [, v] = unoSide(room, cd); return v === '+4' || v === '+5' ? 3 : ['skip', 'skipAll', 'rev', '+2', 'flip'].includes(v) ? 2 : cd.l[0] === 'wild' ? 0 : 1 }
        return val(b.card) - val(a.card)
    })
    const playable = order.find(x => unoPlayable(room, x.card))
    if (!playable) return unoAction(room, idx, { type: 'draw' })
    const [c] = unoSide(room, playable.card)
    const act = { type: 'play', card: playable.i }
    if (c === 'wild') {
        const rest = hand.filter((_, i) => i !== playable.i)
        const counts = {}
        rest.forEach(cd => { const [cc] = unoSide(room, cd); if (cc !== 'wild') counts[cc] = (counts[cc] || 0) + 1 })
        act.color = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || 'red'
    }
    return unoAction(room, idx, act)
}

/* ============================== CATUR ============================== */
const CHESS_PIECES = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }
function chessStart(room) {
    const back = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    const board = Array(64).fill(null)
    for (let i = 0; i < 8; i++) {
        board[i] = { t: back[i], c: 'b' }; board[8 + i] = { t: 'p', c: 'b' }
        board[48 + i] = { t: 'p', c: 'w' }; board[56 + i] = { t: back[i], c: 'w' }
    }
    room.state = { board, turn: 'w', castle: { wK: true, wQ: true, bK: true, bQ: true }, ep: -1, history: [], winner: null, lastMove: null }
    say(room, '♟️ Catur dimulai! Putih (kursi 1) jalan dulu.')
}
function chessMoves(st, from, boardOverride) {
    const board = boardOverride || st.board
    const piece = board[from]
    if (!piece) return []
    const x = from % 8, y = Math.floor(from / 8)
    const moves = []
    const own = (sq) => sq && sq.c === piece.c
    const foe = (sq) => sq && sq.c !== piece.c
    const push = (tx, ty, flags) => { if (tx < 0 || tx > 7 || ty < 0 || ty > 7) return false; const to = ty * 8 + tx; if (own(board[to])) return false; moves.push(Object.assign({ from, to }, flags || {})); return !board[to] }
    const slide = (dirs) => { for (const [dx, dy] of dirs) { let tx = x + dx, ty = y + dy; while (push(tx, ty)) { tx += dx; ty += dy } } }
    if (piece.t === 'p') {
        const dir = piece.c === 'w' ? -1 : 1
        const startRow = piece.c === 'w' ? 6 : 1
        const one = (y + dir) * 8 + x
        if (!board[one]) {
            moves.push({ from, to: one, promo: y + dir === 0 || y + dir === 7 })
            const two = (y + 2 * dir) * 8 + x
            if (y === startRow && !board[two]) moves.push({ from, to: two, double: true })
        }
        for (const dx of [-1, 1]) {
            const tx = x + dx, ty = y + dir
            if (tx < 0 || tx > 7 || ty < 0 || ty > 7) continue
            const to = ty * 8 + tx
            if (foe(board[to])) moves.push({ from, to, promo: ty === 0 || ty === 7 })
            else if (to === st.ep) moves.push({ from, to, epCapture: true })
        }
    } else if (piece.t === 'n') { for (const [dx, dy] of [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]) push(x + dx, y + dy) }
    else if (piece.t === 'k') {
        for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if (dx || dy) push(x + dx, y + dy)
        const home = piece.c === 'w' ? 60 : 4
        if (from === home) {
            const rights = piece.c === 'w' ? ['wK', 'wQ'] : ['bK', 'bQ']
            if (st.castle[rights[0]] && !board[from + 1] && !board[from + 2] && board[from + 3] && board[from + 3].t === 'r') moves.push({ from, to: from + 2, castle: 'K' })
            if (st.castle[rights[1]] && !board[from - 1] && !board[from - 2] && !board[from - 3] && board[from - 4] && board[from - 4].t === 'r') moves.push({ from, to: from - 2, castle: 'Q' })
        }
    } else if (piece.t === 'b') slide([[1, 1], [1, -1], [-1, 1], [-1, -1]])
    else if (piece.t === 'r') slide([[1, 0], [-1, 0], [0, 1], [0, -1]])
    else if (piece.t === 'q') slide([[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]])
    return moves
}
function chessAttacked(st, sq, byColor) {
    for (let i = 0; i < 64; i++) {
        const p = st.board[i]
        if (!p || p.c !== byColor) continue
        if (chessMoves(st, i).some(mv => mv.to === sq)) return true
    }
    return false
}
function chessLegalMoves(st, color) {
    const all = []
    for (let i = 0; i < 64; i++) {
        const p = st.board[i]
        if (!p || p.c !== color) continue
        for (const mv of chessMoves(st, i)) {
            const copy = st.board.slice()
            copy[mv.to] = copy[mv.from]; copy[mv.from] = null
            if (mv.epCapture) copy[mv.to + (color === 'w' ? 8 : -8)] = null
            const king = copy.findIndex(sq => sq && sq.t === 'k' && sq.c === color)
            const testState = { board: copy, castle: st.castle, ep: st.ep }
            let attacked = false
            for (let j = 0; j < 64 && !attacked; j++) {
                const q = copy[j]
                if (q && q.c !== color && chessMoves(testState, j, copy).some(m2 => m2.to === king)) attacked = true
            }
            if (!attacked) all.push(mv)
        }
    }
    return all
}
function chessAction(room, idx, act) {
    const st = room.state
    if (!st || st.winner) return 'Game sudah selesai.'
    const myColor = idx === 0 ? 'w' : 'b'
    if (st.turn !== myColor) return 'Bukan giliranmu.'
    if (act.type !== 'move') return 'Aksi tidak dikenal.'
    const legal = chessLegalMoves(st, myColor).find(mv => mv.from === act.from && mv.to === act.to)
    if (!legal) return 'Langkah tidak sah.'
    const piece = st.board[legal.from]
    const captured = st.board[legal.to]
    st.board[legal.to] = piece; st.board[legal.from] = null
    if (legal.epCapture) st.board[legal.to + (myColor === 'w' ? 8 : -8)] = null
    if (legal.castle === 'K') { st.board[legal.from + 1] = st.board[legal.from + 3]; st.board[legal.from + 3] = null }
    if (legal.castle === 'Q') { st.board[legal.from - 1] = st.board[legal.from - 4]; st.board[legal.from - 4] = null }
    if (piece.t === 'p' && (legal.to < 8 || legal.to >= 56)) st.board[legal.to] = { t: 'q', c: myColor }
    if (piece.t === 'k') { if (myColor === 'w') { st.castle.wK = st.castle.wQ = false } else { st.castle.bK = st.castle.bQ = false } }
    if (legal.from === 63 || legal.to === 63) st.castle.wK = false
    if (legal.from === 56 || legal.to === 56) st.castle.wQ = false
    if (legal.from === 7 || legal.to === 7) st.castle.bK = false
    if (legal.from === 0 || legal.to === 0) st.castle.bQ = false
    st.ep = legal.double ? (legal.from + legal.to) / 2 : -1
    st.lastMove = [legal.from, legal.to]
    st.history.push(`${room.seats[idx].name}: ${CHESS_PIECES[piece.t]} ${'abcdefgh'[legal.from % 8]}${8 - Math.floor(legal.from / 8)} → ${'abcdefgh'[legal.to % 8]}${8 - Math.floor(legal.to / 8)}${captured ? ' ✖' : ''}`)
    const foeColor = myColor === 'w' ? 'b' : 'w'
    const foeMoves = chessLegalMoves(st, foeColor)
    const foeKing = st.board.findIndex(sq => sq && sq.t === 'k' && sq.c === foeColor)
    const inCheck = chessAttacked(st, foeKing, myColor)
    if (!foeMoves.length) {
        st.winner = inCheck ? idx : 'draw'
        room.status = 'finished'
        say(room, inCheck ? `♟️ SKAKMAT! ${room.seats[idx].name} menang.` : '♟️ Seri (stalemate).')
    } else {
        if (inCheck) say(room, '⚠️ SKAK!')
        st.turn = foeColor
    }
    return null
}
function chessAI(room) {
    const st = room.state
    const idx = st.turn === 'w' ? 0 : 1
    const moves = chessLegalMoves(st, st.turn)
    if (!moves.length) return null
    const values = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 }
    let best = -Infinity, candidates = []
    for (const mv of moves) {
        let score = Math.random() * 0.4
        const target = st.board[mv.to]
        if (target) score += values[target.t] * 10
        if (mv.epCapture) score += 10
        const piece = st.board[mv.from]
        if (piece.t === 'p' && (mv.to < 8 || mv.to >= 56)) score += 8
        if (score > best + 0.01) { best = score; candidates = [mv] } else if (score >= best - 0.01) candidates.push(mv)
    }
    const mv = pick(candidates)
    return chessAction(room, idx, { type: 'move', from: mv.from, to: mv.to })
}

/* ============================== ULAR TANGGA ============================== */
const LADDERS = { 3: 22, 8: 31, 20: 38, 36: 44, 51: 67, 71: 91, 80: 100 }
const SNAKES = { 17: 7, 32: 10, 48: 26, 62: 19, 79: 42, 88: 55, 97: 66, 99: 78 }
function snakesStart(room) {
    room.state = { pos: room.seats.map(() => 0), turn: 0, dice: null, winner: null }
    say(room, '🐍 Ular Tangga dimulai! Klik "Lempar Dadu" saat giliranmu.')
}
function snakesAction(room, idx, act) {
    const st = room.state
    if (!st || st.winner !== null) return 'Game sudah selesai.'
    if (st.turn !== idx) return 'Bukan giliranmu.'
    if (act.type !== 'roll') return 'Aksi tidak dikenal.'
    const dice = crypto.randomInt(1, 7)
    st.dice = dice
    let dest = st.pos[idx] + dice
    if (dest > 100) dest = st.pos[idx]
    st.pos[idx] = dest
    say(room, `🎲 ${room.seats[idx].name} dapat ${dice} → kotak ${dest}.`)
    if (LADDERS[dest]) { st.pos[idx] = LADDERS[dest]; say(room, `🪜 Tangga! ${room.seats[idx].name} naik ke ${LADDERS[dest]}.`) }
    else if (SNAKES[dest]) { st.pos[idx] = SNAKES[dest]; say(room, `🐍 Kena ular! ${room.seats[idx].name} turun ke ${SNAKES[dest]}.`) }
    if (st.pos[idx] >= 100) { st.winner = idx; room.status = 'finished'; say(room, `🏆 ${room.seats[idx].name} mencapai 100 dan menang!`); return null }
    if (dice !== 6) st.turn = (st.turn + 1) % room.seats.length
    else say(room, '🎲 Dapat 6 — lempar lagi!')
    return null
}

/* ============================== MONOPOLI (ringkas) ============================== */
const MONO_TILES = [
    { name: 'MULAI', type: 'go' }, { name: 'Monas', type: 'prop', price: 60, rent: 6 },
    { name: 'Kesempatan', type: 'chance' }, { name: 'Ancol', type: 'prop', price: 60, rent: 6 },
    { name: 'Pajak', type: 'tax', amount: 100 }, { name: 'TMII', type: 'prop', price: 100, rent: 10 },
    { name: 'Penjara (lewat)', type: 'jail' }, { name: 'Ragunan', type: 'prop', price: 120, rent: 12 },
    { name: 'Kesempatan', type: 'chance' }, { name: 'Kota Tua', type: 'prop', price: 140, rent: 14 },
    { name: 'Parkir Bebas', type: 'park' }, { name: 'Dufan', type: 'prop', price: 160, rent: 16 },
    { name: 'Senayan', type: 'prop', price: 180, rent: 18 }, { name: 'Masuk Penjara', type: 'gotojail' },
    { name: 'Menteng', type: 'prop', price: 200, rent: 20 }, { name: 'SCBD', type: 'prop', price: 220, rent: 22 },
]
function monopolyStart(room) {
    room.state = {
        pos: room.seats.map(() => 0), cash: room.seats.map(() => 1500),
        owners: MONO_TILES.map(() => -1), turn: 0, dice: null, pendingBuy: -1,
        jailed: room.seats.map(() => false), solvent: room.seats.map(() => true), winner: null,
    }
    say(room, '🏠 Monopoli dimulai! Semua pemain mulai dengan Rp1.500. Lewati MULAI dapat Rp200.')
}
function monopolyNext(room) {
    const st = room.state
    const solventIdx = st.solvent.map((s, i) => s ? i : -1).filter(i => i >= 0)
    if (solventIdx.length === 1) { st.winner = solventIdx[0]; room.status = 'finished'; say(room, `🏆 ${room.seats[st.winner].name} jadi juragan terakhir dan menang!`); return }
    let next = st.turn
    do { next = (next + 1) % room.seats.length } while (!st.solvent[next])
    st.turn = next
}
function monopolyPay(room, idx, amount, reason) {
    const st = room.state
    st.cash[idx] -= amount
    say(room, `💸 ${room.seats[idx].name} bayar Rp${amount} (${reason}).`)
    if (st.cash[idx] < 0) {
        st.solvent[idx] = false
        st.owners = st.owners.map(o => o === idx ? -1 : o)
        say(room, `💥 ${room.seats[idx].name} bangkrut dan keluar dari game!`)
    }
}
function monopolyAction(room, idx, act) {
    const st = room.state
    if (!st || st.winner !== null) return 'Game sudah selesai.'
    if (act.type === 'buy' || act.type === 'pass') {
        if (st.pendingBuy !== idx) return 'Tidak ada properti yang menunggumu.'
        const tile = MONO_TILES[st.pos[idx]]
        if (act.type === 'buy') {
            if (st.cash[idx] < tile.price) return 'Uangmu tidak cukup.'
            st.cash[idx] -= tile.price
            st.owners[st.pos[idx]] = idx
            say(room, `🏠 ${room.seats[idx].name} membeli ${tile.name} seharga Rp${tile.price}.`)
        } else say(room, `↩️ ${room.seats[idx].name} melewatkan ${tile.name}.`)
        st.pendingBuy = -1
        monopolyNext(room)
        return null
    }
    if (st.turn !== idx) return 'Bukan giliranmu.'
    if (act.type !== 'roll') return 'Aksi tidak dikenal.'
    if (st.pendingBuy !== -1) return 'Putuskan dulu: beli atau lewati properti.'
    if (st.jailed[idx]) { st.jailed[idx] = false; say(room, `🔓 ${room.seats[idx].name} keluar penjara (kehilangan giliran ini).`); monopolyNext(room); return null }
    const dice = crypto.randomInt(1, 7)
    st.dice = dice
    const before = st.pos[idx]
    st.pos[idx] = (st.pos[idx] + dice) % MONO_TILES.length
    if (st.pos[idx] < before || st.pos[idx] === 0) { st.cash[idx] += 200; say(room, `💰 ${room.seats[idx].name} melewati MULAI, +Rp200.`) }
    const tile = MONO_TILES[st.pos[idx]]
    say(room, `🎲 ${room.seats[idx].name} dapat ${dice} → ${tile.name}.`)
    if (tile.type === 'prop') {
        const owner = st.owners[st.pos[idx]]
        if (owner === -1) { st.pendingBuy = idx; return null }
        if (owner !== idx) {
            st.cash[owner] += tile.rent
            say(room, `🏧 ${room.seats[idx].name} bayar sewa Rp${tile.rent} ke ${room.seats[owner].name}.`)
            monopolyPay(room, idx, tile.rent, `sewa ${tile.name}`)
        }
        monopolyNext(room); return null
    }
    if (tile.type === 'tax') { monopolyPay(room, idx, tile.amount, 'pajak'); monopolyNext(room); return null }
    if (tile.type === 'chance') {
        const cards = [
            ['Bank memberi dividen +Rp100.', 100], ['Bayar biaya perbaikan -Rp60.', -60],
            ['Menang undian +Rp150.', 150], ['Bayar iuran warga -Rp40.', -40], ['Dapat hadiah lomba +Rp80.', 80],
        ]
        const [text, delta] = pick(cards)
        say(room, `❓ Kesempatan: ${text}`)
        if (delta >= 0) st.cash[idx] += delta; else monopolyPay(room, idx, -delta, 'kesempatan')
        monopolyNext(room); return null
    }
    if (tile.type === 'gotojail') { st.pos[idx] = 6; st.jailed[idx] = true; say(room, `🚔 ${room.seats[idx].name} masuk penjara!`) }
    monopolyNext(room)
    return null
}
function monopolyAI(room) {
    const st = room.state
    const idx = st.pendingBuy !== -1 ? st.pendingBuy : st.turn
    if (st.pendingBuy !== -1) {
        const tile = MONO_TILES[st.pos[idx]]
        return monopolyAction(room, idx, { type: st.cash[idx] > tile.price + 120 ? 'buy' : 'pass' })
    }
    return monopolyAction(room, idx, { type: 'roll' })
}

/* ============================== WEREWOLF ============================== */
/*
 * Malam dan siang hanya boleh berganti kalau semua manusia yang punya
 * kewajiban sudah memilih. Dulu pemeriksaan itu cuma jalan di dalam
 * werewolfAction, akibatnya meja macet selamanya begitu satu-satunya pemain
 * manusia berperan warga biasa (atau sudah mati) — tidak ada yang memicu
 * pergantian fase. Kedua fungsi di bawah menutup lubang itu.
 */
function werewolfPendingHumans(room) {
    const st = room.state
    if (!st || st.winner) return []
    if (st.phase === 'night') {
        return room.seats.map((s, i) => i).filter(i => st.alive[i] && room.seats[i].kind === 'human'
            && ['werewolf', 'seer', 'doctor'].includes(st.roles[i]) && st.nightActs[i] === undefined)
    }
    if (st.phase === 'day') {
        return room.seats.map((s, i) => i).filter(i => st.alive[i] && room.seats[i].kind === 'human' && st.votes[i] === undefined)
    }
    return []
}
function werewolfMaybeResolve(room) {
    const st = room.state
    if (!st || st.winner) return
    if (werewolfPendingHumans(room).length) return
    if (room.wwTimer) { clearTimeout(room.wwTimer); room.wwTimer = null }
    if (st.phase === 'night') werewolfResolveNight(room)
    else if (st.phase === 'day') werewolfResolveDay(room)
}
/* Kalau tidak ada manusia yang perlu bertindak, fase tetap ditampilkan sebentar
 * supaya pemain tidak melihat malam berlalu dalam sekejap. */
function werewolfScheduleResolve(room) {
    if (room.wwTimer || werewolfPendingHumans(room).length) return
    room.wwTimer = setTimeout(() => {
        room.wwTimer = null
        try { werewolfMaybeResolve(room); broadcast(room) } catch (e) { console.log('[game] werewolf error:', e.message) }
    }, 2500)
}
function werewolfStart(room) {
    const n = room.seats.length
    const wolves = Math.max(1, Math.floor(n / 4))
    const roles = shuffle([...Array(wolves).fill('werewolf'), 'seer', 'doctor', ...Array(Math.max(0, n - wolves - 2)).fill('villager')])
    room.state = {
        roles, alive: room.seats.map(() => true), phase: 'night', day: 1,
        nightActs: {}, votes: {}, winner: null, lastNews: 'Malam pertama turun… werewolf mengintai. 🐺',
        peek: {},
    }
    say(room, `🐺 Werewolf dimulai dengan ${n} pemain (${wolves} werewolf). Malam 1 — peran khusus, pilih targetmu!`)
    werewolfAiNight(room)
    werewolfScheduleResolve(room)
}
function werewolfAiNight(room) {
    const st = room.state
    room.seats.forEach((seat, i) => {
        if (seat.kind !== 'ai' || !st.alive[i]) return
        const targets = st.alive.map((a, j) => a && j !== i ? j : -1).filter(j => j >= 0)
        if (!targets.length) return
        if (st.roles[i] === 'werewolf') st.nightActs[i] = pick(targets.filter(j => st.roles[j] !== 'werewolf').length ? targets.filter(j => st.roles[j] !== 'werewolf') : targets)
        else if (st.roles[i] === 'seer' || st.roles[i] === 'doctor') st.nightActs[i] = pick(targets)
    })
}
function werewolfCheckWin(room) {
    const st = room.state
    const wolves = st.alive.filter((a, i) => a && st.roles[i] === 'werewolf').length
    const others = st.alive.filter((a, i) => a && st.roles[i] !== 'werewolf').length
    if (wolves === 0) { st.winner = 'villager'; room.status = 'finished'; say(room, '🏆 Semua werewolf tersingkir — WARGA menang!'); return true }
    if (wolves >= others) { st.winner = 'werewolf'; room.status = 'finished'; say(room, '🏆 Werewolf menguasai desa — WEREWOLF menang!'); return true }
    return false
}
function werewolfResolveNight(room) {
    const st = room.state
    const wolfTargets = Object.entries(st.nightActs).filter(([i]) => st.roles[Number(i)] === 'werewolf' && st.alive[Number(i)]).map(([, t]) => t)
    const doctorIdx = st.roles.findIndex((r, i) => r === 'doctor' && st.alive[i])
    const saved = doctorIdx >= 0 ? st.nightActs[doctorIdx] : -1
    const seerIdx = st.roles.findIndex((r, i) => r === 'seer' && st.alive[i])
    if (seerIdx >= 0 && st.nightActs[seerIdx] !== undefined && room.seats[seerIdx].kind === 'human') st.peek[seerIdx] = st.nightActs[seerIdx]
    let victim = -1
    if (wolfTargets.length) {
        const count = {}
        wolfTargets.forEach(t => { count[t] = (count[t] || 0) + 1 })
        victim = Number(Object.keys(count).sort((a, b) => count[b] - count[a])[0])
    }
    st.nightActs = {}
    if (victim >= 0 && victim !== saved) {
        st.alive[victim] = false
        st.lastNews = `☀️ Pagi hari ${st.day}: ${room.seats[victim].name} ditemukan tewas dimangsa werewolf! Ia adalah ${st.roles[victim]}.`
    } else st.lastNews = `☀️ Pagi hari ${st.day}: malam yang tenang — tidak ada korban.`
    say(room, st.lastNews)
    if (werewolfCheckWin(room)) return
    st.phase = 'day'; st.votes = {}
    room.seats.forEach((seat, i) => {
        if (seat.kind === 'ai' && st.alive[i]) {
            const targets = st.alive.map((a, j) => a && j !== i ? j : -1).filter(j => j >= 0)
            if (targets.length) st.votes[i] = pick(targets)
        }
    })
    werewolfScheduleResolve(room)
}
function werewolfResolveDay(room) {
    const st = room.state
    const count = {}
    Object.values(st.votes).forEach(t => { count[t] = (count[t] || 0) + 1 })
    const ranked = Object.keys(count).map(Number).sort((a, b) => count[b] - count[a])
    if (ranked.length) {
        const top = ranked[0]
        if (ranked.length === 1 || count[ranked[0]] > count[ranked[1]]) {
            st.alive[top] = false
            say(room, `⚖️ Voting desa menggantung ${room.seats[top].name}! Ia adalah ${st.roles[top]}.`)
        } else say(room, '⚖️ Voting seri — tidak ada yang digantung hari ini.')
    }
    st.votes = {}
    if (werewolfCheckWin(room)) return
    st.day += 1; st.phase = 'night'
    say(room, `🌙 Malam ${st.day} tiba. Peran khusus, pilih targetmu!`)
    werewolfAiNight(room)
    werewolfScheduleResolve(room)
}
function werewolfAction(room, idx, act) {
    const st = room.state
    if (!st || st.winner) return 'Game sudah selesai.'
    if (!st.alive[idx]) return 'Kamu sudah mati — hanya bisa menonton & chat.'
    if (act.type === 'night') {
        if (st.phase !== 'night') return 'Sekarang bukan malam hari.'
        if (!['werewolf', 'seer', 'doctor'].includes(st.roles[idx])) return 'Warga biasa tidur di malam hari. 😴'
        if (!(act.target >= 0) || !st.alive[act.target]) return 'Target tidak sah.'
        st.nightActs[idx] = act.target
        werewolfMaybeResolve(room)
        return null
    }
    if (act.type === 'vote') {
        if (st.phase !== 'day') return 'Voting hanya di siang hari.'
        if (!(act.target >= 0) || !st.alive[act.target]) return 'Target tidak sah.'
        st.votes[idx] = act.target
        werewolfMaybeResolve(room)
        return null
    }
    return 'Aksi tidak dikenal.'
}

/* ============================== MESIN UMUM ============================== */
const STARTERS = { uno: unoStart, unoflip: unoStart, chess: chessStart, snakes: snakesStart, monopoly: monopolyStart, werewolf: werewolfStart }
const ACTIONS = { uno: unoAction, unoflip: unoAction, chess: chessAction, snakes: snakesAction, monopoly: monopolyAction, werewolf: werewolfAction }

function currentTurnSeat(room) {
    const st = room.state
    if (!st) return -1
    if (room.game === 'chess') return st.winner ? -1 : (st.turn === 'w' ? 0 : 1)
    if (room.game === 'monopoly') return st.pendingBuy !== -1 ? st.pendingBuy : st.turn
    if (room.game === 'werewolf') return -1
    return st.turn
}
function scheduleAI(room) {
    if (room.status !== 'playing' || room.aiTimer) return
    const idx = currentTurnSeat(room)
    if (idx < 0 || !room.seats[idx] || room.seats[idx].kind !== 'ai') return
    room.aiTimer = setTimeout(() => {
        room.aiTimer = null
        try {
            if (room.game === 'uno' || room.game === 'unoflip') unoAI(room)
            else if (room.game === 'chess') chessAI(room)
            else if (room.game === 'snakes') snakesAction(room, idx, { type: 'roll' })
            else if (room.game === 'monopoly') monopolyAI(room)
        } catch (e) { console.log('[game] AI error:', e.message) }
        broadcast(room)
        scheduleAI(room)
    }, 900)
}

function publicState(room, viewerIdx) {
    const st = room.state
    const base = {
        id: room.id, game: room.game, gameLabel: GAMES[room.game].label, emoji: GAMES[room.game].emoji,
        status: room.status, min: GAMES[room.game].min, max: GAMES[room.game].max,
        openJoin: !!room.openJoin, waCommand: GAMES[room.game].cmd, waVerifyAvailable: !room.openJoin,
        verifyNumber: room.verifyNumber || '',
        seats: room.seats.map((s, i) => ({ i, name: s.name, kind: s.kind, status: s.status, you: i === viewerIdx, alive: st && st.alive ? st.alive[i] : true })),
        viewer: viewerIdx, log: room.log.slice(-25), chat: room.chat.slice(-40),
    }
    if (!st) return base
    if (room.game === 'uno' || room.game === 'unoflip') {
        base.state = {
            side: st.side, turn: st.turn, dir: st.dir, color: st.color, winner: st.winner,
            top: st.discard[st.discard.length - 1] || null,
            topLabel: st.discard.length ? unoCardLabel(st, st.discard[st.discard.length - 1]) : null,
            counts: st.hands.map(h => h.length),
            hand: viewerIdx >= 0 ? st.hands[viewerIdx] : [],
            handLabels: viewerIdx >= 0 ? st.hands[viewerIdx].map(c => unoCardLabel(st, c)) : [],
            deckCount: st.deck.length,
        }
    } else if (room.game === 'chess') {
        base.state = { board: st.board, turn: st.turn, winner: st.winner, history: st.history.slice(-30), lastMove: st.lastMove, legal: (viewerIdx === 0 && st.turn === 'w') || (viewerIdx === 1 && st.turn === 'b') ? chessLegalMoves(st, st.turn) : [] }
    } else if (room.game === 'snakes') {
        base.state = { pos: st.pos, turn: st.turn, dice: st.dice, winner: st.winner, ladders: LADDERS, snakes: SNAKES }
    } else if (room.game === 'monopoly') {
        base.state = { pos: st.pos, cash: st.cash, owners: st.owners, tiles: MONO_TILES, turn: st.turn, dice: st.dice, pendingBuy: st.pendingBuy, jailed: st.jailed, solvent: st.solvent, winner: st.winner }
    } else if (room.game === 'werewolf') {
        base.state = {
            phase: st.phase, day: st.day, alive: st.alive, winner: st.winner, lastNews: st.lastNews,
            myRole: viewerIdx >= 0 ? st.roles[viewerIdx] : null,
            peeked: viewerIdx >= 0 && st.peek[viewerIdx] !== undefined ? { target: st.peek[viewerIdx], role: st.roles[st.peek[viewerIdx]] } : null,
            roles: room.status === 'finished' ? st.roles : null,
            voted: viewerIdx >= 0 ? st.votes[viewerIdx] : undefined,
            nightActed: viewerIdx >= 0 ? st.nightActs[viewerIdx] !== undefined : false,
            voteCounts: st.phase === 'day' ? Object.values(st.votes).reduce((acc, t) => { acc[t] = (acc[t] || 0) + 1; return acc }, {}) : {},
        }
    }
    return base
}
function broadcast(room) {
    room.lastActivity = Date.now()
    for (const client of room.clients) {
        try { client.res.write(`data: ${JSON.stringify(publicState(room, client.viewer))}\n\n`) } catch {}
    }
}

async function handleAction(room, idx, act) {
    if (!act || typeof act.type !== 'string') return 'Aksi kosong.'
    if (act.type === 'chat') {
        const text = String(act.text || '').replace(/[<>&]/g, '').trim().slice(0, 300)
        if (!text) return 'Pesan kosong.'
        room.chat.push({ name: room.seats[idx].name, text, at: Date.now() })
        if (room.chat.length > 80) room.chat.splice(0, room.chat.length - 80)
        return null
    }
    if (act.type === 'start') {
        if (idx !== 0) return 'Hanya pembuat room (kursi 1) yang bisa memulai.'
        if (room.status === 'playing') return 'Game sudah berjalan.'
        const meta = GAMES[room.game]
        const verified = room.seats.map((s, i) => (s.kind === 'ai' || s.status === 'verified') ? i : -1).filter(i => i >= 0)
        if (act.fillBots) {
            const target = Math.min(meta.max, Math.max(meta.min, Number(act.targetPlayers) || meta.min))
            let botNo = 1
            while (room.seats.filter(s => s.kind === 'ai' || s.status === 'verified').length < target && room.seats.length < meta.max) {
                room.seats.push(makeSeat(BOT_NAMES[(botNo - 1) % BOT_NAMES.length], '', 'ai', 'verified'))
                botNo++
            }
        }
        const ready = room.seats.filter(s => s.kind === 'ai' || s.status === 'verified')
        if (ready.length < meta.min) return `Butuh minimal ${meta.min} pemain terverifikasi. Sekarang ${ready.length}. Undang teman atau aktifkan isi bot AI.`
        room.seats = room.seats.filter(s => s.kind === 'ai' || s.status === 'verified')
        room.status = 'playing'
        STARTERS[room.game](room)
        scheduleAI(room)
        return null
    }
    if (act.type === 'addbot') {
        if (idx !== 0) return 'Hanya pembuat room yang bisa menambah bot.'
        if (room.status !== 'lobby') return 'Game sudah berjalan.'
        if (room.seats.length >= GAMES[room.game].max) return 'Meja sudah penuh.'
        const used = room.seats.filter(s => s.kind === 'ai').length
        room.seats.push(makeSeat(BOT_NAMES[used % BOT_NAMES.length], '', 'ai', 'verified'))
        say(room, `🤖 ${room.seats[room.seats.length - 1].name} bergabung sebagai bot AI.`)
        return null
    }
    if (act.type === 'openjoin') {
        if (idx !== 0) return 'Hanya pembuat room yang bisa mengubah mode masuk.'
        if (room.status !== 'lobby') return 'Mode masuk hanya bisa diubah sebelum game dimulai.'
        room.openJoin = !!act.value
        // Kursi yang sudah menunggu langsung ikut aktif supaya host tidak
        // perlu menyuruh temannya mengulang dari awal.
        if (room.openJoin) room.seats.forEach(s => { if (s.kind === 'human' && s.status === 'pending') s.status = 'verified' })
        say(room, room.openJoin
            ? '🔓 Mode masuk bebas AKTIF — pemain boleh duduk tanpa verifikasi WhatsApp.'
            : '🔐 Mode masuk bebas dimatikan — pemain baru wajib verifikasi WhatsApp.')
        return null
    }
    if (room.status !== 'playing') return 'Game belum dimulai. Host: tekan MULAI GAME.'
    if (room.seats[idx].kind === 'ai') return 'Kursi bot tidak bisa bertindak manual.'
    const fn = ACTIONS[room.game]
    const err = fn(room, idx, act)
    if (!err) scheduleAI(room)
    return err
}

/* ============================== SERVER HTTP ============================== */
/* Halaman dibaca ulang kalau berkasnya berubah, jadi unggah game.html baru
 * langsung terlihat tanpa perlu restart container. */
let PAGE = ''
let PAGE_AT = -1
function page() {
    const file = path.join(HERE, 'game.html')
    try {
        const at = fs.statSync(file).mtimeMs
        if (at !== PAGE_AT) { PAGE = fs.readFileSync(file, 'utf8'); PAGE_AT = at }
    } catch {
        if (!PAGE) PAGE = '<h1>Umi Games</h1>'
    }
    return PAGE
}

/** Handler HTTP murni — bisa dipakai langsung atau via startGameServer. */
export async function gameHandler(req, res) {
        const url = new URL(req.url || '/', 'http://localhost')
        const parts = url.pathname.split('/').filter(Boolean).map(decodeURIComponent)
        try {
            if (req.method === 'GET' && url.pathname === '/health') return sendJson(res, 200, { ok: true, service: 'umi-web-games', rooms: rooms.size, games: Object.keys(GAMES), openJoinDefault: OPEN_JOIN_DEFAULT, time: new Date().toISOString() })
            /* Aset statis: logo, dadu, kartu, papan game */
            if (req.method === 'GET' && parts[0] === 'assets' && parts.length === 2 && /^[a-z0-9._-]+$/i.test(parts[1])) {
                const file = path.join(HERE, 'assets', parts[1])
                try {
                    const buf = fs.readFileSync(file)
                    const ext = path.extname(file).toLowerCase()
                    const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml' }[ext] || 'application/octet-stream'
                    res.writeHead(200, { 'Content-Type': mime, 'Content-Length': buf.length, 'Cache-Control': 'public, max-age=86400' })
                    return res.end(buf)
                } catch {}
            }
            /* Trading page */
            if (req.method === 'GET' && (url.pathname === '/trading' || url.pathname === '/trading/')) {
                try {
                    const tradingHtml = fs.readFileSync(path.join(HERE, 'trading.html'), 'utf8')
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': Buffer.byteLength(tradingHtml), 'Cache-Control': 'no-cache' })
                    return res.end(tradingHtml)
                } catch (e) {
                    return sendJson(res, 500, { error: 'Trading page not found' })
                }
            }
            /* Trading API */
            if (parts[0] === 'api' && parts[1] === 'trading') {
                return handleTradingAPI(req, res, url, parts.slice(2))
            }
            if (req.method === 'GET' && (parts.length === 0 || (parts.length === 2 && GAMES[parts[0]]))) {
                const html = page()
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': Buffer.byteLength(html), 'Cache-Control': 'no-cache' })
                return res.end(html)
            }
            if (parts[0] !== 'api' || parts[1] !== 'rooms') return sendJson(res, 404, { error: 'not found' })

            if (req.method === 'POST' && parts.length === 2) {
                const body = await readBody(req)
                const game = String(body.game || '')
                if (!GAMES[game]) return sendJson(res, 400, { error: 'game tidak dikenal' })
                const fromBot = botAuthorized(req)
                // Room yang dibuat bot selalu pakai verifikasi normal; room dari
                // website mengikuti setelan mode masuk bebas.
                const openJoin = fromBot ? false : OPEN_JOIN_DEFAULT
                const verifyNumber = cleanNumber(body.verifyNumber) || ''
                const seat = makeSeat(body.name, body.number, 'human', (fromBot || openJoin) ? 'verified' : 'pending')
                if (!fromBot && !seat.number && !openJoin) return sendJson(res, 400, { error: 'Nomor WhatsApp wajib diisi untuk verifikasi.' })
                const room = createRoom(game, seat, openJoin, verifyNumber)
                broadcast(room)
                return sendJson(res, 200, { ok: true, roomId: room.id, game, url: `/${game}/${room.id}`, token: seat.token, entryCode: seat.entryCode, verified: fromBot || openJoin, openJoin, verifyNumber: room.verifyNumber })
            }

            const room = rooms.get(parts[2] || '')
            if (!room) return sendJson(res, 404, { error: 'room tidak ditemukan' })

            if (req.method === 'POST' && parts[3] === 'verify' && parts.length === 4) {
                if (!botAuthorized(req)) return sendJson(res, 401, { error: 'unauthorized' })
                const body = await readBody(req)
                const number = cleanNumber(body.number)
                if (!number) return sendJson(res, 400, { error: 'nomor kosong' })
                let seat = room.seats.find(s => s.kind === 'human' && s.number === number)
                if (seat) { seat.status = 'verified'; if (body.name) seat.name = cleanName(body.name) }
                else {
                    if (room.status !== 'lobby') return sendJson(res, 409, { error: 'game sudah berjalan' })
                    if (room.seats.length >= GAMES[room.game].max) return sendJson(res, 409, { error: 'meja penuh' })
                    seat = makeSeat(body.name, number, 'human', 'verified')
                    room.seats.push(seat)
                    say(room, `✅ ${seat.name} terverifikasi via WhatsApp dan duduk di meja.`)
                }
                broadcast(room)
                return sendJson(res, 200, { ok: true, roomId: room.id, game: room.game, seat: room.seats.indexOf(seat), entryCode: seat.entryCode, status: room.status })
            }

            if (req.method === 'POST' && parts[3] === 'claim' && parts.length === 4) {
                const body = await readBody(req)
                const number = cleanNumber(body.number)
                if (!number) return sendJson(res, 400, { error: 'Nomor WhatsApp wajib diisi.' })
                if (room.status !== 'lobby') return sendJson(res, 409, { error: 'game sudah berjalan' })
                let seat = room.seats.find(s => s.kind === 'human' && s.number === number)
                if (!seat) {
                    if (room.seats.length >= GAMES[room.game].max) return sendJson(res, 409, { error: 'meja penuh' })
                    seat = makeSeat(body.name, number, 'human', room.openJoin ? 'verified' : 'pending')
                    room.seats.push(seat)
                    say(room, room.openJoin ? `🪑 ${seat.name} duduk di meja (mode masuk bebas).` : `🪑 ${seat.name} meminta kursi — menunggu verifikasi WhatsApp.`)
                } else if (room.openJoin && seat.status === 'pending') {
                    seat.status = 'verified'
                    if (body.name) seat.name = cleanName(body.name)
                    say(room, `✅ ${seat.name} duduk di meja (mode masuk bebas).`)
                }
                broadcast(room)
                return sendJson(res, 200, { ok: true, token: seat.token, status: seat.status, seat: room.seats.indexOf(seat) })
            }

            if (req.method === 'POST' && parts[3] === 'enter' && parts.length === 4) {
                const body = await readBody(req)
                const code = String(body.entryCode || '').replace(/\D/g, '')
                const seat = room.seats.find(s => s.kind === 'human' && s.entryCode === code && s.status === 'verified')
                if (!seat) return sendJson(res, 404, { error: 'Kode masuk tidak ditemukan. Pastikan kamu sudah verifikasi di WhatsApp.' })
                return sendJson(res, 200, { ok: true, token: seat.token, seat: room.seats.indexOf(seat), name: seat.name })
            }

            if (req.method === 'GET' && parts[3] === 'state' && parts.length === 4) {
                const idx = seatByToken(room, url.searchParams.get('token'))
                return sendJson(res, 200, publicState(room, idx))
            }

            if (req.method === 'GET' && parts[3] === 'events' && parts.length === 4) {
                const idx = seatByToken(room, url.searchParams.get('token'))
                res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' })
                const client = { res, viewer: idx }
                room.clients.add(client)
                res.write(`data: ${JSON.stringify(publicState(room, idx))}\n\n`)
                const ping = setInterval(() => { try { res.write(': ping\n\n') } catch {} }, 25000)
                req.on('close', () => { clearInterval(ping); room.clients.delete(client) })
                return
            }

            if (req.method === 'POST' && parts[3] === 'action' && parts.length === 4) {
                const body = await readBody(req)
                const idx = seatByToken(room, body.token)
                if (idx < 0) return sendJson(res, 401, { error: 'Kamu belum punya kursi. Verifikasi dulu ya.' })
                // Host boleh menyalakan mode masuk bebas walaupun kursinya masih
                // pending — kalau tidak, meja yang wajib verifikasi tidak bisa
                // dibuka sama sekali saat bot utama offline.
                const isHostToggle = idx === 0 && body.action && body.action.type === 'openjoin'
                if (room.seats[idx].status !== 'verified' && !isHostToggle) return sendJson(res, 403, { error: 'Kursimu belum terverifikasi WhatsApp.' })
                const err = await handleAction(room, idx, body.action || {})
                broadcast(room)
                if (err) return sendJson(res, 400, { error: err })
                return sendJson(res, 200, { ok: true })
            }

            return sendJson(res, 404, { error: 'not found' })
        } catch (error) {
            console.log('[game] request error:', error.message)
            return sendJson(res, 500, { error: 'server error' })
        }
}

/* ═══════════════════════════════════════════════════════════════════════════
 * MARKET ENGINE — saham $AS
 *
 * Harga dihitung dari derau halus (value noise) atas "tick" 3 detik, jadi
 * SEMUA pemain melihat pasar yang sama tanpa server perlu menyimpan riwayat.
 * Grafik, volume, order book, dan feed transaksi diturunkan dari fungsi yang
 * sama, sehingga tampilan konsisten di setiap klien.
 * ═══════════════════════════════════════════════════════════════════════════ */
const TICK_MS = 3000
const TICKS_PER_DAY = Math.round(86400000 / TICK_MS)
/* Harga dasar sengaja di kisaran $AS 0,40–3,20 supaya ekonomi tetap sama
 * dengan versi lama (saldo awal $AS 100, bonus harian 10) — pemain bisa beli
 * puluhan lot tanpa harus menunggu top up besar. */
const MARKETS = [
    { sym: 'UMI', name: 'Usanagi Umi Corp',   sector: 'Teknologi',     base: 1.24 },
    { sym: 'JDB', name: 'Jadibot Studio',     sector: 'Teknologi',     base: 2.05 },
    { sym: 'WAG', name: 'WhatsApp Group Inc', sector: 'Komunikasi',    base: 0.86 },
    { sym: 'PNL', name: 'Panel Hosting',      sector: 'Infrastruktur', base: 1.62 },
    { sym: 'GME', name: 'Umi Games',          sector: 'Hiburan',       base: 0.54 },
    { sym: 'DAN', name: 'DANA Finance',       sector: 'Keuangan',      base: 3.10 },
    { sym: 'SRV', name: 'Server VPS',         sector: 'Infrastruktur', base: 0.94 },
    { sym: 'BOT', name: 'Bot AI',             sector: 'Teknologi',     base: 1.78 },
    { sym: 'TRD', name: 'Trader $AS',         sector: 'Keuangan',      base: 0.42 },
    { sym: 'HBG', name: 'Bandwidth Hosting',  sector: 'Infrastruktur', base: 1.10 },
]
const MARKET_BY_SYM = Object.fromEntries(MARKETS.map((m) => [m.sym, m]))
const TIMEFRAMES = { '1m': 20, '5m': 100, '15m': 300, '1h': 1200 } // tick per candle
const nowTick = (time = Date.now()) => Math.floor(time / TICK_MS)
const fnv = (text) => { let h = 2166136261; for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619) } return (h >>> 0) % 100000 }
const frac = (n) => { const v = Math.sin(n * 12.9898) * 43758.5453; return v - Math.floor(v) }
const noise = (seed, x) => { const i = Math.floor(x), f = x - i, a = frac(i * 1.7 + seed), b = frac((i + 1) * 1.7 + seed), u = f * f * (3 - 2 * f); return a + (b - a) * u }

/** Harga mentah satu saham pada tick tertentu (deterministik). */
function priceAt(sym, tick) {
    const item = MARKET_BY_SYM[sym]
    if (!item) return 1
    const s = fnv(sym)
    const trend = (noise(s, tick / 4800) - 0.5) * 0.30    // tren beberapa jam
    const swing = (noise(s + 13, tick / 240) - 0.5) * 0.13 // ayunan puluhan menit
    const micro = (noise(s + 41, tick / 8) - 0.5) * 0.015  // gerak tiap tick
    return Math.max(0.05, item.base * (1 + trend + swing + micro))
}
const round2 = (n) => Math.round(n * 100) / 100

/** Transaksi pasar sintetis pada satu tick — bikin feed selalu hidup. */
function syntheticTrades(sym, tick) {
    const s = fnv(sym) + 7
    const count = Math.floor(noise(s + 3, tick / 5) * 4)
    const price = priceAt(sym, tick)
    const out = []
    for (let k = 0; k < count; k++) {
        const r = frac(tick * 31.7 + k * 17.3 + s)
        const r2 = frac(tick * 11.3 + k * 7.1 + s)
        const side = r > 0.5 ? 'buy' : 'sell'
        out.push({
            side,
            price: round2(price * (1 + (r2 - 0.5) * 0.004)),
            qty: 1 + Math.floor(r2 * 40),
            at: tick * TICK_MS + Math.floor(r * TICK_MS),
            market: true,
        })
    }
    return out
}

/** Ringkasan kuotasi: harga, perubahan 24 jam, high/low, volume, tren. */
function quoteOf(sym, tick = nowTick()) {
    const item = MARKET_BY_SYM[sym]
    const price = priceAt(sym, tick)
    const prevClose = priceAt(sym, tick - TICKS_PER_DAY)
    let high = price, low = price, spark = []
    for (let i = 119; i >= 0; i--) {
        const v = priceAt(sym, tick - i)
        if (v > high) high = v
        if (v < low) low = v
        if (i % 3 === 0) spark.push(round2(v))
    }
    let volume = 0
    for (let i = 0; i < 300; i++) volume += syntheticTrades(sym, tick - i).reduce((sum, t) => sum + t.qty, 0)
    const change = price - prevClose
    return {
        sym, name: item.name, sector: item.sector,
        price: round2(price), prevClose: round2(prevClose),
        change: round2(change), changePct: round2((change / prevClose) * 100),
        high: round2(high), low: round2(low), volume,
        spark,
        up: change >= 0,
    }
}

/** Traffic buy/sell: tekanan beli vs jual pada jendela waktu tertentu. */
function trafficOf(sym, ticks = 100, tick = nowTick()) {
    let buy = 0, sell = 0, trades = 0
    for (let i = 0; i < ticks; i++) {
        for (const t of syntheticTrades(sym, tick - i)) {
            trades++
            if (t.side === 'buy') buy += t.qty; else sell += t.qty
        }
    }
    const total = buy + sell || 1
    const from = priceAt(sym, tick - ticks), to = priceAt(sym, tick)
    return {
        sym,
        buy, sell, buyPct: round2((buy / total) * 100),
        trades,
        move: round2(((to - from) / from) * 100),
    }
}

/** Order book simulasi (kedalaman pasar) di sekitar harga terakhir. */
function depthOf(sym, tick = nowTick()) {
    const price = priceAt(sym, tick)
    const s = fnv(sym) + 29
    const spread = Math.max(0.005, price * 0.0008)
    const bids = [], asks = []
    for (let i = 0; i < 8; i++) {
        const q = (n) => 20 + Math.floor(noise(n, (tick + i) / 4) * 480)
        bids.push({ price: round2(price - spread * (i + 1)), qty: q(s + i) })
        asks.push({ price: round2(price + spread * (i + 1)), qty: q(s + 50 + i) })
    }
    return { bids, asks, spread: round2(spread) }
}

/** Lilin (candle) untuk grafik: o/h/l/c + volume per rentang waktu. */
function candlesOf(sym, ticksPerCandle = 20, limit = 96, tick = nowTick()) {
    const out = []
    for (let c = limit - 1; c >= 0; c--) {
        const end = tick - c * ticksPerCandle
        let o = priceAt(sym, end - ticksPerCandle + 1), h = o, l = o, cl = o, v = 0
        for (let i = 0; i < ticksPerCandle; i++) {
            const t = end - ticksPerCandle + 1 + i
            const p = priceAt(sym, t)
            if (p > h) h = p
            if (p < l) l = p
            cl = p
            v += syntheticTrades(sym, t).reduce((sum, x) => sum + x.qty, 0)
        }
        out.push({ t: (end - ticksPerCandle + 1) * TICK_MS, o: round2(o), h: round2(h), l: round2(l), c: round2(cl), v })
    }
    return out
}

/* ═══════════════════════════════════════════════════════════════════════════
 * TRADING SYSTEM - $AS (Dollar AS)
 * ═══════════════════════════════════════════════════════════════════════════ */
const TRADING_DB_FILE = path.join(HERE, 'trading-data.json')
const INITIAL_BALANCE = 100
const DAILY_BONUS = 10
const MIN_TOPUP_IDR = 5000
const MAX_TOPUP_IDR = 200000
const AS_PER_1000_IDR = Number(process.env.UMI_AS_PER_1000_IDR || 10) // Rp1.000 = $AS 10
const REDEEM_CODES = {
    'UMI2024': { amount: 50, maxUses: 100, used: 0 },
    'TRADING': { amount: 25, maxUses: 50, used: 0 },
    'WELCOME': { amount: 15, maxUses: 200, used: 0 },
    'BONUS': { amount: 10, maxUses: 500, used: 0 },
}
let tradingDB = { users: {}, lastDailyReset: '', deposits: {} }
const realTrades = new Map() // sym -> transaksi asli pemain (in-memory)
function loadTradingDB() {
    try {
        const parsed = JSON.parse(fs.readFileSync(TRADING_DB_FILE, 'utf8'))
        tradingDB = { users: parsed.users || {}, lastDailyReset: parsed.lastDailyReset || '', deposits: parsed.deposits || {} }
    } catch { tradingDB = { users: {}, lastDailyReset: '', deposits: {} }; saveTradingDB() }
}
function saveTradingDB() { try { fs.writeFileSync(TRADING_DB_FILE, JSON.stringify(tradingDB, null, 2)) } catch (e) { console.log('[trading] save error:', e.message) } }
function getTradingUser(token) {
    if (!tradingDB.users[token]) {
        tradingDB.users[token] = { balance: INITIAL_BALANCE, portfolio: {}, history: [], lastDailyBonus: '', realized: 0, deposits: [] }
        saveTradingDB()
    }
    return tradingDB.users[token]
}
function checkDailyBonus(user) {
    const today = new Date().toISOString().split('T')[0]
    if (user.lastDailyBonus !== today) {
        user.balance += DAILY_BONUS; user.lastDailyBonus = today
        user.history.push({ type: 'daily', amount: DAILY_BONUS, time: new Date().toISOString(), symbol: '$AS' })
        saveTradingDB(); return true
    }
    return false
}

/** Nilai portofolio pada harga sekarang + P/L belum terealisasi. */
function portfolioView(user, tick = nowTick()) {
    const rows = Object.entries(user.portfolio || {}).map(([sym, pos]) => {
        const price = MARKET_BY_SYM[sym] ? priceAt(sym, tick) : pos.avgPrice
        const value = price * pos.qty, cost = pos.avgPrice * pos.qty
        return {
            sym, qty: round2(pos.qty), avgPrice: round2(pos.avgPrice),
            price: round2(price), value: round2(value), cost: round2(cost),
            pl: round2(value - cost), plPct: round2(cost ? ((value - cost) / cost) * 100 : 0),
        }
    })
    const equity = rows.reduce((sum, r) => sum + r.value, 0)
    const cost = rows.reduce((sum, r) => sum + r.cost, 0)
    return {
        rows, equity: round2(equity), cost: round2(cost),
        unrealized: round2(equity - cost),
        netWorth: round2(user.balance + equity),
    }
}

function pushRealTrade(sym, side, price, qty, username) {
    const list = realTrades.get(sym) || []
    list.push({ side, price: round2(price), qty, at: Date.now(), user: username || 'Trader', real: true })
    while (list.length > 60) list.shift()
    realTrades.set(sym, list)
}

/** Feed gabungan: transaksi pemain asli + pasar sintetis. */
function feedOf(sym, limit = 40) {
    const tick = nowTick()
    const items = []
    for (let i = 0; i < Math.min(120, limit * 2); i++) items.push(...syntheticTrades(sym, tick - i))
    items.push(...(realTrades.get(sym) || []))
    items.sort((a, b) => b.at - a.at)
    return items.slice(0, limit)
}

function mapQuotes(tick = nowTick()) { return MARKETS.map((m) => quoteOf(m.sym, tick)) }
function mapTraffic(ticks = 100) { return MARKETS.map((m) => { const q = quoteOf(m.sym), t = trafficOf(m.sym, ticks); return { ...t, name: q.name, price: q.price, changePct: q.changePct } }) }

async function handleTradingAPI(req, res, url, parts) {
    try {
        /* ── Masuk / verifikasi token ── */
        if (req.method === 'POST' && parts[0] === 'login') {
            const body = await readBody(req)
            const token = String(body.token || '')
            if (!token) return sendJson(res, 400, { error: 'Token diperlukan' })
            let verifiedUser = null
            try {
                const v = await fetch(VERIFY_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token }),
                    signal: AbortSignal.timeout(15000),
                })
                const vd = await v.json().catch(() => ({}))
                if (!vd.ok) return sendJson(res, 401, { error: vd.error || 'Token tidak valid' })
                verifiedUser = vd.user || {}
            } catch (e) { return sendJson(res, 500, { error: 'Verifikasi gagal: ' + e.message }) }
            const user = getTradingUser(token)
            const hadBonus = checkDailyBonus(user)
            const view = portfolioView(user)
            saveTradingDB()
            return sendJson(res, 200, {
                ok: true, token,
                user: { username: verifiedUser.username || '', roles: verifiedUser.roles || [], owner: Boolean(verifiedUser.owner), joined: verifiedUser.joined || null },
                balance: round2(user.balance), portfolio: user.portfolio, equity: view.equity, netWorth: view.netWorth,
                realized: round2(user.realized || 0),
                history: (user.history || []).slice(-200), dailyBonus: hadBonus ? DAILY_BONUS : 0,
                deposits: (user.deposits || []).slice(-50),
                market: mapQuotes(),
            })
        }

        /* ── Data akun ── */
        if (req.method === 'GET' && parts[0] === 'me') {
            const token = url.searchParams.get('token')
            if (!token) return sendJson(res, 400, { error: 'Token diperlukan' })
            const user = getTradingUser(token); checkDailyBonus(user)
            const view = portfolioView(user)
            return sendJson(res, 200, {
                ok: true, balance: round2(user.balance), portfolio: user.portfolio,
                equity: view.equity, netWorth: view.netWorth, unrealized: view.unrealized,
                positions: view.rows, realized: round2(user.realized || 0),
                history: (user.history || []).slice(-200),
                deposits: (user.deposits || []).slice(-50),
            })
        }

        /* ── Pasar ── */
        if (req.method === 'GET' && parts[0] === 'market') {
            const view = portfolioView(getTradingUser(String(url.searchParams.get('token') || '')))
            return sendJson(res, 200, { ok: true, symbols: mapQuotes(), time: Date.now(), tickMs: TICK_MS, holdings: view.rows })
        }
        if (req.method === 'GET' && parts[0] === 'candles') {
            const sym = String(url.searchParams.get('symbol') || 'UMI').toUpperCase()
            if (!MARKET_BY_SYM[sym]) return sendJson(res, 404, { error: 'Saham tidak dikenal' })
            const tf = TIMEFRAMES[String(url.searchParams.get('tf') || '1m')] || 20
            const limit = Math.max(20, Math.min(180, Number(url.searchParams.get('limit')) || 96))
            return sendJson(res, 200, { ok: true, symbol: sym, tickPerCandle: tf, candles: candlesOf(sym, tf, limit) })
        }
        if (req.method === 'GET' && parts[0] === 'traffic') {
            const ticks = Math.max(20, Math.min(600, Number(url.searchParams.get('ticks')) || 100))
            return sendJson(res, 200, { ok: true, window: ticks * TICK_MS, rows: mapTraffic(ticks), time: Date.now() })
        }
        if (req.method === 'GET' && parts[0] === 'feed') {
            const sym = String(url.searchParams.get('symbol') || 'UMI').toUpperCase()
            if (!MARKET_BY_SYM[sym]) return sendJson(res, 404, { error: 'Saham tidak dikenal' })
            return sendJson(res, 200, { ok: true, symbol: sym, trades: feedOf(sym, 40), depth: depthOf(sym), quote: quoteOf(sym) })
        }
        if (req.method === 'GET' && parts[0] === 'codes') {
            return sendJson(res, 200, { ok: true, codes: Object.entries(REDEEM_CODES).map(([code, c]) => ({ code, amount: c.amount, left: Math.max(0, c.maxUses - c.used) })) })
        }

        /* ── Stream real-time (SSE) ── */
        if (req.method === 'GET' && parts[0] === 'stream') {
            res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' })
            let last = 0
            const tick = async () => {
                try {
                    const current = nowTick()
                    if (current !== last) {
                        last = current
                        res.write(`data: ${JSON.stringify({ type: 'market', time: Date.now(), symbols: mapQuotes(current), traffic: mapTraffic(100) })}\n\n`)
                    } else {
                        res.write(': ping\n\n')
                    }
                } catch { cleanup() }
            }
            const timer = setInterval(tick, 2000)
            const cleanup = () => { clearInterval(timer) }
            res.write(`data: ${JSON.stringify({ type: 'hello', tickMs: TICK_MS, symbols: mapQuotes(), traffic: mapTraffic(100) })}\n\n`)
            req.on('close', cleanup)
            return
        }

        /* ── Beli / jual (harga dari server, bukan dari klien) ── */
        if (req.method === 'POST' && parts[0] === 'trade') {
            const body = await readBody(req)
            const token = String(body.token || '')
            const sym = String(body.symbol || '').toUpperCase()
            const side = String(body.side || '').toLowerCase()
            const amount = Number(body.amount)
            if (!token) return sendJson(res, 401, { error: 'Token diperlukan. Masuk dulu.' })
            if (!MARKET_BY_SYM[sym]) return sendJson(res, 400, { error: 'Saham tidak dikenal.' })
            if (!['buy', 'sell'].includes(side)) return sendJson(res, 400, { error: 'Aksi harus beli atau jual.' })
            if (!Number.isFinite(amount) || amount <= 0) return sendJson(res, 400, { error: 'Jumlah lot tidak valid.' })
            if (amount > 1000000) return sendJson(res, 400, { error: 'Jumlah terlalu besar.' })
            const price = round2(priceAt(sym, nowTick()))
            const user = getTradingUser(token)
            const total = round2(amount * price)
            if (side === 'buy') {
                if (user.balance < total) {
                    return sendJson(res, 400, {
                        error: `Saldo tidak cukup. Butuh $AS ${total.toFixed(2)} (${amount} × ${price.toFixed(2)}), saldo kamu $AS ${Number(user.balance).toFixed(2)}.`,
                        code: 'INSUFFICIENT', need: total, balance: round2(user.balance), maxAmount: Math.floor((user.balance / price) * 100) / 100,
                    })
                }
                user.balance = round2(user.balance - total)
                const pos = user.portfolio[sym] || { qty: 0, avgPrice: 0 }
                const nq = pos.qty + amount
                pos.avgPrice = ((pos.avgPrice * pos.qty) + total) / nq
                pos.qty = nq
                user.portfolio[sym] = pos
            } else {
                const pos = user.portfolio[sym]
                if (!pos || pos.qty < amount) {
                    return sendJson(res, 400, { error: `Posisi ${sym} tidak cukup. Kamu punya ${pos ? pos.qty.toFixed(2) : '0'} lot.`, code: 'NO_POSITION', holding: pos ? pos.qty : 0 })
                }
                user.balance = round2(user.balance + total)
                user.realized = round2((user.realized || 0) + (price - pos.avgPrice) * amount)
                pos.qty = round2(pos.qty - amount)
                if (pos.qty <= 0.000001) delete user.portfolio[sym]
            }
            user.history.push({ type: side, symbol: sym, amount, price, total, time: new Date().toISOString() })
            pushRealTrade(sym, side, price, amount, '')
            saveTradingDB()
            const view = portfolioView(user)
            return sendJson(res, 200, {
                ok: true, symbol: sym, side, amount, price, total,
                balance: round2(user.balance), portfolio: user.portfolio, positions: view.rows,
                equity: view.equity, netWorth: view.netWorth, unrealized: view.unrealized,
                realized: round2(user.realized || 0),
                history: (user.history || []).slice(-200),
            })
        }

        /* ── Redeem kode ── */
        if (req.method === 'POST' && parts[0] === 'redeem') {
            const body = await readBody(req)
            const { token, code } = body
            if (!token || !code) return sendJson(res, 400, { error: 'Token dan kode diperlukan' })
            const user = getTradingUser(token); const key = String(code).toUpperCase().trim()
            const rc = REDEEM_CODES[key]
            if (!rc) return sendJson(res, 400, { error: 'Kode tidak valid.' })
            if (rc.used >= rc.maxUses) return sendJson(res, 400, { error: 'Kode sudah habis.' })
            if ((user.history || []).some(h => h.type === 'redeem' && h.code === key)) return sendJson(res, 400, { error: 'Kode sudah kamu pakai.' })
            user.balance = round2(user.balance + rc.amount); rc.used++
            user.history.push({ type: 'redeem', code: key, amount: rc.amount, time: new Date().toISOString() })
            saveTradingDB()
            return sendJson(res, 200, { ok: true, code: key, amount: rc.amount, balance: round2(user.balance) })
        }

        /* ── Top up $AS dari saldo UMI (Rp) ── */
        if (req.method === 'POST' && parts[0] === 'topup') {
            const body = await readBody(req)
            const token = String(body.token || '')
            if (!token) return sendJson(res, 401, { error: 'Token diperlukan. Masuk dulu.' })
            /* status saldo UMI tanpa menarik dana */
            if (body.action === 'status') {
                try {
                    const r = await fetch(TOPUP_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, action: 'status' }), signal: AbortSignal.timeout(15000) })
                    const d = await r.json().catch(() => ({}))
                    return sendJson(res, r.ok ? 200 : 502, d)
                } catch (e) { return sendJson(res, 502, { ok: false, error: 'Tidak bisa menghubungi platform: ' + e.message }) }
            }
            const amountIdr = Math.floor(Number(body.amountIdr))
            if (!Number.isFinite(amountIdr) || amountIdr < MIN_TOPUP_IDR || amountIdr > MAX_TOPUP_IDR) {
                return sendJson(res, 400, { error: `Nominal top up harus Rp${MIN_TOPUP_IDR.toLocaleString('id-ID')} – Rp${MAX_TOPUP_IDR.toLocaleString('id-ID')}.` })
            }
            const reference = String(body.reference || `${token.slice(0, 8)}-${Date.now()}`)
            const user = getTradingUser(token)
            user.deposits = user.deposits || []
            const done = user.deposits.find(d => d.reference === reference)
            if (done) return sendJson(res, 200, { ok: true, duplicate: true, credited: done.credit, idr: done.idr, balance: round2(user.balance), walletBalance: done.walletBalance })
            let payload
            try {
                const r = await fetch(TOPUP_URL, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token, amountIdr, reference, source: 'umi-games' }),
                    signal: AbortSignal.timeout(25000),
                })
                payload = await r.json().catch(() => ({}))
                if (!r.ok || !payload.ok) return sendJson(res, r.status === 402 ? 402 : 400, { ok: false, error: payload.error || 'Top up gagal.' })
            } catch (e) { return sendJson(res, 502, { ok: false, error: 'Tidak bisa menghubungi platform: ' + e.message }) }
            const credit = round2(Number(payload.credited) || 0)
            user.balance = round2(user.balance + credit)
            user.deposits.push({ reference, idr: amountIdr, credit, walletBalance: payload.walletBalance, time: new Date().toISOString() })
            user.history.push({ type: 'topup', amount: credit, idr: amountIdr, reference, time: new Date().toISOString() })
            saveTradingDB()
            return sendJson(res, 200, { ok: true, credited: credit, idr: amountIdr, balance: round2(user.balance), walletBalance: payload.walletBalance, rate: payload.rate })
        }

        /* ── Kredit dari platform (internal) ── */
        if (req.method === 'POST' && parts[0] === 'credit') {
            const body = await readBody(req)
            if (!GAME_TOKEN || String(body.token || '') !== GAME_TOKEN) return sendJson(res, 401, { error: 'Tidak sah.' })
            const target = String(body.userToken || '')
            const credit = round2(Number(body.amount) || 0)
            const reference = String(body.reference || '')
            if (!target || !Number.isFinite(credit) || credit === 0) return sendJson(res, 400, { error: 'Parameter tidak lengkap.' })
            const user = getTradingUser(target)
            /* idempoten: referensi yang sama tidak boleh dikredit dua kali
             * (termasuk nilai negatif untuk koreksi/refund dari bot). */
            if (reference && (user.history || []).some(h => h.type === 'topup' && h.reference === reference)) {
                return sendJson(res, 200, { ok: true, duplicate: true, balance: round2(user.balance) })
            }
            user.balance = round2(user.balance + credit)
            user.history.push({ type: 'topup', amount: credit, reference, time: new Date().toISOString() })
            saveTradingDB()
            return sendJson(res, 200, { ok: true, balance: round2(user.balance) })
        }

        return sendJson(res, 404, { error: 'Endpoint tidak ditemukan' })
    } catch (error) {
        console.log('[trading] Error:', error.message)
        return sendJson(res, 500, { error: 'Server error' })
    }
}
loadTradingDB()
setInterval(() => {
    const now = new Date()
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        const today = now.toISOString().split('T')[0]
        if (tradingDB.lastDailyReset !== today) {
            tradingDB.lastDailyReset = today
            Object.values(tradingDB.users).forEach(u => { u.lastDailyBonus = '' })
            saveTradingDB(); console.log('[trading] Daily reset done')
        }
    }
}, 60000)

export function startGameServer(port = 3900) {
    const server = http.createServer(gameHandler)
    server.on('error', (error) => console.log(`[game] port ${port}: ${error.message}`))
    server.listen(port, '0.0.0.0', () => console.log(`[game] Umi Web Games aktif di 0.0.0.0:${port} (token bot ${GAME_TOKEN ? 'siap' : 'BELUM DIATUR'})`))
    startGameCleanup()
    return server
}

/** Jalankan cleanup room tanpa start server terpisah (dipakai saat game terintegrasi). */
export function startGameCleanup() {
    setInterval(() => {
        const cutoff = Date.now() - 6 * 3600 * 1000
        for (const [id, room] of rooms) if (room.lastActivity < cutoff && room.status !== 'playing') rooms.delete(id)
    }, 600000)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    startGameServer(Number(process.env.GAME_PORT || 3900))
}
