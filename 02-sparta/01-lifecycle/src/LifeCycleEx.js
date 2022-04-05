import React from 'react';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
// extends: 자식 클래스가 부모 클래스의 속성을 상속받기 위해 사용하는 키워드
class LifecycleEx extends React.Component {
  // 순서 1: 마운트 될때 가장 먼저 실행된다
  // 생성자 함수: 초기값을 설정해주는 곳
  constructor(props) {
    super(props);

    this.state = {
      cat_name: '나비',
    };

    console.log('in constructor!');
  }

  changeCatName = () => {
    // 다음 강의에서 배울, state 업데이트 하는 방법입니다!
    // 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
    this.setState({ cat_name: '바둑이' });

    console.log('고양이 이름을 바꾼다!');
  };

  // 순서 3: 마운트가 끝났을때 즉 첫번째 리랜더링이 끝난 후에 실행된다. render 함수가 실행된 후에 실행되는 메소드이므로 가상돔이 실제돔으로 올라간 후에 componentDidMount 메소드가 실행된다.
  // mount는 화면에 나타나는것을 의미한다
  // componentDidMount 메소드는 화면에 요소들이 다 나타난 후에 실행된다
  // = 컴포넌트가 렌더링이 된 후 딱 한번만 실행된다
  // = 가상돔이 실제돔으로 올라간 후에 실행된다
  // Ajax 요청, 이벤트 리스너, DOM관련 처리
  // => 컴포넌트의 변화가 실제돔에 다 반영이 된후에 메소드가 실행되기 때문에 DOM관련 처리에 적절
  componentDidMount() {
    console.log('in componentDidMount!');
  }

  // 순서: props나 state값이 변경되서 리렌더링이 된 후에 실행된다.
  // 파라미터 두가지 1) prevProps 이전에 사용했던 props값, prevState 이전에 사용했던 state값
  // 이전의 데이터와 현재의 데이터를 비교하고 싶을때 componentDidUpdate 메소드를 사용한다
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log('in componentDidUpdate!');
  }

  // 순서: 언마운트될때 즉 컴포넌트가 화면에서 사라질때 실행되는 메서드
  componentWillUnmount() {
    console.log('in componentWillUnmount!');
  }

  // ** 나 이제 View 바꿀거야 => render() 함수를 실행해줘! **
  // ** 뭘로 바꿀거야? => return() 안에 있는 요소로! **
  // 순서 2: 마운트될때 constructor 다음으로 실행된다. 가상돔에서 진짜돔으로 바뀐부분이 올라갈때 실행된다.
  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    console.log('in render!');
    // return문
    // DOM에 붙일 내용
    // 가상돔에서 진짜돔으로 바뀐부분이 올라갈때 실행된다
    return (
      <div>
        {/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있습니다. */}
        <h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
        <button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
      </div>
    );
  }
}

export default LifecycleEx;
