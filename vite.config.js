import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kato8-staging/',
  build: {
    outDir: 'docs',
  },
})
