import React from 'react'
import { useParams } from 'react-router-dom'
import { userData } from '../../../constant/userData'

const UserDetail = () => {
  const params = useParams()
  const user = userData.find((data) => data.id === parseInt(params.userId))

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  )
}

export default UserDetail
