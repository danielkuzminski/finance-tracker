import { useNavigate } from 'react-router-dom'

// styles
import './NotFound.css'


export default function NotFound() {

  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  },5000)

  return (
    <div className='not-found'>
      <h1>¯\_(ツ)_/¯</h1>
      <h1>404 Page not found</h1>
      <p>The page you are looking for was not found...</p>
      <p>You going to be riderected to home page</p>
    </div>
  )
}
