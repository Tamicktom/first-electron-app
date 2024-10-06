//* Libraries imports
import { Plus } from '@phosphor-icons/react'

export function CreatePage(): JSX.Element {
  return (
    <button
      type="button"
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60"
    >
      <Plus className="w-4 h-4" />
      Create new page
    </button>
  )
}
