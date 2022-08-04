import React from 'react'
import PropTypes from 'prop-types'

const AddType = ({nine}) => {
	return (
		<div>Number Value: {nine}</div>
	)
}

// nine이라는 props의 타입은 반드시 숫자여야한다
// 만약 다른 데이터형태로 된 값을 가져올경우 console창에 에러메세지가 발생한다
AddType.propTypes = {
	nine: PropTypes.number
}

export default AddType