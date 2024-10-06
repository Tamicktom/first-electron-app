//* Libraries imports
import type { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root(props: RootProps): JSX.Element {
  return (
    <div className="flex items-center flex-1 overflow-hidden">
      <div className="inline-flex items-center gap-2 text-sm text-rotion-100 whitespace-nowrap region-no-drag">
        {props.children}
      </div>
    </div>
  )
}
