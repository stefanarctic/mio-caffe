import { auth } from '../firebase'
import { resizeImage, slugifyFile } from './image'

export const isImageKitConfigured = Boolean(
  import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY && import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
)

async function authHeader() {
  const user = auth?.currentUser
  if (!user) throw new Error('Trebuie să fii autentificat.')
  const token = await user.getIdToken()
  return { Authorization: `Bearer ${token}` }
}

async function getUploadAuth() {
  const res = await fetch('/api/imagekit-auth', { headers: await authHeader() })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Nu am putut obține autentificarea ImageKit.')
  return data
}

export function isRemoteImage(url) {
  return typeof url === 'string' && /^https?:\/\//.test(url)
}

export async function uploadToImageKit(file, { folder, fileName }) {
  if (!isImageKitConfigured) throw new Error('ImageKit nu este configurat.')
  const prepared = file instanceof File && file.type === 'image/jpeg' ? file : await resizeImage(file)
  const authParams = await getUploadAuth()
  const form = new FormData()
  form.append('file', prepared)
  form.append('fileName', `${slugifyFile(fileName || prepared.name) || 'imagine'}.jpg`)
  form.append('publicKey', import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY)
  form.append('signature', authParams.signature)
  form.append('expire', String(authParams.expire))
  form.append('token', authParams.token)
  form.append('folder', `/mio-caffe/${folder}`.replace(/\/+/g, '/'))
  form.append('useUniqueFileName', 'true')

  const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    body: form,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || data.error || 'Upload-ul către ImageKit a eșuat.')
  return {
    url: data.url,
    fileId: data.fileId || '',
    path: data.filePath || '',
  }
}

export async function deleteFromImageKit(fileId) {
  if (!fileId) return
  const res = await fetch('/api/imagekit-delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(await authHeader()),
    },
    body: JSON.stringify({ fileId }),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.error || 'Ștergerea din ImageKit a eșuat.')
  }
}

export async function ensureImageKitAsset(value, folder, fileName) {
  if (!value?.url) return value
  if (value.fileId || /^https:\/\/ik\.imagekit\.io\//.test(value.url)) return value
  const blob = await fetch(value.url).then((res) => {
    if (!res.ok) throw new Error('Nu am putut citi imaginea locală.')
    return res.blob()
  })
  const file = new File([blob], `${slugifyFile(fileName) || 'imagine'}.jpg`, {
    type: blob.type || 'image/jpeg',
  })
  return uploadToImageKit(file, { folder, fileName })
}
