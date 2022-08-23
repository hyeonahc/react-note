import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
	const [users, setUsers] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchUser =  () => {
		setTimeout(async () => {
			const response = await axios.get("https://jsonplaceholder.typicode.com/users")
			console.log(response.data)
			setUsers(response.data)
		}, 1000)
	}

	useEffect(() => {
		setIsLoading(true)
		fetchUser()
		setIsLoading(false)
	}, [])

	if(isLoading) return (<p>로딩중...</p>)
	return (
		<ul>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
	)
}

export default Axios