import React from 'react'
import { useState } from 'react'

const Blur = () => {
	const [text, setText] = useState('')

	const blurHandler = () => {
		setText('input에 focus가 해지되었습니다!')
	}

	return (
		<>
			<input type="text" autoFocus onBlur={blurHandler} />
			<div>{ text }</div>
		</>
	)
}

export default Blur