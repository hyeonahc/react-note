import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChange}
      />
      <input
        name="nickname"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChange}
      />
      <p>
        <b>이름:</b>
        {name}
      </p>
      <p>
        <b>닉네임:</b>
        {nickname}
      </p>
    </div>
  );
};

export default Info;
