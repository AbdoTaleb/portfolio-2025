import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <p>ABDO TALEB</p>
        <p>Frontend Developer / React Specialist / Designer</p>
        <p>Currently open to work in Malmö, Sweden</p>
      </div>
      <div className="hero__right">
        <ul>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>RESUME</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
