import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log(this.state.count);
  }

  render() {
    const nemo_count = Array.from(
      { length: this.state.count },
      (element, index) => {
        return index;
      }
    );

    // console.log(nemo_count);

    console.log(this.state.count);

    return (
      <>
        {nemo_count.map((nemo, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#ddd',
              margin: '10px 0',
            }}
          >
            nemo
          </div>
        ))}
        <button onClick={this.addCount}>추가</button>
        <button onClick={this.removeCount}>빼기</button>
      </>
    );
  }
}

export default App;
