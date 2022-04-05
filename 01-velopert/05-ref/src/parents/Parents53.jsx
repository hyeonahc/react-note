import React, { Component } from 'react';
import ScrollBox from '../components/5.3/ScrollBox';

class Parents52 extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        {/* this.scrollBox는 ScrollBox 컴포넌트를 가리킨다 */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/* this.scrollBox는 ScrollBox 컴포넌트를 가리키고 해당 컴포넌트 안에 있는 메서드 scrollToBottom에 접근한다 */}
        {/* 즉 버튼이 클릭되었을 때 ScrollBox 컴포넌트 안에 있는 scrollToBottom 메서드가 실행된다 */}
        {/* <button onClick={this.scrollBox.scrollToBottom}> */}
        {/* 일반적으로 이벤트 프로퍼티 안에 들어가는 함수는 일반함수다 */}
        {/* 그 의미는 클릭 이벤트가 발생했을때 함수가 바로 실행된다는 의미다 */}
        {/* 하지만 this.scrollBox = ref 과정에서 참조가 바로 이루어지지 않아 this.scrollBox가 undefined를 가리킨다 */}
        {/* 이를 방지하기 위해 화살표함수를 써 this.ref를 전달받았을 때만 해당 함수를 실행한다 */}
      </div>
    );
  }
}

export default Parents52;
