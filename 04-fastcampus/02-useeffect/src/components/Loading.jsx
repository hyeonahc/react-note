import React, { useEffect, useState } from 'react'

const Loading = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [text, setText] = useState([])

	// 백엔드에서 데이터를 불러온다는 가정
	// setTimeout으로 3초의 지연시간을 줌
	useEffect(() => {
		setTimeout(() => {setIsLoaded(true)}, 3000)
	}, [])

	// isLoaded 상태값이 업데이트되면 실행할 로직
	useEffect(() => {
		setText(text.concat(['추가']))
	}, [isLoaded])
	
	
	// 3초 후에 isLoaded 상태값이 true로 업데이트되면서 로딩완료라는 엘리먼트가 표시
	return (
		<>
			<div>{ isLoaded ? <span>로딩완료</span> : <span>로딩중</span>  }</div>
			<div>{ text }</div>
		</>
	)
}

export default Loading