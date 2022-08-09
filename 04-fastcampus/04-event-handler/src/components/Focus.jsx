import React from 'react'
import { useState } from 'react'

const Focus = () => {
	const [text, setText] = useState('')

	const focusHandler = () => {
		setText('input에 focus되었습니다!')
	}

	return (
		<>
			<input type="text" onFocus={focusHandler} />
			<div>{ text }</div>
		</>
	)
}

export default Focus