//* Libraries imports
import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'

//* Components imports
import * as Navigation from './Navigation'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'

export function Sidebar(): JSX.Element {
  const isMacOS = process.platform === 'darwin'

  const documents = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      return await window.api.fetchDocuments()
    }
  })

  return (
    <Collapsible.Content className="bg-rotion-800 flex-shrink-0 border-r border-rotion-600 h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden">
      <Collapsible.Trigger
        className={clsx(
          'absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS
          }
        )}
      >
        <CaretDoubleLeft className="w-4 h-4" />
      </Collapsible.Trigger>

      <div
        className={clsx('region-drag h-14', {
          block: isMacOS,
          hidden: !isMacOS
        })}
      />

      <div
        className={clsx(
          'flex-1 flex flex-col gap-8 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-200',
          {
            'pt-6': !isMacOS
          }
        )}
      >
        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              {documents.data?.map((document) => {
                const key = `document-${document.id}`
                return <Navigation.Link key={key}>{document.title}</Navigation.Link>
              })}
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </Collapsible.Content>
  )
}
