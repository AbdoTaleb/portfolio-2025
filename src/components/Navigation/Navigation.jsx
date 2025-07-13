import React from 'react';
import './Navigation.scss';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { pathname } = useLocation();
  const navClass = pathname === '/work' || pathname === '/projects' || pathname === '/contact' ? 'white-nav'
  : 'black-nav';

  return (
    <nav className={`main-nav ${navClass}`}>
      <div className="nav-wrapper">
        <div className="nav-home">
          <Link to="/" className="vertical-text">HOME</Link>
          <div className="nav-line" />
        </div>

        <p className="year">© / 2025</p>
      </div>
    </nav>
  );
};

export default Navigation;
