import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    // this.box라는 멤버변수는 밑에 코드에서 div DOM을 참조할 때 생겨난 멤버변수다
    const { scrollHeight, clientHeight } = this.box;
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
          // this.box는 ScrollBox라는 클래스에 생성된 멤버변수다
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
