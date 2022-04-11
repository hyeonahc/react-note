// http://localhost:3000/about?detail=true&mode=1
// 쿼리 스트링: ?detail=true&mode=1
// 이 문자열에서 앞에 있는 ? 로 지우고, & 문자열로 분리한뒤 key 와 value 를 파싱하는 작업이 필요
// => useSearchParams라는 Hook을 사용

import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 첫번째 원소: 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체 반환
  // 두번째 원소: 쿼리파라미터를 객체형태로 업데이트할 수 있는 함수 반환
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
