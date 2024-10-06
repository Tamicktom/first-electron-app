//* Libraries imports
import type { ReactNode } from 'react'

interface SectionContentProps {
  children: ReactNode
}

export function SectionContent(props: SectionContentProps): JSX.Element {
  return <div className="flex flex-col gap-px" {...props} />
}
