//* Libraries imports
import { useParams } from 'react-router-dom'

//* Components imports
import { ToC } from '../components/ToC'
import { Editor } from '../components/Editor'

type RouteParams = {
  id: string
}

export function Document(): JSX.Element {
  const params = useParams<RouteParams>()

  return (
    <div className="flex flex-1 gap-8 px-10 py-12 size-full">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-xs font-bold uppercase text-rotion-300">Table of contents</span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticaç~ao</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-col items-center flex-1">
        <Editor />
      </section>
    </div>
  )
}
