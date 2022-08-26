import React from 'react'
import { userData } from '../../../constant/userData'
import { Link } from 'react-router-dom'

const UserIndex = () => {
  return (
    <>
      <ul>
        {userData.map((data) => (
          <li key={data.id}>
            <Link to={`/users/${data.id}`}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserIndex
