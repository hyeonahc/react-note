import React from 'react'

const Intro = (props) => {
	const { name, age, email, about } = props
	return (
		<>
			<div>이름: { name }</div>
			<div>나이: { age }</div>
			<div>이메일: {email}</div>
			<div>소개글: {about} </div>
		</>
	)
}

export default Intro