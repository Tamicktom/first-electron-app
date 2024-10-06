//* Libraries imports
import clsx from 'clsx'
import { Code, CaretDoubleRight, TrashSimple } from '@phosphor-icons/react'

//* Components imports
import * as Breadcrumbs from './Breadcrumbs'

export function Header(): JSX.Element {
  const isMacOS = process.platform === 'darwin'
  const isSidebarOpen = true

  return (
    <div
      id="header"
      className={clsx(
        'border-b border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen
        }
      )}
    >
      <button
        type="button"
        className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen
        })}
      >
        <CaretDoubleRight className="w-4 h-4" />
      </button>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="w-4 h-4 text-pink-500" />
            Estrutura técnica
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.HiddenItems />
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
        </Breadcrumbs.Root>

        <div className="inline-flex region-no-drag">
          <button
            type="button"
            className="inline-flex items-center gap-1 text-sm text-rotion-100 hover:text-rotion-50"
          >
            <TrashSimple className="w-4 h-4" />
            Apagar
          </button>
        </div>
      </>
    </div>
  )
}
