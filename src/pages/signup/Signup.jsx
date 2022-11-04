import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

//styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, signup} = useSignup()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password)

    resetForm()
  };

  return (
    <form onSubmit={handleSubmit} className='submit-form'>
      <h1>signup</h1>
      <label>
        <span>your email: </span>
        <input
          type='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
      </label>
      <label>
        <span>your password:</span>
        <input
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
      </label>
      <button className='submit-btn'>submit</button>
    </form>
  );
}
