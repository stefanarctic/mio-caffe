import { createHmac, randomUUID } from 'node:crypto'

export function getImageKitAuthParams(privateKey) {
  const token = randomUUID()
  const expire = Math.floor(Date.now() / 1000) + 60 * 25
  const signature = createHmac('sha1', privateKey)
    .update(token + String(expire))
    .digest('hex')
  return { token, expire, signature }
}

export function isAdminEmail(email, env = process.env) {
  const extra = String(env.VITE_ADMIN_EMAILS || env.ADMIN_EMAILS || '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)
  const allowed = new Set(['neuroweb01@gmail.com', ...extra])
  return Boolean(email) && allowed.has(String(email).trim().toLowerCase())
}
export async function verifyFirebaseIdToken(idToken, apiKey) {
  if (!idToken || !apiKey) return null
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.users?.[0] || null
}

export function readBearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization || ''
  const value = Array.isArray(header) ? header[0] : header
  return value.startsWith('Bearer ') ? value.slice(7).trim() : ''
}

export async function deleteImageKitFile(fileId, privateKey) {
  const auth = Buffer.from(`${privateKey}:`).toString('base64')
  const res = await fetch(`https://api.imagekit.io/v1/files/${encodeURIComponent(fileId)}`, {
    method: 'DELETE',
    headers: { Authorization: `Basic ${auth}` },
  })
  if (!res.ok && res.status !== 404) {
    const text = await res.text()
    throw new Error(text || 'Nu am putut șterge imaginea din ImageKit.')
  }
}

export function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

export async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  if (!chunks.length) return {}
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}
