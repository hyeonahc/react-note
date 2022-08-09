import React from 'react'
import { useState } from 'react'

const Click2 = () => {
	const [text, setText] = useState('Hello')

	const changeText = (newText) => {
		setText(newText)
	}

	return (
		<>
			<div>{ text }</div>
			<button onClick={() => changeText('Bye')}>클릭</button>
		</>
	)
}

export default Click2