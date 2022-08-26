import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Link to="posts">Posts</Link>
      <Link to="users">Users</Link>
    </>
  )
}

export default Nav
