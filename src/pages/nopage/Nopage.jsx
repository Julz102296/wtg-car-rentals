import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
  return (
    <div>
        ERROR 404
        <p>
          <Link to="/">
            back to homepage
          </Link>
        </p>
    </div>
  )
}

export default Nopage
