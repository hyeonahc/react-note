import React from 'react'
import Blur from './components/Blur'
import Change from './components/Change'
import Click from './components/Click'
import Click2 from './components/Click2'
import Focus from './components/Focus'
import Keydown from './components/Keydown'

const App = () => {
	return (
		<>
			<Click />
			<Click2 />
			<hr />
			<Change />
			<hr />
			<Focus />
			<Blur />
			<hr />
			<Keydown />
		</>
	)
}

export default App