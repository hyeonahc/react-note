import React, { useEffect, useState } from 'react'

const LoadingExercise = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [currentLocation, setCurrentLocation] = useState('')
	const [detailedLocation, setDetailedLocation] = useState('')

	useEffect(() => {
		setTimeout(() => {setIsLoaded(true)}, 5000)
	}, [])

	const getSeoul = () => {
		setCurrentLocation('서울')
		setDetailedLocation('한강')
	}

	const getBusan = () => {
		setCurrentLocation('부산')
		setDetailedLocation('해운대')
	}
	
	return (
		<>
			{isLoaded ?
				<>
					<div>로딩완료</div>
					<button onClick={getSeoul}>서울</button>
					<button onClick={getBusan}>부산</button>
					<div>현재 내 지역: {currentLocation}</div>
					<div>세부 지역: {detailedLocation}</div>
				</> :
				null
			}

		</>
	)
}

export default LoadingExercise