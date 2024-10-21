//* libraries imports
import { ipcMain } from 'electron'

//* Local imports
import { IPC } from '@/shared/constants/ipc'

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async () => {
  const documents = [
    { id: 1, title: 'Documento 1' },
    { id: 2, title: 'Documento 2' },
    { id: 3, title: 'Documento 3' },
    { id: 4, title: 'Documento 4' },
    { id: 5, title: 'Documento 5' },
    { id: 6, title: 'Documento 6' },
    { id: 7, title: 'Documento 7' }
  ]

  return documents
})
