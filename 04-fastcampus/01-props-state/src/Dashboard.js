import React, { useState } from 'react'
import { data } from './constant/data'

const Dashboard = ({category}) => {
	const [cateogryMovie, setCateogryMovie] = useState(
		data.filter(d => d.category === category)
	)

	return (
		<>
			<div>
				{cateogryMovie.map(d => {
					return (
						<>
							<h1>{d.title}</h1>
							<p>{d.content}</p>
							<p>{d.category}</p>
						</>
					)
				})}
			</div>
		</>
	)
}

export default Dashboard