import React from 'react'
import './Navigation.scss'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation();
  const isHero = useLocation().pathname === '/';
  return (
    <div className="nav-wrapper">
      <div className="nav-home">
        <Link to="/" className="vertical-text">HOME</Link>
        <div className="nav-line" />
      </div>

      <p className="year">© / 2024</p>
    </div>
  );
};

export default Navigation