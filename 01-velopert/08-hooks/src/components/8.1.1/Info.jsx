import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChangeNickname}
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
