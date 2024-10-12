//* Libraries imports
import { Route } from 'react-router-dom'

//* Local imports
import { electronRouter } from '../../../lib/electron-router-dom'

//* Layouts imports
import { MainLayout } from '../layouts/main'

//* Pages imports
import { Blank } from '../pages/blank'
import { Document } from '../pages/document'

export function Routes(): JSX.Element {
  return (
    <electronRouter.Router
      main={
        <>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Blank />} />
            <Route path="document/:id" element={<Document />} />
          </Route>
        </>
      }
    />
  )
}
