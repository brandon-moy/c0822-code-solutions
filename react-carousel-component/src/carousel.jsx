import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.carouselCycle = this.carouselCycle.bind(this);
    this.state = { location: 0, intervalId: null };
  }

  handleClick(event) {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
    if (event.target.id === 'right') {
      if (this.state.location === 4) {
        this.setState({ location: 0 });
      } else {
        this.setState({ location: this.state.location + 1 });
      }
    } else {
      if (!this.state.location) {
        this.setState({ location: 4 });
      } else {
        this.setState({ location: this.state.location - 1 });
      }
    }
    this.carouselCycle();
  }

  handleButtonClick(event) {
    if (event.target.tagName !== 'I') return;
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });

    this.setState({ location: Number(event.target.id) });

    event.target.classList.add('fa-solid');

    const $icons = document.querySelectorAll('.circle');
    for (let i = 0; i < $icons.length; i++) {
      if ($icons[i].id !== event.target.id) {
        $icons[i].classList.remove('fa-solid');
      }
    }
    this.carouselCycle();
  }

  carouselCycle() {
    const intervalId = setInterval(() => {
      const place = this.state.location + 1;
      if (place === 5) {
        this.setState({ location: 0 });
      } else {
        this.setState({ location: this.state.location + 1 });
      }
    }, 3000);

    this.setState({ intervalId });
  }

  render() {
    const carouselImage = this.props.images[this.state.location];
    return (
      <div className="container row">
        <div>
          <i id="left" className="fa-solid fa-chevron-left arrow" onClick={this.handleClick}></i>
        </div>
        <div className="images">
          <img className="carousel-image" src={carouselImage}></img>
        </div>
        <div>
          <i id="right" className="fa-solid fa-chevron-right arrow" onClick={this.handleClick}></i>
        </div>
        <div className="icons" onClick={this.handleButtonClick}>
          <i id="0" className="circle fa-regular fa-circle fa-solid"></i>
          <i id="1" className="circle fa-regular fa-circle"></i>
          <i id="2" className="circle fa-regular fa-circle"></i>
          <i id="3" className="circle fa-regular fa-circle"></i>
          <i id="4" className="circle fa-regular fa-circle"></i>
        </div>
      </div>
    );
  }
}
