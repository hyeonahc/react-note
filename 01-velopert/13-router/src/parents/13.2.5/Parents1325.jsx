// 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기

// 일반 웹 애플리케이션에서 페이지 전환할때: a 태그 사용
// 리액트 웹 애플리케이션에서 페이지 전환할때: Link 컴포넌트 사용

// Link 컴포넌트
// : 클릭하면 다른 주소로 이동시켜 주는 컴포넌트
// Link 컴포넌트는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에애플리케이션이 가지고 있던 상태들을 모두 날리게 됨
// 즉 렌더링된 컴포넌트들이 모두 사라지고 다시 처음부터 렌더링하게 됨
// Link 컴포넌트는 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경
// Link 컴포넌트 자체는 a 태그로 이루어져 있지만 페이지 전환을 방지하는 기능이 내장되어 있다

// Link 컴포넌트 Syntax
// <Link to="주소">내용</Link>

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../../components/13.2.5/About';
import Home from '../../components/13.2.5/Home';

const Parents1325 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Parents1325;
