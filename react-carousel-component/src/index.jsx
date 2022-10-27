import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { place: 0, src: 'images/1.png' },
  { place: 1, src: 'images/4.png' },
  { place: 2, src: 'images/7.png' },
  { place: 3, src: 'images/25.png' },
  { place: 4, src: 'images/39.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
