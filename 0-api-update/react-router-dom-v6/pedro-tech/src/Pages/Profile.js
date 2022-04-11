import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// useNavigage
// : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 상황에 사용하는 Hook

// useParams
// URL 파라미터는 useParams 라는 Hook을 사용하여 객체 형태로 조회
// URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path의 props를 통하여 설정

function Profile() {
  let navigate = useNavigate();
  // <Route path="/profile/:username" element={<Profile />} />
  let { username } = useParams();
  console.log(username);
  return (
    <div>
      THIS IS THE PROFILE PAGE FOR {username}!
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        {' '}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;
