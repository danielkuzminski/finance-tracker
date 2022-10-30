import { useState } from 'react';

//styles
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
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
        />
      </label>
      <label>
        <span>repeat your password:</span>
        <input
          type='password'
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          value={password2}
        />
      </label>
      <button className='submit-btn'>submit</button>
    </form>
  );
}
