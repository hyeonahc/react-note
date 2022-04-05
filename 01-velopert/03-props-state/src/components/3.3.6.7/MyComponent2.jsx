// 3.3.6.7 클래스형 컴포넌트에서 props 적용하기
// 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends Component {
  // 클래스 내부에 지정할때는 static이라는 키워드를 사용한다
  // static이라는 키워드를 사용하면 메모리를 공유한다
  static defaultProps = {
    name: 'undefined',
  };

  static propTypes = {
    time: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, time } = this.props;
    // name = this.props.name

    return (
      <>
        <div>Hello I am learning {name}</div>
        <div>Let's see my props children: {children}</div>
        <div>
          I've been learning {name} for {time}
        </div>
      </>
    );
  }
}

export default MyComponent;
