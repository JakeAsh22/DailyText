import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/catCall">New Cat</Link>
      <hr/>
    </div>
  )
}

export default Header