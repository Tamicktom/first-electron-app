//* Libraries imports
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

export function Section(props: SectionProps): JSX.Element {
  return <div className="flex flex-col gap-2" {...props} />
}
