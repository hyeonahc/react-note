import React, { useEffect, useState } from 'react'
import moment from 'moment';

const Clock = () => {
	const [Clock, setClock] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

	useEffect(() => {
		setTimeout(() => {setClock(moment().format('YYYY-MM-DD HH:mm:ss'))}, 1000)
	}, [Clock])

	return (
		<div>{ Clock }</div>
	)
}

export default Clock