import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.carouselCycle = this.carouselCycle.bind(this);
    this.makeIcons = this.makeIcons.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.state = { location: 0, intervalId: null };
  }

  moveRight() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
    const newLocation = this.state.location === 4
      ? 0
      : this.state.location + 1;
    this.setState({ location: newLocation });
    this.carouselCycle();
  }

  moveLeft() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
    const newLocation = !this.state.location
      ? 4
      : this.state.location - 1;
    this.setState({ location: newLocation });
    this.carouselCycle();
  }

  handleButtonClick(event) {
    if (event.target.tagName !== 'I') return;
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
    this.setState({ location: Number(event.target.id) });
    this.carouselCycle();
  }

  carouselCycle() {
    const intervalId = setInterval(() => {
      const place = this.state.location === 4
        ? 0
        : this.state.location + 1;
      this.setState({ location: place });
    }, 3000);

    this.setState({ intervalId });
  }

  makeIcons(props) {
    const list = this.props.images;
    const iconList = list.map(image => {
      const circleFill = this.state.location === image.place
        ? 'fa-solid'
        : 'fa-regular';
      return (
        <i className={`circle ${circleFill} fa-circle`} key={image.place}></i>
      );
    });
    return (
      <div className="icons" onClick={this.handleButtonClick}>{iconList}</div>
    );
  }

  render() {
    const carouselImage = this.props.images[this.state.location].src;
    const MakeIcons = this.makeIcons;
    return (
      <div className="container row">
        <div>
          <i id="left" className="fa-solid fa-chevron-left arrow" onClick={this.moveLeft}></i>
        </div>
        <div className="images">
          <img className="carousel-image" src={carouselImage}></img>
        </div>
        <div>
          <i id="right" className="fa-solid fa-chevron-right arrow" onClick={this.moveRight}></i>
        </div>
        <MakeIcons />
      </div>
    );
  }
}
