//* libraries imports
import { createElectronRouter } from 'electron-router-dom'

export const electronRouter = createElectronRouter({
  port: 5173,
  types: {
    ids: ['main']
  }
})
