import React, { useRef } from 'react'

const Login2 = () => {
  const user1 = {
    id: 'monalisa',
    pwd: '1234',
  }

  const idEl = useRef()
  const pwdEl = useRef()

  const isUser1Equal = e => {
    if (e.key === 'Enter') {
      user1['id'] === idEl.current.value && user1['pwd'] === pwdEl.current.value
        ? alert('로그인 성공')
        : alert('로그인 실패')

      idEl.current.value = ''
      pwdEl.current.value = ''
    }
  }

  return (
    <>
      <input
        type='text'
        placeholder='아이디를 입력하세요'
        name='id'
        ref={idEl}
      />
      <input
        type='password'
        placeholder='비밀번호를 입력하세요'
        name='pwd'
        ref={pwdEl}
        onKeyDown={isUser1Equal}
      />
      <button onClick={isUser1Equal}>로그인</button>
    </>
  )
}

export default Login2
