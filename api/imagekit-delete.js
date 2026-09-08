import {
  deleteImageKitFile,
  isAdminEmail,
  json,
  readBearerToken,
  readJsonBody,
  verifyFirebaseIdToken,
} from './lib/imagekit.js'

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }
  if (req.method !== 'POST') {
    json(res, 405, { error: 'Method not allowed' })
    return
  }

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY
  const apiKey = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY
  if (!privateKey) {
    json(res, 500, { error: 'ImageKit nu este configurat.' })
    return
  }

  const user = await verifyFirebaseIdToken(readBearerToken(req), apiKey)
  if (!user) {
    json(res, 401, { error: 'Autentificare necesară.' })
    return
  }
  if (!isAdminEmail(user.email)) {
    json(res, 403, { error: 'Contul nu are acces de admin.' })
    return
  }

  const body = typeof req.body === 'object' && req.body ? req.body : await readJsonBody(req)
  const fileId = body?.fileId
  if (!fileId || typeof fileId !== 'string') {
    json(res, 400, { error: 'fileId lipsește.' })
    return
  }

  try {
    await deleteImageKitFile(fileId, privateKey)
    json(res, 200, { ok: true })
  } catch (err) {
    json(res, 500, { error: err?.message || 'Ștergerea a eșuat.' })
  }
}
