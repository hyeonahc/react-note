import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import { BucketListFunc } from './BucketListFunc';

function BucketListFuncApp() {
  return (
    <>
      <h1>내 버킷리스트</h1>
      {/* 컴포넌트를 넣어줍니다. */}
      <BucketListFunc />
    </>
  );
}

export default BucketListFuncApp;
