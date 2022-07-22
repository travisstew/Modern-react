import React from 'react'
import {Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
    <h1>THe blog</h1>
    <div className='links'> 
      <Link to="/">Home</Link>
      <Link to="/create">create</Link>
    </div>
    </div>
  )
}

export default Navbar