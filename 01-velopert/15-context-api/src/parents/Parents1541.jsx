// 15.4.1 Consumer 대신 useContext Hook 사용하기

import ColorBox from '../components/15.4.1/ColorBox';
import SelectColors from '../components/15.4.1/SelectColors';
import { ColorProvider } from '../contexts/color1541';

const Parents1541 = () => {
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

export default Parents1541;
