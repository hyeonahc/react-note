// react router v6.2.2
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';

// 구웹사이트: 페이지와 페이지간의 이동을 하려면 그에 맞는 파일과 데이터를 불러와야함
// 리액트로 만든 SPA: 페이지간의 이동이 아닌 각 페이지에 필요한 컴포넌트를 불러와서 보여줌

// React Router DOM
// 주소 경로에 따라 다양한 페이지를 보여 주는 방법
// 라우터 돔을 이용하면 페이지의 로딩없이 페이지에 필요한 컴포넌트를 불러와 렌더링하여 보여줌

// 리액트 라우터 설치하기
// $ yarn add react-router-dom
// 현재 버전: 6.2.2

// 기존 프로젝트에 리액트 라우터 업데이트 해주기
// $ yarn add history@5 react-router-dom@6

// BrowserRouter: 프로젝트에 리액트 라우터를 적용할때 감싸줄 컴포넌트
// <BrowserRouter>
//   <리액트 라우터를 사용하는 코드>
// </BrowserRouter>

// import { BrowserRouter as Router} from 'react-router-dom';
// BrowserRouter 컴포넌트를 앞으로 Router로 사용하겠다고 선언
// <Router>
//   <리액트 라우터를 사용하는 코드>
// </Router>

// Router vs Routes vs Route
// Router: 리액트 라우터 API 기능을 사용하려면 반드시 <Router> 컴포넌트 안에 해당 코드를 넣어야한다
// Routes: 여러개의 <Route> 컴포넌트를 감싸주는 부모태그
// Route: <Route> 컴포넌트의 path 주소와 일치하는 <Link> 컴포넌트에 해당하는 UI를 리턴해준다

// <Router>
//   <Routes>
//     <Route></Route>
//     <Route></Route>
//     <Route></Route>
//   </Routes>
// </Router>

function App() {
  return (
    // 리액트 라우터 기능을 사용할 코드는 <Router> 컴포넌트 안으로 들어간다
    <Router>
      {/* <Routes> 컴포넌트 밖에 있는 코드는 UI가 항상 화면에 표시된다 */}
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      {/* <Routes> 컴포넌트 안에 있는 코드는 링크에 따라 화면에 표시되는 UI가 변한다 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        {/* path="*"는 위에 있는 path 주소를 제외한 모든 주소를 의미한다 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Routes> 컴포넌트 밖에 있는 코드는 UI가 항상 화면에 표시된다 */}
      <div> Foooter </div>
    </Router>
  );
}

export default App;
