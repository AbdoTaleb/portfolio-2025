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
        {/* <Navigation /> */}
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
                <a 
                  href="https://munamii-cakery.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-visit-btn"
                >
                  Visit Project
                </a>

            </li>

            <li className='project-item'>
                <h2>E-Plant Shopping</h2>
                <span>A modern plant e-commerce app allowing users to explore, search, and buy plants with ease.</span> <br />
                <span><strong>Technologies:</strong> React, Redux Toolkit, Styled Components</span>
                <a 
                  href="https://e-plant-shopping-ashen.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-visit-btn"
                >
                  Visit Project
                </a>

            </li>
            <li className="project-item">
            <h2>Enhanced Drone Autopilot</h2>
            <span>– School work – Python / Hardware Integration</span>
          </li>
          <li className="project-item">
            <h2>Event App (WIP)</h2>
            <span>– School work – Web + Mobile Application – Full Stack</span>
          </li>
          <li className="project-item">
            <h2>Knowit Karlskrona</h2>
            <span>– Backend Developer – Python (Flask) + React</span>
          </li>

        </ul>
        
      </div>
    </section>
  )
}

export default Projects