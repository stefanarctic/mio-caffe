const DEFAULT_ADMINS = ['neuroweb01@gmail.com']

export function adminEmails() {
  const extra = String(import.meta.env.VITE_ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
  return [...new Set([...DEFAULT_ADMINS, ...extra])]
}

export function isAllowedAdmin(email) {
  if (!email) return false
  return adminEmails().includes(String(email).trim().toLowerCase())
}
