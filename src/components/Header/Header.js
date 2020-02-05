import React from 'react';
import './Header.css';

const Header = ({score}) => {
  return (
    <nav className="navbar">
      <h1>SongBird</h1>
      <h3>Счёт: {score}</h3>
    </nav>
  )
}

export default Header;