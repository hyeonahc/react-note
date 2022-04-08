import React, { useEffect, useRef } from 'react';

function TextPrac() {
  const text = useRef();

  const hoverEvent = e => {
    // console.log(e.target);
    // console.log(text.current);
    text.current.style.backgroundColor = 'yellow';
  };

  useEffect(() => {
    // console.log(text.current);
    text.current.addEventListener('mouseover', hoverEvent);
    return () => {
      text.current.removeEventListener('mouseover', hoverEvent);
    };
  }, [text]);

  return (
    <>
      <h1 ref={text}>텍스트입니다!</h1>
    </>
  );
}

export default TextPrac;
