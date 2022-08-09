import React, { Component } from 'react'

class Count extends Component {
	constructor(props) {
		super(props)
		this.state = {
			number: 0
		}
		this.countUp = this.countUp.bind(this)
	}

	countUp() {
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