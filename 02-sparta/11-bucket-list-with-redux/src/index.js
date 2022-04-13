// 리덕스와 컴포넌트 연결해주기

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// react-redux 라이브러리에서 Provider 컴포넌트 import 해주기
// Provider 컴포넌트는 리액트 컴포넌트가 Store에 저장되어 있는 State에 접근이 가능하도록 해준다
// 즉 리덕스와 컴포넌트의 연결
import { Provider } from 'react-redux';
// 우리가 만든 Store import 해주기
import store from './redux/configStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 리덕스와 컴포넌트 연결해주기 => 컴포넌트에서 Store에 저장되어 있는 State 구독하기
