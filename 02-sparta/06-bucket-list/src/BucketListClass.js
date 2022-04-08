import React from 'react';
import styled from 'styled-components';

class BucketListClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketlists: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };

    this.input = React.createRef();
  }

  InputValueUpdate = e => {
    // console.log(e.target.value);
    // console.log(this.input.current.value);
    this.setState({
      bucketlists: this.state.bucketlists.concat(this.input.current.value),
    });
    this.input.current.value = '';
  };

  componentDidMount() {
    console.log(this.input.current);
  }

  render() {
    return (
      <>
        <Background>
          <Box>
            <h1
              style={{
                color: 'blueviolet',
                fontSize: '2.5em',
                textAlign: 'center',
              }}
            >
              내 버킷리스트
            </h1>
            <hr style={{ margin: '1.5em 0' }} />
            {this.state.bucketlists.map((bucketlist, index) => (
              <List key={index}>{bucketlist}</List>
            ))}
          </Box>
          <InputBox>
            <input type="text" ref={this.input} />
            <button onClick={this.InputValueUpdate}>추가하기</button>
          </InputBox>
        </Background>
      </>
    );
  }
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: white;
  padding: 1.5em;
  border: 1.5px solid darkgrey;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const List = styled.div`
  max-width: 100%;
  height: 30px;
  background-color: aliceblue;
  margin: 1em 0;
  padding: 1em;
`;

const InputBox = styled.div`
  width: 40vw;
  height: 10vh;
  background-color: white;
  padding: 1.5em;
  border: 1.5px solid darkgrey;
  border-radius: 3px;
`;

export default BucketListClass;
