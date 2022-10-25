import React from 'react';

export default class Switch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = ({ status: 'off' });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.status === 'off') {
      this.setState({ status: 'on' });
    } else {
      this.setState({ status: 'off' });
    }
  }

  render() {
    const { status } = this.state;
    return (
    <div className='flex'>
      <div className={'background background-' + status} onClick={this.handleClick}>
        <div className={'icon icon-' + status}></div>
      </div>
      <p className='text'>{ status.toUpperCase() }</p>
    </div>
    );
  }
}
