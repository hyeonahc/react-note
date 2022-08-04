import React, { useState } from 'react'

const Count = () => {
	// 변하는 값을 렌더링해서 보여주고 싶을때는 useState를 사용한다
	const [number, setNumber] = useState(0)

	const countDown = () => {
		setNumber(number - 1)
	}

	return (
		<>
			<div>{ number }</div>
			<button onClick={countDown}>-1</button>
		</>
	)
}

export default Count