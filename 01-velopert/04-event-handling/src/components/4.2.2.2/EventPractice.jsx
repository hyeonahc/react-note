// 4.2.2.2 state에 input 값 담기

import React, { Component } from 'react';

class EventPractice2 extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          message={this.state.message}
          onChange={e => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default EventPractice2;
