import React, { useEffect, useState } from 'react'

const Timer = () => {
	const [isClicked, setIsClicked] = useState(false)
	const [seconds, setSeconds] = useState(60)

	useEffect(() => {
		if(isClicked) {
			if(seconds === 0) return
			const countDown = setTimeout(() => {setSeconds(seconds - 1)}, 1000)
			// Timer 컴포넌트가 사라질때 지정하는 함수
			// Timer 컴포넌트가 사라지면 카운트다운도 멈춰야한다
			return () => clearTimeout(countDown)
		}
	}, [seconds, isClicked])
	
	return (
		<>
			<div>{ seconds }</div>
			<button onClick={() => setIsClicked(true)}>60초 타이머 시작</button>
			<button onClick={() => setIsClicked(false)}>60초 타이머 중지</button>
		</>
	)
}

export default Timer