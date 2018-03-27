import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = props => {
  return (
    <div>
        <Link to="/" className="back-home">Back Home</Link>
        <div>
            <h2 className="not-found">Page Not Found</h2>
        </div>
    </div>
  )
}

export default NotFound
