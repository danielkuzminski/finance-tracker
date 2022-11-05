import './Navbar.css'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import React from 'react'

export default function Navbar() {
  const {logout} = useLogout()

  return (
    <nav className='navbar'>
      <ul>
        <li className='title'><Link to='/'>Finance</Link></li>
        <li><Link to='/signup'>signup</Link></li>
        <li><Link to='/login'>login</Link></li>
        <li onClick={logout} >logout</li>
      </ul>
    </nav>
  )
}
