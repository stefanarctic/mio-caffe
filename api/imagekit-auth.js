import {
  getImageKitAuthParams,
  isAdminEmail,
  json,
  readBearerToken,
  verifyFirebaseIdToken,
} from './lib/imagekit.js'

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }
  if (req.method !== 'GET' && req.method !== 'POST') {
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

  json(res, 200, getImageKitAuthParams(privateKey))
}
