/* By AlzRiss - Usanagi Umi AI
 *
 * Konfigurasi sistem backup 10-menitan.
 *
 * Semua nilai dibaca dari environment. Berkas `.backup-system.env` di root bot
 * dimuat otomatis bila ada (pola yang sama dengan `.env.groq`), supaya tidak
 * bergantung pada startup command panel.
 *
 * Tidak pernah mencetak nilai secret ke log.
 */
import fs from 'node:fs'
import path from 'node:path'

const DEFAULT_INTERVAL_MINUTES = 10

let envLoaded = false

/** Muat `.backup-system.env` sekali, tanpa menimpa environment yang sudah ada. */
export function loadBackupEnv(cwd = process.cwd()) {
  if (envLoaded) return
  envLoaded = true
  const file = path.join(cwd, '.backup-system.env')
  if (!fs.existsSync(file)) return
  try {
    const text = fs.readFileSync(file, 'utf8')
    for (const raw of text.split('\n')) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const index = line.indexOf('=')
      if (index < 1) continue
      const key = line.slice(0, index).trim()
      let value = line.slice(index + 1).trim()
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) process.env[key] = value
    }
  } catch (error) {
    console.error('[BACKUP] Gagal membaca .backup-system.env:', error.message)
  }
}

function intValue(raw, fallback, min, max) {
  const value = Number.parseInt(String(raw === undefined ? '' : raw), 10)
  if (!Number.isFinite(value)) return fallback
  if (value < min || value > max) return fallback
  return value
}

function numberValue(raw, fallback, min, max) {
  const value = Number(raw)
  if (!Number.isFinite(value)) return fallback
  if (value < min || value > max) return fallback
  return Math.round(value)
}

export function isEnabled(raw, fallback = false) {
  const value = String(raw === undefined ? '' : raw).trim().toLowerCase()
  if (!value) return fallback
  return ['1', 'true', 'on', 'yes', 'aktif'].includes(value)
}

function listValue(raw) {
  return String(raw || '')
    .split(/[,\s]+/)
    .map(item => item.trim())
    .filter(Boolean)
}

/**
 * Konfigurasi lengkap. Dipanggil setiap kali dibutuhkan supaya perubahan
 * environment (mis. setelah restart panel) langsung terbaca.
 */
