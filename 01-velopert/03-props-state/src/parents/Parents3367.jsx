// 3.3.6.7 클래스형 컴포넌트에서 props 적용하기

import React, { Component } from 'react';
import MyComponent from '../components/3.3.6.7/MyComponent';

export class Parents3367 extends Component {
  render() {
    return (
      <MyComponent name={'React'} time={'one year'}>
        This is children
      </MyComponent>
    );
  }
}

export default Parents3367;
