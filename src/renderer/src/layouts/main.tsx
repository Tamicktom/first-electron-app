//* Libraries imports
import { Outlet } from 'react-router-dom'

//* Components imports
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function MainLayout(): JSX.Element {
  return (
    <div className="flex flex-row h-svh w-svw bg-rotion-900 text-rotion-100">
      <Sidebar />
      <div className="flex flex-col flex-1 max-h-svh">
        <Header />
        <main className="flex items-center justify-center flex-1 text-rotion-400">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
