//* libraries imports
import Store from 'electron-store'

interface StoreData {
  documents: Record<string, any>
}

export const store = new Store<StoreData>({
  defaults: {
    documents: {}
  }
})
