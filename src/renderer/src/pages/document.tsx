//* Libraries imports
import { useParams } from 'react-router-dom'

type RouteParams = {
  id: string
}

export function Document(): JSX.Element {
  const params = useParams<RouteParams>()

  return <div>Documento {params.id}</div>
}
