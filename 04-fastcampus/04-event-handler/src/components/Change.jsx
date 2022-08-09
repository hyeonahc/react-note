import React from 'react'
import { useState } from 'react'

const Change = () => {
	const [text, setText] = useState('')

	const getValue = (e) => {
		setText(e.target.value)
	}

	return (
		<>
			<input type="text" onChange={getValue} />
			<div>{ text }</div>
		</>
	)
}

export default Change