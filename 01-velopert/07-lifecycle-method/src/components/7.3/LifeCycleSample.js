import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  // 뒤에 this.myRef를 쓸것이라고 명시하기 위해 미리 선언한 myRef 코드
  // 이 코드를 넣음으로서 사용자의 이해도가 높아진다
  myRef = null;

  // 1.1 mount: 컴포넌트가 브라우저에 나타날때
  // 컴포넌트 생성자 메서드
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 1.2 mount: 컴포넌트가 브라우저에 나타날때
  // 2.1 update: 컴포넌트가 업데이트될때
  // props에 있는 값을 state에 넣을 때
  // mount할때 nextProps와 prevState의 값
  // nextProps {color: '#000000'} // color={this.state.color}
  // prevState {number: 0, color: null} // state = { number: 0, color: null, };
  // update할때 nextProps와 prevState의 값 i.e.) 랜덤색상 버튼을 클릭했을때
  // nextProps {color: '#c0a0c7'}
  // prevState {number: 0, color: '#000000'}
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 1.4 mount: 컴포넌트가 브라우저에 나타날때
  // 컴포넌트를 만들고 첫 렌더링을 다 마친후 실행되는 메서드
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 2.1 update: 컴포넌트가 업데이트될때
  // props 또는 state를 변경했을 때 컴포넌트가 리렌더링을 해야할지 말아야 할지 결정하는 메서드
  // 반드시 true 또는 false 값을 반환
  // true 반환 → 다음 라이프사이클 메서드를 실행 (기본값)
  // false 반환 → 업데이트 과정 중지 (컴포넌트가 리렌더링되지 않음)
  // props와 state는 this.props와 this.state로 접근하고 새로 설정될 props와 state값은 nextProps와 nextState로 접근할 수 있다
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // console.log(nextProps);
    // console.log(nextState);
    return nextState.number % 10 !== 4;
    // 숫자의 마지막 자리가 4면 false 반환 → 업데이트 과정 중지 (컴포넌트가 리렌더링되지 않음)
  }

  // 3.1 unmount: 컴포넌트를 브라우저에서 제거할때
  // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 2.4 update: 컴포넌트가 업데이트될때
  // 컴포넌트 변화를 브라우저에 반영하기 바로 직전에 호출하는 메서드
  // getSnapshotBeforeUpdate() should be used with componentDidUpdate()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 2.5 update: 컴포넌트가 업데이트될때
  // 컴포넌트 업데이트 작업이 끝난 후 호출하는 메서드
  // prevProps, prevState를 사용해 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    // console.log(prevProps);
    // console.log(prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 1.3 mount: 컴포넌트가 브라우저에 나타날때
  // 2.3 update: 컴포넌트가 업데이트될때
  // 준비된 UI를 렌더링
  // 업데이트된 UI를 렌더링
  // 렌더링하기 전까지는 Virtual DOM이다
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div style={style} ref={ref => (this.myRef = ref)}>
        <h1>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
