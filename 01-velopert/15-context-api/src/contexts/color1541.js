import { createContext, useState } from 'react';

// createContext(par)함수의 파라미터로 Context에 함수 전달
const ColorContext = createContext({
  // value의 기본값
  state: { color: 'black', subcolor: 'orange' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// ColorContext.Provider를 최종적으로 렌더링하는 컴포넌트 ColorProvider
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  // value의 상태는 state, 업데이트 함수는 actions로 묶어서 전달
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;
// ColorConsumer = ColorContext.Consumer
// Consumer는 createContext() 함수로 지정한 Context의 기본 상태
// ColorConsumer = {
//   state: { color: 'black', subcolor: 'orange' },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// }

export { ColorProvider, ColorConsumer };

export default ColorContext;
