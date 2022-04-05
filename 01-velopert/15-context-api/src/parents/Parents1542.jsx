// 15.4.2 Consumer 대신 static context Type 사용하기
// 클래스형 컴포넌트

import ColorBox from '../components/15.4.2/ColorBox';
import SelectColors from '../components/15.4.2/SelectColors';
import { ColorProvider } from '../contexts/color1542';

const Parents1542 = () => {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </div>
  );
};

export default Parents1542;
