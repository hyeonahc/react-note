import React, { useState } from 'react';

function StateFuncTry() {
  const [nemoCount, setNemoCount] = useState(3);

  const nemoCountArray = Array.from({ length: nemoCount }, (element, index) => {
    return index;
  });

  const addNemo = () => {
    setNemoCount(nemoCount + 1);
  };

  const removeNemo = () => {
    if (nemoCount > 0) {
      setNemoCount(nemoCount - 1);
    } else {
      window.alert('뺄 네모가 없습니다!');
    }
  };

  console.log(nemoCount);

  return (
    <>
      {nemoCountArray.map((n, i) => (
        <div
          key={i}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#ddd',
            margin: '10px 0',
          }}
        >
          nemo
        </div>
      ))}
      <button onClick={addNemo}>추가</button>
      <button onClick={removeNemo}>빼기</button>
    </>
  );
}

export default StateFuncTry;
