// Practice

import React, { Component } from 'react';

class EventPractice2 extends Component {
  state = {
    username: '',
    message: '',
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  onClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저이름을 입력하세요"
          onChange={this.onChange}
          value={this.state.username}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          onChange={this.onChange}
          value={this.state.message}
        />
        <button onClick={this.onClick}>클릭하세요</button>
      </div>
    );
  }
}

export default EventPractice2;
