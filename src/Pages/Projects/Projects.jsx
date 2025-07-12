import React from 'react'
import './Projects.scss'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation';


function Projects() {
    const [animate, setAnimate] = useState(false); 
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);  
        }, 100); 
        return () => clearTimeout(timer);
    }, []);
  return (
    <section className={`projects-page ${animate ? 'animate' : ''}`}>
        <Navigation />
        <div className="background-overlay"></div>
      <div className='left-side fade-in'>
        <p className="label">Projects</p>
        <p className="desc">Here you can find a selection of my projects, showcasing my skills in frontend development and design.</p>
        <p className="desc">Feel free to explore and reach out if you have any questions or feedback!</p>
      </div>

      <div className='right-side fade-in'>
        <ul className="project-list">
            <li className='project-item'>
                <h2>Munamii Cakery</h2>
                <span>A fully responsive online cake shop built with React, featuring product filtering and cart functionality.</span> <br />
                <span><strong>Technologies:</strong> React, SCSS, JavaScript</span>
            </li>

            <li className='project-item'>
                <h2>E-Plant Shopping</h2>
                <span>A modern plant e-commerce app allowing users to explore, search, and buy plants with ease.</span> <br />
                <span><strong>Technologies:</strong> React, Redux Toolkit, Styled Components</span>
            </li>

        </ul>
        
      </div>
    </section>
  )
}

export default Projects