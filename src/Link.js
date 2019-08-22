import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
  render() {
    return links.map((link, i) => (
      <li key={i} >
        <Link to={link.to}>
          {link.name}
        </Link>
      </li>
    ))
  }
}


const links = [
  {
    name: 'Todos',
    to: '/'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'MathTraining',
    to: '/mathTraining'
  },
  {
    name: 'Chuck Jokes',
    to: '/chuckJokes'
  }
]