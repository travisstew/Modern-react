import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>Sorry </h2>
      <Link to="/">back to home page</Link>
    </div>
  )
}

export default NotFound