import React, { createRef } from 'react';
import TextPrac from './TextPrac';

class CirclePrac extends React.Component {
  constructor(props) {
    super(props);

    this.circle = React.createRef();
  }

  hoverEvent = () => {
    this.circle.current.style.backgroundColor = 'yellow';
  };

  componentDidMount() {
    console.log(this.circle);
    console.log(this.circle.current);
    this.circle.current.addEventListener('mouseover', this.hoverEvent);
  }

  componentWillUnmount() {
    this.circle.current.removeEventListener('mouseover', this.hover);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <TextPrac />
        <div
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '250px',
            backgroundColor: 'green',
            margin: '0 auto',
          }}
          ref={this.circle}
        ></div>
      </div>
    );
  }
}

export default CirclePrac;