export function backupConfig(cwd = process.cwd()) {
  loadBackupEnv(cwd)
  const root = path.resolve(cwd, process.env.BACKUP_STORAGE_PATH || path.join('data', 'backup-system'))
  const intervalMinutes = intValue(process.env.BACKUP_INTERVAL_MINUTES, DEFAULT_INTERVAL_MINUTES, 1, 1440)
  const encryptionKey = String(process.env.BACKUP_ENCRYPTION_KEY || '').trim()
  const externalBackend = String(process.env.BACKUP_EXTERNAL_BACKEND || 'none').trim().toLowerCase()
  return {
    cwd,
    root,
    appVersion: String(process.env.BACKUP_APP_VERSION || '10.1.0'),
    host: String(process.env.BACKUP_HOST_LABEL || 'bot-jadibot'),
    intervalMinutes,
    defaultIntervalMinutes: DEFAULT_INTERVAL_MINUTES,
    lockTimeoutMs: intValue(process.env.BACKUP_LOCK_TIMEOUT_MINUTES, 25, 3, 180) * 60 * 1000,
    databaseJson: path.resolve(cwd, process.env.BACKUP_DATABASE_JSON || 'database.json'),
    sqlitePath: path.resolve(cwd, process.env.BACKUP_SQLITE_PATH || path.join('data', 'database', 'usanagi.sqlite')),
    sessionsDir: path.resolve(cwd, process.env.BACKUP_SESSIONS_DIR || path.join('sessions', 'jadibot')),
    platformState: path.resolve(cwd, process.env.BACKUP_PLATFORM_STATE || path.join('data', 'jadibot-platform.json')),
    dataDir: path.resolve(cwd, process.env.BACKUP_DATA_DIR || 'data'),
    retention: {
      recent: intValue(process.env.BACKUP_RETENTION_COUNT, 144, 6, 5000),
      daily: intValue(process.env.BACKUP_RETENTION_DAILY, 7, 0, 365),
      weekly: intValue(process.env.BACKUP_RETENTION_WEEKLY, 4, 0, 104),
      monthly: intValue(process.env.BACKUP_RETENTION_MONTHLY, 3, 0, 60),
    },
    storageLimitBytes: numberValue(process.env.BACKUP_STORAGE_LIMIT_BYTES, 2 * 1024 * 1024 * 1024, 64 * 1024 * 1024, 500 * 1024 * 1024 * 1024),
    minFreeBytes: numberValue(process.env.BACKUP_MIN_FREE_BYTES, 256 * 1024 * 1024, 16 * 1024 * 1024, 50 * 1024 * 1024 * 1024),
    encryption: {
      enabled: Boolean(encryptionKey) || isEnabled(process.env.BACKUP_ENCRYPTION, false),
      key: encryptionKey,
      algorithm: 'aes-256-gcm',
    },
    external: {
      backend: ['vercel-blob', 's3', 'none'].includes(externalBackend) ? externalBackend : 'none',
      // all = setiap snapshot, hourly = sekali per jam UTC, promoted = hanya arsip harian
      mode: ['all', 'hourly', 'promoted'].includes(String(process.env.BACKUP_EXTERNAL_MODE || '').toLowerCase())
        ? String(process.env.BACKUP_EXTERNAL_MODE || '').toLowerCase()
        : 'hourly',
      s3: {
        endpoint: String(process.env.S3_ENDPOINT || '').replace(/\/+$/, ''),
        bucket: String(process.env.S3_BUCKET || ''),
        region: String(process.env.S3_REGION || 'auto'),
        accessKeyId: String(process.env.S3_ACCESS_KEY_ID || ''),
        secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY || ''),
        prefix: String(process.env.S3_PREFIX || 'usanagi-backups').replace(/^\/+|\/+$/g, ''),
      },
      blob: {
        token: String(process.env.BLOB_READ_WRITE_TOKEN || ''),
        prefix: String(process.env.BLOB_BACKUP_PREFIX || 'backup-system').replace(/^\/+|\/+$/g, ''),
      },
    },
    telegram: {
      token: String(process.env.TELEGRAM_BOT_TOKEN || '').trim(),
      adminIds: listValue(process.env.TELEGRAM_ADMIN_IDS).map(v => v.replace(/[^\d-]/g, '')).filter(Boolean),
      // Task83: group tujuan arsip auto-backup (id supergroup, mis. -100...).
      chatId: String(process.env.TELEGRAM_BACKUP_CHAT_ID || '').trim(),
      notifyOnSuccess: isEnabled(process.env.TELEGRAM_NOTIFY_SUCCESS, false),
      pollTimeoutSeconds: 30,
    },
    adminSecret: String(process.env.BACKUP_ADMIN_SECRET || '').trim(),
    autoStart: isEnabled(process.env.BACKUP_AUTOSTART, true),
  }
}

/** Backend eksternal aktif atau null bila belum dikonfigurasi. */
export function externalBackendStatus(cfg = backupConfig()) {
  const { backend } = cfg.external
  if (backend === 'vercel-blob') {
    return cfg.external.blob.token ? { backend, ready: true } : { backend, ready: false, reason: 'BLOB_READ_WRITE_TOKEN belum diisi' }
  }
  if (backend === 's3') {
    const s3 = cfg.external.s3
    const missing = ['endpoint', 'bucket', 'accessKeyId', 'secretAccessKey'].filter(key => !s3[key])
    return missing.length
      ? { backend, ready: false, reason: `variabel belum lengkap: ${missing.join(', ')}` }
      : { backend, ready: true }
  }
  return { backend: 'none', ready: false, reason: 'storage eksternal belum diaktifkan' }
}
