import './Navbar.css'
import {Link} from 'react-router-dom'

import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'><Link to='/'>Finance</Link></li>
        <li><Link to='/signup'>signup</Link></li>
        <li><Link to='/login'>login</Link></li>
      </ul>
    </nav>
  )
}
