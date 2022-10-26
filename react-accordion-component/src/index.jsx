import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const languages = [
  {
    abr: 'HTML',
    name: 'Hypetext Markup Language',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    abr: 'CSS',
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    abr: 'JS',
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conform to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, protoype-based object-orientation, and first-class functions.'
  },
  {
    abr: 'what',
    name: 'Heyo Tim',
    description: "I don't know, I ran out of ideas. . .here's a fourth one!"
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion language={languages} />);
