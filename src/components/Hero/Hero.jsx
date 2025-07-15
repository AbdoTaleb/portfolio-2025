import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  return (
    <section className="hero">
      <div className="hero__left">
        <p>ABDO TALEB</p>
        <p className="hero__subtitle">
          Software Engineer | Frontend & Backend Developer | 
          Passionate about Web Apps & User-Centered Design.
        </p>
        <p className="hero__subtitle">Currently open to work in Malmö, Sweden</p>
      </div>
      <div className="hero__right">
        <ul>
          <li><Link to="/work">WORK</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
