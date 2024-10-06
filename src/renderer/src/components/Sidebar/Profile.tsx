//* Libraries imports
import { CaretDown, User } from '@phosphor-icons/react'

export function Profile(): JSX.Element {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return (
      <button
        type="button"
        className="flex items-center gap-2 mx-5 text-sm font-medium text-rotion-100 group"
      >
        <div className="w-5 h-5 p-1 rounded-sm bg-rotion-500">
          <User className="w-3 h-3 text-rotion-300" />
        </div>
        Fazer login
      </button>
    )
  }

  return (
    <button
      type="button"
      className="flex items-center gap-2 mx-5 text-sm font-medium text-rotion-50 group"
    >
      <img
        className="w-5 h-5 rounded-sm"
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt=""
      />
      Diego Fernandes
      <CaretDown className="w-4 h-4 text-rotion-100 group-hover:text-rotion-50" />
    </button>
  )
}
