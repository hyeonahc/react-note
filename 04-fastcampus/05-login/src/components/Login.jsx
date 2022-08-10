import React, { useState, useEffect } from 'react'

const Login = () => {
  const user1 = {
    id: 'monalisa',
    pwd: '1234',
  }

  const [UserInfo, setUserInfo] = useState({
    id: '',
    pwd: '',
  })

  const validateUserInfo = e => {
    const { name, value } = e.target
    setUserInfo({ ...UserInfo, [name]: value })
  }

  // 컴포넌트가 mount, update 될때 실행된다
  useEffect(() => {
    console.log(UserInfo)
  }, [UserInfo])

  const isUser1Equal = e => {
    if (e.key === 'Enter') {
      user1['id'] === UserInfo['id'] && user1['pwd'] === UserInfo['pwd']
        ? alert('로그인 성공')
        : alert('로그인 실패')

      setUserInfo({
        id: '',
        pwd: '',
      })
    }
  }

  return (
    <>
      <input
        type='text'
        placeholder='아이디를 입력하세요'
        name='id'
        onChange={validateUserInfo}
      />
      <input
        type='password'
        placeholder='비밀번호를 입력하세요'
        name='pwd'
        onChange={validateUserInfo}
        onKeyDown={isUser1Equal}
      />
      <button onClick={isUser1Equal}>로그인</button>
    </>
  )
}

export default Login
