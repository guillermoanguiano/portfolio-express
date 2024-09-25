import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-express/',
  plugins: [react(), ViteImageOptimizer({
    png: {
      quality: 80,
    },
    jpg: {
      quality: 80,
    },
    webp: {
      quality: 70,
    
    },
  })],
})
