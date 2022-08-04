import React, { useState } from 'react'
import momentTimezone from 'moment-timezone'

const ClockList = () => {
	const [times, setTimes] = useState([
		{id: 1, tz: 'Asia/Seoul'},
		{id: 2, tz: 'Asia/Taipei'},
		{id: 3, tz: 'US/Pacific'}
	]);

	const removeTime = (currentTime) => {
		setTimes(times.filter(t => 
			t.tz !== currentTime
		))
	}

	return (
		<>
			{times.map(t => 
				<>
					<h1>{ t.tz }</h1>
					<p>{ momentTimezone().tz(t.tz).format('YYYY-MM-DD HH:mm:ss') }</p>
					<button onClick={() => removeTime(t.tz)}>삭제하기</button>
				</>
			)}
		</>
	)
}

export default ClockList