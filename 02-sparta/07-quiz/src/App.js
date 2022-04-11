import React from 'react';
import Start from './Start';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '메이플',
    };
  }

  render() {
    return <Start name={this.state.name} />;
  }
}

export default App;
