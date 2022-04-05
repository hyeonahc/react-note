import React from 'react';
import { ColorConsumer } from '../../contexts/color153';
// ColorConsumer = {
//   state: { color: 'black', subcolor: 'orange' },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// }

// value = {
//   state: { color: 'black', subcolor: 'orange' },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// }

const ColorBox = () => {
  return (
    <div>
      <ColorConsumer>
        {({ state }) => (
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
        )}
      </ColorConsumer>
    </div>
  );
};

export default ColorBox;
