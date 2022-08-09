import React, { Component } from 'react'

class Count extends Component {
	state = {
		number: 0
	}

	countUp = () => {
		this.setState({
			number: this.state.number + 1
		})
	}

	render() {
		return (
			<>
				<div>{ this.state.number }</div>
				<button onClick={this.countUp}>+1</button>
			</>
		)
	}
}

export default Count