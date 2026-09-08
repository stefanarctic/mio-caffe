export function slugifyFile(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function resizeImage(file, maxSize = 1800, quality = 0.86) {
  return new Promise((resolve, reject) => {
    if (!file?.type?.startsWith('image/')) {
      reject(new Error('Alege o imagine (JPG, PNG sau WebP).'))
      return
    }

    const image = new Image()
    const objectUrl = URL.createObjectURL(file)
    image.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height))
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(image.width * scale))
      canvas.height = Math.max(1, Math.round(image.height * scale))
      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl)
          if (!blob) {
            reject(new Error('Nu am putut procesa imaginea.'))
            return
          }
          const nextName = `${slugifyFile(file.name) || 'imagine'}.jpg`
          resolve(new File([blob], nextName, { type: 'image/jpeg' }))
        },
        'image/jpeg',
        quality,
      )
    }
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      reject(new Error('Imaginea nu a putut fi citită.'))
    }
    image.src = objectUrl
  })
}
