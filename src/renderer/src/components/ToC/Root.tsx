//* Libraries imports
import type { ReactNode } from 'react'

interface ToCRootProps {
  children: ReactNode
}

export function ToCRoot(props: ToCRootProps): JSX.Element {
  return <div className="flex flex-col gap-2 mt-2 text-sm text-rotion-100" {...props} />
}
