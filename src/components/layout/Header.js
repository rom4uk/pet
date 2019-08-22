import React from 'react';
import style from './Header.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Header() {
  return (
    <header style={style.header}>
    <Navbar  />
      <h1>TodoList</h1>
      <Link to='/' className='danger'>Todos</Link>
    </header>
  )
}

export default Header
