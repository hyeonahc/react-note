// 4.2.5 onKeyPress 이벤트 핸들링

import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자 이름을 입력하세요"
          value={this.state.username}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          value={this.state.message}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <button onClick={this.onClick}>클릭하세요</button>
      </div>
    );
  }
}

export default EventPractice;
