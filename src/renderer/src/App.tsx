//* Components imports
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App(): JSX.Element {
  return (
    <div className="flex h-svh w-svw bg-rotion-900 text-rotion-100">
      <Sidebar />
      <div className="flex flex-col flex-1 max-h-svh">
        <Header />
        <main className="flex items-center justify-center flex-1 text-rotion-400">
          Selecione ou crie um novo documento
        </main>
      </div>
    </div>
  )
}
