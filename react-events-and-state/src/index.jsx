import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = ({ isClicked: false });
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <button onClick={this.handleClick}>Thank you!</button>
      );
    } else {
      return (
      <button onClick={this.handleClick}>Click Me!</button>
      );
    }
  }

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
