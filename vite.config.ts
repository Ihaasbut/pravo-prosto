import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    host: true,  // Или '0.0.0.0' для доступа извне
    allowedHosts: [
      'compatibly-prosperous-emperor.cloudpub.ru',
      '.cloudpub.ru'  // Для всех поддоменов cloudpub.ru
    ]
  }
})
