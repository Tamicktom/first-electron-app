//* libraries imports
import type { ReactNode } from 'react'

interface ToCLinkProps {
  children: ReactNode
}

export function ToCLink(props: ToCLinkProps): JSX.Element {
  return <a href="#" className="hover:text-rotion-50" {...props} />
}