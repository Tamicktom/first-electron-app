//* Libraries imports
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Search(): JSX.Element {
  return (
    <button
      type="button"
      className="flex items-center gap-2 mx-5 text-sm text-rotion-100 hover:text-rotion-50"
    >
      <MagnifyingGlass className="w-5 h-5" />
      Busca rápida
    </button>
  )
}
