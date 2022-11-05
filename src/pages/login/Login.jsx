import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'

//styles
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, login} = useLogin()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    login(email, password)

    resetForm()
  }

  return (
    <form className='submit-form' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        <span>your email: </span>
        <input 
          type="email" 
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
        />
      </label>
      <label>
        <span>your password:</span>
        <input 
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
           />
      </label>
      <button className='submit-btn' >submit</button>
    </form>
  )
}
