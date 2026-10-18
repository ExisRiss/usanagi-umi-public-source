// Per-socket metadata cache: shared by handlers and Baileys outbound encryption.
// Never use stale participants for permission checks after invalidation/rate limits.
const copy = value => structuredClone(value)
const limited = error => /rate.?overlimit|rate.?limit/i.test(String(error?.message || '')) || Number(error?.output?.statusCode || error?.statusCode) === 429
export function createGroupMetadataCache({ fetchGroup, fetchAll, now = Date.now, ttlMs = 30000, backoffMs = 60000, maxEntries = 256, fetchTimeoutMs = 8000 }) {
  const entries = new Map(), flights = new Map(), versions = new Map()
  let blockedUntil = 0, blockedStatus = 429, allCache = null, allFlight = null, epoch = 0, session = 0
  function ready() {
    if (now() < blockedUntil) throw Object.assign(new Error(blockedStatus === 429 ? 'Metadata WhatsApp dibatasi sementara; tunggu sebelum mencoba lagi.' : 'Metadata WhatsApp belum merespons; coba lagi sebentar.'), { statusCode: blockedStatus, retryAfterMs: blockedUntil - now() })
  }
  async function query(fetcher) {
    let timer
    try {
      return await Promise.race([
        Promise.resolve().then(fetcher),
        new Promise((_, reject) => { timer = setTimeout(() => reject(Object.assign(new Error('Metadata WhatsApp timeout.'), { code: 'GROUP_METADATA_TIMEOUT', statusCode: 503 })), fetchTimeoutMs) }),
      ])
    } finally { clearTimeout(timer) }
  }
  function failure(error) {
    if (limited(error)) { blockedStatus = 429; blockedUntil = now() + backoffMs }
    else if (error?.code === 'GROUP_METADATA_TIMEOUT') { blockedStatus = 503; blockedUntil = now() + Math.min(5000, backoffMs) }
    throw error
  }
  function put(id, data) {
    if (!Array.isArray(data?.participants)) return
    entries.delete(id); entries.set(id, { value: copy(data), expires: now() + ttlMs })
    while (entries.size > maxEntries) entries.delete(entries.keys().next().value)
  }
  function invalidate(id) {
    epoch++; allCache = null; allFlight = null
    if (id) { entries.delete(id); flights.delete(id); versions.set(id, epoch) }
    else { session++; entries.clear(); flights.clear(); versions.clear() }
  }
  async function get(id) {
    const hit = entries.get(id)
    if (hit?.expires > now()) return copy(hit.value)
    if (flights.has(id)) return copy(await flights.get(id))
    ready()
    const version = versions.get(id) || 0, generation = session
    const task = query(() => fetchGroup(id)).then(data => {
      if (generation !== session || (versions.get(id) || 0) !== version) throw Error('Metadata grup berubah; ulangi permintaan.')
      if (!Array.isArray(data?.participants)) throw Error('Metadata grup tidak lengkap.')
      put(id, data); return data
    }).catch(failure)
    flights.set(id, task)
    try { return copy(await task) } finally { if (flights.get(id) === task) flights.delete(id) }
  }
  async function all() {
    if (allCache?.expires > now()) return copy(allCache.value)
    if (allFlight) return copy(await allFlight)
    ready(); const version = epoch
    const task = query(fetchAll).then(groups => {
      if (version !== epoch) throw Error('Daftar grup berubah; ulangi permintaan.')
      for (const [id, data] of Object.entries(groups || {})) put(id, data)
      allCache = { value: copy(groups || {}), expires: now() + ttlMs }; return groups || {}
    }).catch(failure)
    allFlight = task
    try { return copy(await task) } finally { if (allFlight === task) allFlight = null }
  }
  function bind(events) {
    events.on('group-participants.update', event => invalidate(event.id))
    events.on('groups.update', rows => { for (const row of rows || []) invalidate(row.id) })
    events.on('connection.update', event => { if (event.connection === 'close') invalidate() })
  }
  return { get, all, invalidate, bind }
}
