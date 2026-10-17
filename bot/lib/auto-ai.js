import { chatGroq, getGroqSettings, groqBudget, redactProviderSecrets } from './groq-client.js'
import { AUTO_AI_SYSTEM_PROMPT } from './auto-ai-prompt.js'

const cooldowns = new Map(), locks = new Set(), seen = new Map()
const DANGEROUS = /(?:^|[-_])(?:eval|exec|shell|bash|terminal|restartall|logout|delsession|clearsession|deleteall|resetdb|cleardb|addowner|delowner|setowner|setkey|setapikey|gettoken|apikey|credentials|secret|dumpsession|kickall|removeall|buy|pay|buypanel|orderpanel|buyvps|buydomain|topup|purchase|transfer|spam\w*|bomb|crash|rvo|viewonce|fakepay)(?:$|[-_])/i
// Sapu bersih bahasa "mesin" supaya balasan Auto-AI terasa seperti orang chat:
// tidak menyebut antrean/tool/katalog, memakai format WhatsApp (satu bintang),
// dan membuang pembuka kaku khas model.
export function humanizeReply(input) {
  let text = String(input || '').trim()
  if (!text) return ''
  text = text.replace(/^(?:auto-?ai|umi|bot)\s*[:\-]\s*/i, '')
  text = text.replace(/^(?:\*{0,2})(?:berhasil|sukses)(?:\*{0,2})[\s,:!-]+/i, '')
  text = text.replace(/^(?:sudah\s+)?(?:masuk|tercatat|tersimpan)\s+(?:antrean|rencana|daftar)[^:\n]{0,40}:\s*/i, '')
  text = text.replace(/\*\*([^*]+)\*\*/g, '*$1*')
  text = text.replace(/^#{1,6}\s*/gm, '')
  text = text.replace(/`([^`]+)`/g, '$1')
  text = text.replace(/\b(?:command|cmd)\b/gi, 'perintah')
  text = text.replace(/\b(?:antrean|queue)\b/gi, 'rencana')
  text = text.replace(/\b(?:katalog|tool call|tool_calls)\b/gi, 'fitur')
  text = text.replace(/\b(?:plugin)\b/gi, 'fitur')
  text = text.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n')
  return text.trim().slice(0, 1200)
}

const STOPWORDS = new Set('tolong tolonglah bot umi saya aku kamu ini itu yang untuk dong dan ke dari nya please the a an video'.split(' '))
function jidId(value) { return String(value || '').replace(/:\d+(?=@)/, '').split('@')[0] }
export function botIdentities(conn, bot = {}) {
  return [...new Set([conn?.user?.id, conn?.user?.jid, conn?.user?.lid, conn?.authState?.creds?.me?.id, conn?.authState?.creds?.me?.lid, bot.id, bot.jid, bot.lid, bot.phoneNumber].filter(Boolean).map(jidId))]
}
export function shouldAutoAITrigger(m, conn, botConfig = {}, bot = {}) {
  if (!m || m.fromMe || m.key?.fromMe || m.isBaileys || m.__autoAIHandled || !String(m.text || '').trim()) return false
  if (/broadcast|newsletter/.test(String(m.chat || ''))) return false
  if (global.umiAutoAI?.enabled === false || botConfig.autoAIEnabled === false || botConfig.values?.autoAI?.enabled === false) return false
  const identities = botIdentities(conn, bot)
  const mentioned = (m.mentionedJid || []).some(jid => identities.includes(jidId(jid)))
  const replied = Boolean(m.quoted && (m.quoted.fromMe === true || m.quoted.key?.fromMe === true || identities.includes(jidId(m.quoted.sender))))
  return mentioned || replied
}
function accepts(plugin, command) {
  const check = entry => {
    if (entry instanceof RegExp) { entry.lastIndex = 0; const ok = entry.test(command); entry.lastIndex = 0; return ok }
    return String(entry || '').toLowerCase() === command
  }
  return Array.isArray(plugin.command) ? plugin.command.some(check) : check(plugin.command)
}
export function commandAliases(plugin) {
  const candidates = []
  if (typeof plugin.command === 'string') candidates.push(plugin.command)
  if (Array.isArray(plugin.command)) for (const item of plugin.command) if (typeof item === 'string') candidates.push(item)
  for (const item of [].concat(plugin.help || [])) if (typeof item === 'string') candidates.push(item.trim().split(/\s/)[0])
  if (plugin.command instanceof RegExp) {
    const simplified = plugin.command.source.replace(/^\^/, '').replace(/\$$/, '').replace(/^\(/, '').replace(/\)$/, '')
    for (const word of simplified.split('|')) if (/^[a-z0-9_-]+$/i.test(word)) candidates.push(word)
  }
  return [...new Set(candidates.map(s => s.toLowerCase()).filter(s => /^[a-z0-9_-]{1,80}$/.test(s) && accepts(plugin, s)))]
}
export function permissionReason(plugin, context) {
  const { m, botConfig = {}, isROwner, isOwner, isMods, isAdmin, isBotAdmin, isPrems, userData = {} } = context
  if (plugin.disabled || plugin.tags?.includes('admin')) return 'Fitur nonaktif.'
  if (plugin.rowner && !isROwner && !(plugin.jadibotOwner && botConfig.type === 'jadibot' && isOwner)) return 'Hanya developer/owner utama.'
  if ((plugin.owner || plugin.ownerOnly) && !isOwner) return 'Hanya owner bot.'
  if (plugin.mods && !isMods) return 'Hanya moderator.'
  if ((plugin.premium || plugin.premiumOnly) && !isPrems) return 'Memerlukan premium.'
  if ((plugin.group || plugin.groupOnly) && !m.isGroup) return 'Hanya untuk grup.'
  if (plugin.botAdmin && !isBotAdmin) return 'Bot harus menjadi admin grup.'
  if (plugin.admin && !isAdmin) return 'Pengguna harus menjadi admin grup.'
  if ((plugin.private || plugin.privateOnly) && m.isGroup) return 'Hanya untuk chat pribadi.'
  if (botConfig.registrationRequired !== false && !userData.registered && !isOwner && !m.fromMe) return 'Daftar terlebih dahulu.'
  if (Number(plugin.level || 0) > Number(userData.level || 0)) return 'Level belum cukup.'
  if (!isPrems && userData.limit !== -1 && !userData.isUnlimitedLimit && Number(plugin.limit || 0) > Number(userData.limit || 0)) return 'Limit tidak cukup.'
  return ''
}
export function buildCommandCatalog(plugins, context) {
  const entries = []
  const disabled = (context.botConfig?.disabledPlugins || []).map(String)
  for (const [name, plugin] of Object.entries(plugins || {})) {
    if (typeof plugin !== 'function' || plugin.disabled || disabled.some(v => v === name || v === name.replace(/\.js$/, '') || v === name.split('/').pop())) continue
    if (name.startsWith('custom/') && (context.botConfig?.type !== 'jadibot' || !context.botConfig?.enabledCustomPlugins?.includes(name))) continue
    const aliases = commandAliases(plugin)
    if (!aliases.length) continue
    const isUsanagi = name.split('/').pop().startsWith('usanagi-')
    const commands = isUsanagi ? aliases.map(a => 'usanagi-' + a) : aliases
    const safe = commands.filter(a => !DANGEROUS.test(a) && !context.isCommandDisabled?.(name, a))
    if (!safe.length) continue
    const importCfg = plugin.importConfig && typeof plugin.importConfig === 'object' ? plugin.importConfig : null
    const usage = []
    // Urutan penting: usage resmi plugin dulu (paling akurat soal argumen),
    // baru contoh dan baris help. Auto-AI memakai daftar ini untuk mengisi args.
    if (importCfg && importCfg.usage) usage.push(String(importCfg.usage))
    if (importCfg && importCfg.example) usage.push(String(importCfg.example))
    for (const line of [].concat(plugin.help || [])) if (typeof line === 'string') usage.push(line)
    const cleanUsage = [...new Set(usage.map(line => line.trim()).filter(Boolean))].slice(0, 8)
    const description = String(plugin.description || plugin.importDescription || (importCfg && importCfg.description) || '').slice(0, 400)
    const category = [].concat(plugin.tags || [], (importCfg && importCfg.category) || []).join(' ')
    entries.push({ name, command: safe[0], aliases: safe, usage: cleanUsage, description, category, denied: permissionReason(plugin, context), plugin })
  }
  return entries
}
function words(text) {
  let value = String(text || '').toLowerCase().replace(/https?:\/\/\S+/g, ' ')
  value = value.replace(/tutup/g, 'tutup close closegc').replace(/buka/g, 'buka open opengc').replace(/grup/g, 'grup group gc').replace(/unduh|download|donlot/g, 'download downloader').replace(/stiker|sticker/g, 'sticker stiker')
  value = value.replace(/brat\s*vid(eo)?/g, 'bratvid2 bratv2 bratvideo').replace(/\bbrat\b/g, 'brat bratvid2 bratv2').replace(/ular tangga/g, 'ulartangga ularpapan ular').replace(/main game|game/g, 'game main')
  return [...new Set(value.split(/[^a-z0-9_-]+/).filter(v => v.length > 1 && !STOPWORDS.has(v)))].slice(0, 30)
}
export function searchCatalog(catalog, query, limit = 12) {
  const terms = words(query)
  return catalog.map(entry => {
    const body = [entry.name, ...entry.aliases, ...entry.usage, entry.category, entry.description].join(' ').toLowerCase()
    let score = terms.reduce((sum, term) => sum + (entry.aliases.some(a => a === term || a.endsWith('-' + term)) ? 12 : body.includes(term) ? 3 : 0), 0)
    if (/tutup|close/.test(query) && entry.aliases.some(a => /^(close|tutup|closegroup|tutupgroup|closegc|tutupgrup|grupclose|gctutup)$/.test(a))) score += 30
    if (/buka|open/.test(query) && entry.aliases.some(a => /^(open|buka|opengroup|bukagroup|opengc|bukagrup)$/.test(a))) score += 30
    if (/tiktok/.test(query) && entry.aliases.some(a => /^(tiktok|tt|tiktokdl)$/.test(a))) score += 35
    if (/ular\s*tangga|ular/.test(query) && entry.aliases.some(a => /^(ular|ularpapan|ularrich|ularwa)$/.test(a))) score += 28
    return { entry, score }
  }).filter(row => row.score > 0).sort((a,b) => b.score-a.score || Number(Boolean(a.entry.denied))-Number(Boolean(b.entry.denied))).slice(0, limit).map(({ entry }) => ({ plugin: entry.name, command: entry.command, aliases: entry.aliases.slice(0, 10), usage: entry.usage.slice(0, 3), description: entry.description.slice(0, 160), category: entry.category.slice(0, 60), allowed: !entry.denied, reason: entry.denied || undefined }))
}
function cleanInput(m, identities) {
  let text = String(m.text || '')
  for (const id of identities) text = text.replace(new RegExp('@' + id.replace(/[^0-9]/g, '') + '\\b', 'g'), '')
  return text.trim().slice(0, 6000)
}

// Satu baris ringkas per fitur; makin pendek prompt, makin kecil token terpakai.
function compactCandidate(entry) {
  return [entry.command, entry.plugin, entry.aliases.slice(0, 4).join(','), entry.description.slice(0, 80)]
    .filter(Boolean).join('|')
}

function extractJson(text) {
  const raw = String(text || '').trim()
  if (!raw) return null
  try { return JSON.parse(raw) } catch { }
  const start = raw.indexOf('{')
  const end = raw.lastIndexOf('}')
  if (start >= 0 && end > start) {
    const slice = raw.slice(start, end + 1)
    try { return JSON.parse(slice) } catch { }
    try { return JSON.parse(slice.replace(/,\s*([}\]])/g, '$1').replace(/'/g, '"')) } catch { }
  }
  return null
}

function parsePlan(answer) {
  const text = String(answer?.content || '').trim()
  const parsed = extractJson(text)
  if (parsed && typeof parsed === 'object') {
    const commands = Array.isArray(parsed.commands) ? parsed.commands
      : Array.isArray(parsed.command) ? parsed.command
      : parsed.command ? [{ command: parsed.command, args: parsed.args, delay: parsed.delay }] : []
    return { reply: String(parsed.reply || parsed.answer || parsed.text || ''), commands, need: String(parsed.need || parsed.search || '') }
  }
  // Dukungan model yang masih memakai tool_calls (mis. pemanggil kustom/uji lama).
  const calls = Array.isArray(answer?.tool_calls) ? answer.tool_calls : []
  if (calls.length) {
    const commands = []
    for (const call of calls) {
      let args = {}
      try { args = JSON.parse(call.function?.arguments || '{}') } catch { }
      if (call.function?.name === 'run_command') commands.push({ command: args.command, args: args.args, delay: args.delay_seconds })
      if (call.function?.name === 'search_commands') return { reply: '', commands: [], need: String(args.query || '') }
    }
    return { reply: text, commands, need: '' }
  }
  return { reply: text, commands: [], need: '' }
}

function clampDelay(value) {
  const number = Number(String(value ?? '').replace(',', '.').match(/-?\d+(?:\.\d+)?/)?.[0])
  if (!Number.isFinite(number) || number <= 0) return 0
  return Math.max(0, Math.min(7 * 24 * 3600, Math.round(number))) * 1000
}

export async function planAutoAI(context, options = {}) {
  const { m, conn, botConfig = {}, activePrefix = '/' } = context
  if (!shouldAutoAITrigger(m, conn, botConfig, context.bot)) return { kind: 'skip' }
  if (String(m.text || '').startsWith(String(activePrefix))) return { kind: 'skip' }
  const key = `${botConfig.scope || conn?.user?.id}:${m.chat}:${m.sender}`
  const messageId = m.key?.id || m.id
  const seenKey = messageId && `${botConfig.scope || conn?.user?.id}:${m.chat}:${messageId}`
  if (seenKey && seen.has(seenKey)) return { kind: 'skip' }
  if (locks.has(key)) return { kind: 'answer', answer: 'sabar ya, yang tadi masih kupikirkan dulu 🙏' }
  const cooldownMs = Number(global.umiAutoAI?.cooldownMs) || 5000
  if (!options.ignoreCooldown && (cooldowns.get(key) || 0) > Date.now() - cooldownMs) {
    return { kind: 'answer', answer: 'eh pelan-pelan, baru juga aku jawab yang tadi 😅' }
  }
  if (cooldowns.size > 5000) for (const [k, t] of cooldowns) if (t < Date.now() - 600_000) cooldowns.delete(k)
  for (const [k, t] of seen) if (t < Date.now() - 180_000) seen.delete(k)
  cooldowns.set(key, Date.now()); locks.add(key); if (seenKey) seen.set(seenKey, Date.now())
  try {
    if (context.chatData?.isBanned || context.userData?.banned) return { kind: 'skip' }
    if (context.chatData?.adminOnly && !context.isAdmin && !context.isOwner) return { kind: 'answer', answer: 'ini cuma buat admin grup ya' }
    if (botConfig.registrationRequired !== false && !context.userData?.registered && !context.isOwner) {
      return { kind: 'answer', answer: `kenalan dulu yuk, ketik ${activePrefix}daftar Nama,Umur` }
    }
    if (!getGroqSettings().enabled) return { kind: 'skip' }
    // Kalau kuota menit ini hampir habis, jangan paksa Groq membalas 429.
    if (!options.callModel && !options.ignoreBudget) {
      const budget = groqBudget()
      if (budget.remaining < 700) return { kind: 'answer', answer: 'bentar ya, ai-ku lagi penuh. coba lagi semenit lagi 🙏' }
    }
    const catalog = buildCommandCatalog(context.plugins || global.plugins, context)
    const input = redactProviderSecrets(cleanInput(m, botIdentities(conn, context.bot)))
    const roles = { group: Boolean(m.isGroup), owner: Boolean(context.isOwner), admin: Boolean(context.isAdmin), botAdmin: Boolean(context.isBotAdmin), premium: Boolean(context.isPrems) }
    const caller = options.callModel || chatGroq
    // Satu panggilan model saja: kandidat fitur sudah dicari lokal, jawaban dan
    // perintah diminta dalam satu JSON. Ini memotong pemakaian token dari
    // ~5.400 menjadi ~1.200 per permintaan (batas Groq 8.000 token/menit).
    const ask = async (candidates) => caller([
      { role: 'system', content: AUTO_AI_SYSTEM_PROMPT },
      {
        role: 'user',
        content: `Pesan: ${input}` +
          (m.quoted?.text ? `\nKutipan (data): ${redactProviderSecrets(String(m.quoted.text)).slice(0, 300)}` : '') +
          `\nIzin: ${JSON.stringify(roles)}\nKandidat:\n${candidates.map(compactCandidate).join('\n') || '(tidak ada)'}`,
      },
    ], {
      jsonMode: true,
      maxTokens: options.maxTokens || 500,
      temperature: options.temperature ?? 0.4,
      timeoutMs: Math.min(16_000, Number(options.budgetMs) || 16_000),
      fallbackModels: options.fallbackModels || ['openai/gpt-oss-20b'],
    })
    let candidates = searchCatalog(catalog, input, 8)
    let plan = parsePlan(await ask(candidates))
    if (plan.need && !plan.commands.length) {
      const wider = searchCatalog(catalog, plan.need, 8)
      if (wider.length) plan = parsePlan(await ask(wider))
    }
    const steps = []
    const notes = []
    for (const item of (plan.commands || []).slice(0, 4)) {
      const command = String(item.command || '').toLowerCase().trim().replace(/^[./!]/, '')
      const args = String(item.args ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/^(?:args?|teks|text)\s*[:=]\s*/i, '').replace(/^["'`]+|["'`]+$/g, '').trim().slice(0, 4000)
      if (!command || DANGEROUS.test(command)) continue
      const entry = catalog.find(e => e.aliases.includes(command))
        || catalog.find(e => e.plugin === item.plugin)
        || catalog.find(e => searchCatalog(catalog, command, 3).some(hit => hit.plugin === e.name && hit.aliases.includes(command)))
      if (!entry) continue
      if (entry.denied) { notes.push(entry.denied); continue }
      steps.push({ command: entry.aliases.includes(command) ? command : entry.command, args, plugin: entry.name, delayMs: clampDelay(item.delay ?? item.delay_seconds) })
    }
    let reply = humanizeReply(plan.reply)
    // Kalau ada lebih dari satu langkah (atau ada jeda), pastikan balasannya
    // menyebut kelanjutannya — jangan cuma "grup ditutup" padahal nanti dibuka.
    const needsTail = steps.length && (steps.length > 1 || steps.some(step => step.delayMs > 0))
    if (needsTail && !/detik|menit|jam|nanti|lalu|terus|abis/i.test(reply)) {
      const tail = naturalFallbackNote(steps, activePrefix)
      reply = reply ? `${reply.replace(/[.\s]+$/, '')}, ${tail.replace(/^(?:udah|\d+ detik lagi)\s*/i, '')}` : tail
    }
    if (!reply && steps.length) reply = naturalFallbackNote(steps, activePrefix)
    const base = { originalText: m.text, botMentionIds: botIdentities(conn, context.bot), note: reply.slice(0, 600) }
    if (steps.length) {
      const ordered = steps.sort((a, b) => a.delayMs - b.delayMs)
      if (ordered.length === 1 && ordered[0].delayMs === 0) return { kind: 'command', ...ordered[0], ...base }
      return { kind: 'steps', steps: ordered, ...base }
    }
    return { kind: 'answer', answer: reply || (notes[0] ? String(notes[0]).toLowerCase() : 'hmm maksudnya gimana? coba jelasin dikit lagi') }
  } catch (error) {
    const detail = String(error?.message || '')
    const pesan = /batas|limit|429/i.test(detail)
      ? 'aduh ai-ku lagi kena limit groq, coba lagi sebentar ya 😅'
      : /koneksi|jaringan|timeout|batas waktu/i.test(detail)
        ? 'ai-ku lagi susah konek, coba lagi ya 🙏'
        : 'aduh ada kendala di ai-ku, coba lagi nanti ya'
    return { kind: 'answer', answer: pesan }
  } finally { locks.delete(key) }
}

// Kalimat cadangan kalau model mengantrekan perintah tapi tidak menulis balasan.
function naturalFallbackNote(steps, prefix) {
  const first = steps[0]
  const label = step => step.command
  const head = first.delayMs ? `${Math.round(first.delayMs / 1000)} detik lagi tak ${label(first)}` : `udah tak ${label(first)}`
  const rest = steps.slice(1).map(step => `${Math.round(step.delayMs / 1000)} detik lagi tak ${label(step)}`)
  return rest.length ? `${head}, terus ${rest.join(', ')} ya` : `${head} ya`
}
