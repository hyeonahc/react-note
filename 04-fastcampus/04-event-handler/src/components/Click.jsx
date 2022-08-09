import React from 'react'
import { useState } from 'react'

const Click = () => {
	const [text, setText] = useState('Hello')

	const changeText = () => {
		setText('Bye')
	}

	return (
		<>
			<div>{ text }</div>
			<button onClick={changeText}>클릭</button>
		</>
	)
}

export default Click