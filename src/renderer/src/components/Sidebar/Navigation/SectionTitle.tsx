import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div
      className="mx-3 text-xs font-semibold uppercase text-rotion-300"
      {...props}
    />
  )
}