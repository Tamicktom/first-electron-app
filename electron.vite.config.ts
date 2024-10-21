import path from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

const tsConfigPaths = tsconfigPathsPlugin({
  projects: [
    path.resolve('tsconfig.json'),
  ]
})

export default defineConfig({
  main: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()],
    publicDir: path.resolve('resources')
  },
  preload: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform)
    },
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src')
      }
    },
    plugins: [tsConfigPaths, react()]
  }
})
