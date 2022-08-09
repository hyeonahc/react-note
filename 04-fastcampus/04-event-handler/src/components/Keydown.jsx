import React from 'react'
import { useState } from 'react'

const Keydown = () => {
	const [keyName, setKeyName] = useState('')

	const keydownHandler = (e) => {
		setKeyName(e.key)
	}

	return (
		<>
			<input type="text" onKeyDown={keydownHandler} />
			<div>event trrigered: {keyName}</div>
		</>
	)
}

export default Keydown