# React Router V6

## 라우팅이란?

- 사용자가 요청한 URL에 따라 알맞는 페이지를 보여주는 것
- 여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지별로 컴포넌트들을 분리해가면서 프로젝트를 관리하기 위해 필요한 것

## 싱글 페이지 애플리케이션(SPA)이란?

- 한 개의 페이지로 이루어진 애플리케이션
- html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후에 그 이후에는 필요한 데이터만 받아와서 화면에 업데이트 해준다

## 멀티 페이지 애플리케이션(MPA)이란?

- 여러 개의 웹 페이지로 이루어진 애플리케이션
- 싱글 페이지 애플리케이션이란 개념이 생기기 전에 사용되던 전통적인 웹사이트 구조
- 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 CSS, JS, 이미지 파일 등의 리소스를 전달받아 브라우저 화면에 보여준다
- 새로운 페이지를 보여주어야 할 때마다 서버 측에서 모든 준비를 하기 때문에 서버의 자원을 많이 사용하고 트래픽도 더 많이 나온다

## 리액트 라우터 적용 및 기본 사용법

### 1) 라이브러리 설치

```
$ yarn add react-router-dom
```

### 2) 프로젝트에 라우터 적용

프로젝트에 리액트 라우터를 적용할 때는 src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다.

```
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

### 3) Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기

<b>Route</b>: 사용자의 브라우저 주소 경로에 따라 원하는 컴포넌트를 보여주기 위해서 Route 라는 컴포넌트를 통해 라우트 설정을 해주어야 한다.

<b>Routes</b>: Route 컴포넌트는 Routes 컴포넌트 내부에서 사용되어야 한다

<b>Route 컴포넌트 설정하는 방법</b>

```
<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
```

<b>App.js</b>

```
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```

### 4) Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기

a 태그: 일반적인 웹사이트에서 다른페이지로 이동할 때 사용하는 태그로 페이지를 이동할 때 페이지를 새로 불러온다.

Link 컴포넌트: 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.

<b>Link 컴포넌트 설정하는 방법</b>

```
<Link to="경로">링크 이름</Link>
```

<b>src/pages/Home.js</b>

```
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link>
    </div>
  );
};

export default Home;
```

## URL 파라미터와 쿼리스트링

<b>URL 파라미터</b>

- 주소의 경로에 유동적인 값을 넣는 형태
- ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용
- 예시: /profile/velopert

<br />

<b>쿼리스트링</b>

- 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 & 로 구분을 하는 형태
- 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용
- 예시: /articles?\*\*page=1&keyword=react

### URL 파라미터

<b>src/pages/Profile.js</b>

```
import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

<b>src/App.js</b>

```
<Route path="/profiles/:username" element={<Profile />} />
```

- useParams 라는 Hook을 사용하여 객체 형태로 조회
- URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통하여 설정

### 쿼리스트링

<b>src/pages/About.js</b>

```
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
```

- useLocation이라는 Hook은 location 객체를 반환하며 이 객체는 현재 사용자가 보고있는 페이지의 정보를 지니고 있다

<b>location 객체의 값</b>

- pathname: 현재 주소의 경로 (쿼리스트링 제외)
- search: 맨 앞의 ? 문자 포함한 쿼리스트링 값
- hash: 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.)
- state: 페이지로 이동할때 임의로 넣을 수 있는 상태 값
- key: location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨

<b>src/pages/About.js</b>

```
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
```

http://localhost:3000/about?detail=true&mode=1
쿼리 스트링: ?detail=true&mode=1
이 문자열에서 앞에 있는 ? 로 지우고, & 문자열로 분리한뒤 key 와 value 를 파싱하는 작업이 필요
=> useSearchParams라는 Hook을 사용

<b>useSearchParams</b>
첫번째 원소: 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체 반환
두번째 원소: 쿼리파라미터를 객체형태로 업데이트할 수 있는 함수 반환
