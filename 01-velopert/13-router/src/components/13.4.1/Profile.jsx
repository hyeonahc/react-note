// 13.4 URL 파라미터와 쿼리
// 페이지 주소를 정의할 때 가끔은 유동적인 값을 전달해야할 때도 있다
// 1. URL 파라미터
// 주소의 경로에 유동적인 값을 넣는 형태
// - 특정 아이디, 이름을 사용하여 조회할 때 사용
// domain/profile/velopert
// 2. 쿼리
// - 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 & 로 구분을 하는 형태
// - 어떤 키워드를 검색할때
// - 페이지에 필요한 옵션을 전달할 때
// domain/about?page=1&keyword=react

// 13.4.1 URL 파라미터
// : 특정 아이디, 이름을 사용하여 조회할 때 사용
// domain/profile/유동적인username
// => 유동적인 username 값을 넣어 줄 때 해당 값을 props로 받아 와서 조회하는 방법

// match
// 라우트로 사용되는 컴포넌트에서 받아오는 객체
// 현재 컴포넌트가 어떤 경로 규칙에 의해 보여지는지에 대한 정보가 들어 있음

// params
// match 객체 안에 있는 ???

import React from 'react';
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
  // <Route path="/profile/:username" element={<Profile />} />
  const params = useParams();
  console.log(params);
  // {username: 'velopert'}
  console.log(params.username);
  // velopert

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
