// 13.2.2 프로젝트에 라우터 적용

// 프로젝트에 리액트 라우터를 적용할때
// : src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트로 App 컴포넌트를 감싸준다

// BrowserRouter 컴포넌트의 역할
// 1) 웹 애플리케이션에 HTML5의 History API를 사용하여 => 페이지를 새로고침하지 않고도 주소를 변경
// 2) 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해줌

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
