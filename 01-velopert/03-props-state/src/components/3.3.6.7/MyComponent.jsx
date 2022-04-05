// 3.3.6.7 클래스형 컴포넌트에서 props 적용하기
// 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends Component {
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

MyComponent.defaultProps = {
  name: 'undefined',
};

MyComponent.propTypes = {
  time: PropTypes.number.isRequired,
};

export default MyComponent;
