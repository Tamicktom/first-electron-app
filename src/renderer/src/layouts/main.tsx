//* Libraries imports
import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Outlet } from 'react-router-dom'

//* Components imports
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function MainLayout(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      className="flex flex-row h-svh w-svw bg-rotion-900 text-rotion-100"
      onOpenChange={setIsSidebarOpen}
      open={isSidebarOpen}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 max-h-svh">
        <Header isSidebarOpen={isSidebarOpen} />
        <main className="flex items-center justify-center flex-1 text-rotion-400">
          <Outlet />
        </main>
      </div>
    </Collapsible.Root>
  )
}
