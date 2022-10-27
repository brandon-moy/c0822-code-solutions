import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = ['images/1.png', 'images/4.png', 'images/7.png', 'images/25.png',
  'images/39.png'];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
