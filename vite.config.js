import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import imagekitAuth from './api/imagekit-auth.js'
import imagekitDelete from './api/imagekit-delete.js'

function imagekitDevApi(env) {
  const applyEnv = () => {
    process.env.IMAGEKIT_PRIVATE_KEY = env.IMAGEKIT_PRIVATE_KEY || ''
    process.env.VITE_FIREBASE_API_KEY = env.VITE_FIREBASE_API_KEY || ''
    process.env.FIREBASE_API_KEY = env.FIREBASE_API_KEY || env.VITE_FIREBASE_API_KEY || ''
  }

  const mount = (handler) => (req, res, next) => {
    applyEnv()
    Promise.resolve(handler(req, res)).catch(next)
  }

  return {
    name: 'imagekit-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/imagekit-auth', mount(imagekitAuth))
      server.middlewares.use('/api/imagekit-delete', mount(imagekitDelete))
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), imagekitDevApi(env)],
  }
})
