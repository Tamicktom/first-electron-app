//* libraries imports
import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (event, args) => {
  console.log('fetch-documents', args)

  return 'Hello World!'
})
