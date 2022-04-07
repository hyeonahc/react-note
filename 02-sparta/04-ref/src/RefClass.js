import React from 'react';

class RefClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketlists: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };

    this.input = React.createRef();
  }

  // 마운트가 끝난뒤 실행되는 함수로 ref값을 확인하는 용도
  componentDidMount() {
    console.log(this.input);
    console.log(this.input.current);
    console.log(this.input.current.value);
  }

  render() {
    return (
      <>
        <div>
          <h1>내 버킷 리스트</h1>
          <hr />
          <ul>
            {this.state.bucketlists.map((bucketlist, index) => (
              <li key={index}>{bucketlist}</li>
            ))}
          </ul>
        </div>
        <div>
          <input
            type="text"
            ref={this.input}
            onChange={() => console.log(this.input.current.value)}
          />
          <button>버튼</button>
        </div>
      </>
    );
  }
}

export default RefClass;
