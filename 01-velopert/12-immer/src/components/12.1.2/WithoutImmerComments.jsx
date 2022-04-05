// 12.1.2 immer을 사용하지 않고 불변성 유지

import { useRef, useCallback, useState } from 'react';

const WithoutImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input에 onChange 이벤트가 발생되면 실행되는 함수
  const onChange = useCallback(
    e => {
      // console.log('e', e); // onChange 이벤트 객체 리턴
      // console.log('e.target', e.target); // onChange 이벤트가 일어나는 해당 태그 리턴
      // console.log(e.target.name);
      const { name, value } = e.target;
      // 비구조화 할당문법을 사용해 앞으로 name이라는 변수로 e.target.name 값에 접근할 수 있다
      // 비구조화 할당문법을 사용하기 전에는 e.target.name 값은 항상 e.target.name으로만 접근할 수 있었다
      // const name = e.target.name
      // const value = e.target.value
      // console.log(name, value);
      setForm({
        ...form,
        [name]: [value], // ???
        /*
        초깃값
        form = {
          name: '',
          username: ''
        }

        name이나 username의 값이 업데이트 되면 대체된다
        form = {
          name: 'Hyeonah',
          username: ''
        }
        */
      });

      // console.log(form);
    },
    [form]
  );

  // form에 onSubmit이라는 이벤트가 발생하면 실행되는 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData({
        ...data,
        array: data.array.concat(info),
      });
      /* 
        1) data의 초깃값
        data = {
          array: [],
          uselessValue: null,
        }

        2) form이 submit된 후에 setData함수로 data state를 업데이트
        setData({
          ...data,
          array: data.array.concat(info),
        });

        3) ...data
        data = {
          array: [], // ** 추가되는 값에 의해 override 될 예정 **
          uselessValue: null,
          array: data.array.concat(info) // ** 추가되는 값 **
        }

        4) array: data.array.concat(info)
        data.array
        data = {
          array: [], // ** 여기에 concat(info)를 할 예정 **
          uselessValue: null,
        }

        info
        [{
          id: nextId.current,
          name: form.name,
          username: form.username,
        }]

        5) 결과
        data = {
          array: [
            {
              id: nextId.current,
              name: form.name,
              username: form.username,
            }
          ],
          uselessValue: null,
        }
      */

      // form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;

      console.log(data);
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        // data = {
        //   array: [
        //     {
        //       id: nextId.current,
        //       name: form.name,
        //       username: form.username,
        //     }
        //   ],
        //   uselessValue: null,
        // }
        // filter에서 true면 남고 false면 뺀다
        array: data.array.filter(info => info.id !== id), // info.id !== id을 만족한 것만 리턴
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {/* 
            data의 초깃값
            data = {
              {
                array: [],
                uselessValue: null,
              }
            }

            onSubmit 이벤트가 발생한 뒤 data 값
            li 태그가 생겼다는것은 onSubmit 이벤트가 적어도 한번은 실행되었다는 의미
            data = {
              array: [
                {
                  id: nextId.current,
                  name: form.name,
                  username: form.username,
                }
              ],
              uselessValue: null,
            }
          */}
          {data.array.map(info => (
            /*
              data.array
              array: [
                // info[0]
                {
                  id: nextId.current,
                  name: form.name, //info.name
                  username: form.username, // info.username
                }
              ],
            */
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WithoutImmer;
