// 15.3 동적 Context 사용하기

import ColorBox from '../components/15.3/ColorBox';
import SelectColors from '../components/15.3/SelectColors';
import { ColorProvider } from '../contexts/color153';

const Parents153 = () => {
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

export default Parents153;
