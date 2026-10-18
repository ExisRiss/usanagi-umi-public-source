// Presence is cosmetic: a stuck WhatsApp presence request must never block a reply.
function presence(conn, state, chat) {
  try {
    if (typeof conn.sendPresenceUpdate === 'function') Promise.resolve(conn.sendPresenceUpdate(state, chat)).catch(() => {})
  } catch {}
}
export async function sendAutoAIReply(conn, m, text) {
  const body = String(text || '').trim()
  if (!body) return
  presence(conn, 'composing', m.chat)
  // Keep a short natural typing pause, not a multi-second artificial delay.
  // Explicitly scheduled AutoAI command steps keep their separate timing.
  const delay = conn.botConfig?.values?.autoTyping?.enabled === false ? 0 : Math.min(800, Math.max(120, body.length * 4))
  if (delay) await new Promise(resolve => setTimeout(resolve, delay))
  try {
    await m.reply(body)
  } catch {
    try { await conn.sendMessage(m.chat, { text: body }, {}) } catch {}
  } finally { presence(conn, 'paused', m.chat) }
}
