import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });
// Context 만들기
// Context를 만들 땐 React.createContext()라는 함수를 사용
// createContext(par)함수의 파라미터로 Context의 기본 상태(value)를 지정
// Context 안에는 Consumer, Provider라는 컴포넌트가 있다
// 1) Consumer
// value는 createContext() 함수로 지정한 Context의 기본 상태
// value = { color: 'black' }
// value값을 쓰고 싶을때는 Consumer 컴포넌트 사용
// <ColorContext.Consumer>코드안에서 value 사용</ColorContext.Consumer>
// 2) Provider
// value값을 변경하고 싶을때는 Provider 컴포넌트 사용
// <ColorContext.Provider value={변경된 value값}>...</ColorContext.Provider>

export default ColorContext;
