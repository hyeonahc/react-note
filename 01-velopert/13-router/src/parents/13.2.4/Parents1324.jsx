// 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결

// 사용자의 현재 경로에 따라 다른 컴포넌트 보여주기
// <Routes>
//   <Route path="주소" element={ <보여 줄 컴포넌트/> } />
// </ Routes>

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../../components/13.2.4/About';
import Home from '../../components/13.2.4/Home';

const Parents1324 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Parents1324;
