// 13.3 Route 하나에 여러 개의 path 설정하기

// 여러개의 path에 같은 컴포넌트를 보여주고 싶을때
// 1) path가 다른 Route 컴포넌트 여러번 사용하기
// 2) path props를 배열로 설정해주기 (V6 부터 지원 안됨)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../components/13.3/About';
import Home from '../../components/13.3/Home';

const Parents133 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* 방법 1 */}
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<About />} />

      {/* 방법 2: V6부터 지원 안됨 */}
      {/* <Route path={['/about', '/info']} element={<About />} /> */}
    </Routes>
  );
};

export default Parents133;
