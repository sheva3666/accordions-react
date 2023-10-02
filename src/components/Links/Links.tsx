import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'
import "./styles.css"

const Links = () => {
  return (
    <div className='container'>{routes.map(route => (
        <Link to={route.path}>{route.name}</Link>
    ))}</div>
  )
}

export default Links