import React from 'react'

const DefaultProps2 = ({name}) => {
	return (
		<>
			<p>my name is {name}</p>
		</>
	)
}

DefaultProps2.defaultProps = {
	name: 'Woody'
}

export default DefaultProps2