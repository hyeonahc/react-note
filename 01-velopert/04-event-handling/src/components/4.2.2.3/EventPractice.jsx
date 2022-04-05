// 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정

import React, { Component } from 'react';

class EventPractice3 extends Component {
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
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={e => {
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: '' });
          }}
        >
          클릭하세요
        </button>
      </>
    );
  }
}

export default EventPractice3;
