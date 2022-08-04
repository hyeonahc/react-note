import React, { useState } from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone'

const Clock = () => {
	const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))
	const [LATime, setLATime] = useState(momentTimezone().tz('US/Pacific').format('YYYY-MM-DD HH:mm:ss'))
	const [koreanTime, setKoreanTime] = useState(momentTimezone().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))

	const getKoreanTime = () => {
		setKoreanTime(momentTimezone().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))
	}

  const changeTZ = (TZ) => {
		setTime(momentTimezone().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
	}

	return (
		<>
			<div>현재시간: { moment().format('YYYY-MM-DD HH:mm:ss') }</div>
			<div>현재시간: { time }</div>
			<div>LA시간: { LATime }</div>
			<br />
			<div>한국시간: { koreanTime }</div>
			<button onClick={getKoreanTime}>현재 한국시간 확인하기</button>
			<br />
			<div>현재시간: { time }</div>
			<button onClick={() => changeTZ('Asia/Seoul')}>현재 한국시간 확인하기</button>
			<button onClick={() => changeTZ('US/Pacific')}>현재 태평양 표준시간 확인하기</button>
		</>
	)
}

export default Clock