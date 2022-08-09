import React, { Component } from 'react'
import Count from './components/Count'
import CountOld from './components/CountOld'

class App extends Component {
	render() {
		return (
			<>
				<Count />
				<CountOld />
			</>
		)
	}
}

export default App