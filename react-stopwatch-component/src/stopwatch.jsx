import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { timer: 0, isPlaying: false, intervalId: null };
  }

  startStop() {
    if (this.state.isPlaying) {
      this.setState({ isPlaying: false });
      clearInterval(this.state.intervalId);
    } else {
      this.setState({ isPlaying: true });
      this.setState({
        intervalId: setInterval(() => {
          this.setState({ timer: this.state.timer + 1 });
        }, 1000)
      });
    }
  }

  reset() {
    if (this.state.isPlaying) return;
    this.setState({ timer: 0 });
  }

  render() {
    const icon = this.state.isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    const time = this.state.timer;
    return (
      <div className="container">
        <div className="circle flex center">
          <h1 className="time" onClick={ this.reset }>{ time }</h1>
        </div>
        <i id="icon" className={ icon } onClick={ this.startStop } />
      </div>
    );
  }
}
