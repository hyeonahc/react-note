import React from 'react';
import ColorContext from '../../contexts/color152';

const ColorBox = () => {
  return (
    <div>
      {/* ColorContext 안에 있는 Consumer라는 컴포넌트로 색상 조회 */}
      <ColorContext.Consumer>
        {value => (
          // value = {color: 'black'}
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.color,
            }}
          />
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default ColorBox;
