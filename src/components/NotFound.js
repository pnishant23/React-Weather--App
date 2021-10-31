import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return(
    <>
    <h4>
      Page not Not Found
      <p>
      <Link to='/'> Go Home</Link>
      </p>
    </h4>
    </>
  )
}