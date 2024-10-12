//* Libraries imports
import { Link } from 'react-router-dom'

export function Blank(): JSX.Element {
  return (
    <div>
      Selecione ou crie um novo documento
      <Link to="/document/1">Documento 1</Link>
    </div>
  )
}
