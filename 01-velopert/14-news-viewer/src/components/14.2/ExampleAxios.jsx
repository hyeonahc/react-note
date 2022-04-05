import axios from 'axios';
import React, { useState } from 'react';

const ExampleAxios = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=493d2c43063547bb8cd4e80316432f85'
      )
      .then(response => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default ExampleAxios;
