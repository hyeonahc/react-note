import React from 'react';

const RefFunc = () => {
  const bucketlists = ['영화관 가기', '매일 책읽기', '수영 배우기'];

  const input = React.useRef(null);

  console.log(input);

  window.setTimeout(() => {
    console.log(input.current);
  }, 1000);

  return (
    <>
      <h1>내 버킷 리스트</h1>
      <hr />
      <ul>
        {bucketlists.map((bucketlist, index) => (
          <li key={index}>{bucketlist}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          ref={input}
          onChange={() => console.log(input.current.value)}
        />
        <button>버튼</button>
      </div>
    </>
  );
};

export default RefFunc;
