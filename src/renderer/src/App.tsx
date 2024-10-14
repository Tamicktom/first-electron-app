//* libraries imports
import { QueryClientProvider } from '@tanstack/react-query'

//* Components imports
import { Routes } from './routes/routes'

//* Local imports
import { queryClient } from './utils/query-client'

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
