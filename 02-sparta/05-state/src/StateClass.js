import React from 'react';

class StateClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  componentDidMount() {}

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert('네모가 없어요!');
    }
  };

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);

    console.log(this.state.count);

    return (
      <>
        {nemo_count.map((nemo, index) => (
          <div
            key={index}
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#ddd',
              margin: '10px',
            }}
          >
            nemo
          </div>
        ))}
        <button onClick={this.addNemo}>추가</button>
        {/* <button onClick={() => { this.addNemo }}>추가</button> */}
        <button onClick={this.removeNemo}>빼기</button>
      </>
    );
  }
}

export default StateClass;
