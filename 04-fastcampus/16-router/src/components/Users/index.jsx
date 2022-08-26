import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Users = () => {
  const location = useLocation()
  const { state } = location

  return (
    <>
      <div>Users</div>
      <p>{state && state.data}</p>
      <Outlet />
    </>
  )
}

export default Users
