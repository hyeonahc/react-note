import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  console.log(userId);

  return <div>Details about User {userId}</div>;
};

export default UserDetail;
