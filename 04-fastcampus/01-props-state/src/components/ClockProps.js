import React, { useState } from 'react'
import momentTimezone from 'moment-timezone'

const ClockProps = ({ timezone }) => {

	const [time, setTime] = useState(momentTimezone().tz(timezone).format('YYYY-MM-DD HH:mm:ss'))

	const getCurrentTime = () => {
		setTime(momentTimezone().tz(timezone).format('YYYY-MM-DD HH:mm:ss'))
	}

	return (
		<>
			<div>현재시간: {time}</div>
			<button onClick={getCurrentTime}>현재시간보기</button>
		</>
	)
}

export default ClockProps