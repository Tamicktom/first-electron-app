//* Libraries imports
import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { Code, CaretDoubleRight, TrashSimple } from '@phosphor-icons/react'

//* Components imports
import * as Breadcrumbs from './Breadcrumbs'

type HeaderProps = {
  isSidebarOpen: boolean
}

export function Header(props: HeaderProps): JSX.Element {
  const isMacOS = process.platform === 'darwin'

  return (
    <div
      id="header"
      className={clsx(
        'border-b border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !props.isSidebarOpen && isMacOS,
          'w-screen': !props.isSidebarOpen,
          'w-[calc(100vw-240px)]': props.isSidebarOpen
        }
      )}
    >
      <Collapsible.Trigger className="size-5 text-rotion-200 hover:text-rotion-50 data-[state=open]:hidden">
        <CaretDoubleRight className="size-4" />
      </Collapsible.Trigger>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="text-pink-500 size-4" />
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
            <TrashSimple className="size-4" />
            Apagar
          </button>
        </div>
      </>
    </div>
  )
}
