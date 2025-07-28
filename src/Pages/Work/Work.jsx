
import { useEffect, useState } from 'react';
import './Work.scss';
import Navigation from '../../components/Navigation/Navigation';


const Work = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after slight delay
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`work-page ${animate ? 'animate' : ''}`}>
      
      <div className="background-overlay"></div>

      <div className="left-panel fade-in">
        <p className="label">WORK</p>
        <p className="desc">
          Over the past two years, I've taken on roles ranging from backend developer to tech lead, leading projects in both corporate and consulting environments. My experience spans industries and technologies — from building internal systems at Telenor to full-stack event apps and containerized cloud deployments.
        </p>
        <p className="desc">
          My focus lies in solving real problems with elegant code and scalable architecture. I enjoy working closely with product teams, mentoring developers, and delivering solutions that make a difference.
        </p>
      </div>

      <div className="right-panel fade-in">
        <ul className="work-list">
          <li className="work-item">
            <h2>Experis</h2>
            <span>– Full Stack Developer</span>
          </li>
          <li className="work-item">
            <h2>Telenor</h2>
            <span>– Consultant via Experis, Tech Lead / Developer</span>
          </li>
          <li className="work-item">
            <h2>WIP <span className='wip'>Wireless independent Provider</span></h2> 
            <span>– Web + Mobile Application – Full Stack</span>
          </li>
          
        </ul>

      </div>
    </section>
  );
};

export default Work;
