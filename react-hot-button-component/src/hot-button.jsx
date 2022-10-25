import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = ({ clicks: 0 });
  }

  handleClick() {
    this.setState(clickCount => ({ clicks: clickCount.clicks + 1 }));
  }

  render() {
    let temp;
    if (this.state.clicks < 3) {
      temp = 'frozen';
    } else if (this.state.clicks < 6) {
      temp = 'cold';
    } else if (this.state.clicks < 9) {
      temp = 'tepid';
    } else if (this.state.clicks < 12) {
      temp = 'warm';
    } else if (this.state.clicks < 15) {
      temp = 'hot';
    } else {
      temp = 'nuclear';
    }
    return (
      <button className= {temp} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
