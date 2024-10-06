//* Libraries imports
import type { ReactNode } from 'react'

interface ToCSectionProps {
  children: ReactNode
}

export function ToCSection(props: ToCSectionProps): JSX.Element {
  return <div className="flex flex-col gap-2 px-2" {...props} />
}
