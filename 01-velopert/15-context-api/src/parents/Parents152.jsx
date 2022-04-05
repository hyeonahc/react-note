// 15.2 Context API 사용법 익히기
// 1) contexts > color.js에 새 Context 만들기
// 2) Consumer 사용해 ColorBox 컴포넌트에서 ColorContext 안에 있는 색상 보여주기
// 3) 색상을 props로 받아오는 것이 아니라 ColorContext안에 들어 있는 Consumer라는 컴포넌트를 통해 색상을 조회

import ColorBox from '../components/15.2/ColorBox';
import ColorContext from '../contexts/color152';

const Parents152 = () => {
  return (
    <div>
      <ColorContext.Provider value={{ color: 'orange' }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider>
    </div>
  );
};

export default Parents152;
