//* Libraries imports
import { Command } from 'cmdk'
import { File, MagnifyingGlass } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export function SearchBar(): JSX.Element {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((state) => !state)
      }
    }

    document.addEventListener('keydown', down)
    return (): void => document.removeEventListener('keydown', down)
  }, [setOpen])

  return (
    <Command.Dialog
      className="fixed top-24 left-1/2 -translate-x-1/2 w-[480px] max-w-full bg-rotion-800 rounded-md shadow-2xl text-rotion-100 border border-rotion-600"
      open={open}
      onOpenChange={setOpen}
      label="Search"
    >
      <div className="flex items-center gap-2 p-4 border-b border-rotion-700">
        <MagnifyingGlass className="w-5 h-5" />
        <Command.Input
          autoFocus
          placeholder="Buscar documentos..."
          className="w-full text-sm bg-transparent focus:outline-none text-rotion-50 placeholder:text-rotion-200"
        />
      </div>
      <Command.List className="py-2 max-h-48 scrollbar-thin scrollbar-thumb-rotion-600 scrollbar-track-rotion-800">
        <Command.Empty className="px-4 py-3 text-sm text-rotion-200">
          Nenhum documento encontrado.
        </Command.Empty>

        <Command.Item className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600">
          <File className="w-4 h-4" />
          Untitled
        </Command.Item>

        <Command.Item className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600">
          <File className="w-4 h-4" />
          Ignite
        </Command.Item>

        <Command.Item className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600">
          <File className="w-4 h-4" />
          Discover
        </Command.Item>

        <Command.Item className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600">
          <File className="w-4 h-4" />
          Rocketseat
        </Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}
