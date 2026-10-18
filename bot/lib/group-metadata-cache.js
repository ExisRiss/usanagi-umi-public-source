// Per-socket metadata cache: shared by handlers and Baileys outbound encryption.
// Never use stale participants for permission checks after invalidation/rate limits.
const copy = value => structuredClone(value)
const limited = error => /rate.?overlimit|rate.?limit/i.test(String(error?.message || '')) || Number(error?.output?.statusCode || error?.statusCode) === 429
export function createGroupMetadataCache({ fetchGroup, fetchAll, now = Date.now, ttlMs = 30000, backoffMs = 60000, maxEntries = 256 }) {
  const entries = new Map(), flights = new Map(), versions = new Map()
  let blockedUntil = 0, allCache = null, allFlight = null, epoch = 0, session = 0
  function ready() {
    if (now() < blockedUntil) throw Object.assign(new Error('Metadata WhatsApp dibatasi sementara; tunggu sebelum mencoba lagi.'), { statusCode: 429, retryAfterMs: blockedUntil - now() })
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
    const task = Promise.resolve().then(() => fetchGroup(id)).then(data => {
      if (generation !== session || (versions.get(id) || 0) !== version) throw Error('Metadata grup berubah; ulangi permintaan.')
      if (!Array.isArray(data?.participants)) throw Error('Metadata grup tidak lengkap.')
      put(id, data); return data
    }).catch(error => { if (limited(error)) blockedUntil = now() + backoffMs; throw error })
    flights.set(id, task)
    try { return copy(await task) } finally { if (flights.get(id) === task) flights.delete(id) }
  }
  async function all() {
    if (allCache?.expires > now()) return copy(allCache.value)
    if (allFlight) return copy(await allFlight)
    ready(); const version = epoch
    const task = Promise.resolve().then(fetchAll).then(groups => {
      if (version !== epoch) throw Error('Daftar grup berubah; ulangi permintaan.')
      for (const [id, data] of Object.entries(groups || {})) put(id, data)
      allCache = { value: copy(groups || {}), expires: now() + ttlMs }; return groups || {}
    }).catch(error => { if (limited(error)) blockedUntil = now() + backoffMs; throw error })
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
