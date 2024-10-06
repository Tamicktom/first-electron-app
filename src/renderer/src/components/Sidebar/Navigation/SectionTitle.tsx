//* Libraries imports
import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle(props: SectionTitleProps): JSX.Element {
  return <div className="mx-3 text-xs font-semibold uppercase text-rotion-300" {...props} />
}
