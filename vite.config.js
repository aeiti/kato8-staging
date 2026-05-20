import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kato8-staging/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
