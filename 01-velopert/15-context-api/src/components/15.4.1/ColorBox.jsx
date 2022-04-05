import React, { useContext } from 'react';
import ColorContext from '../../contexts/color1541';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  // state = ColorContext.state
  // state = { color: 'black', subcolor: 'orange' }

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
