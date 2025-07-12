// src/Pages/Work.jsx
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
      <Navigation />
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
        <ul className="project-list">
          <li className="project-item">
            <h2>BigID – Telenor</h2>
            <span>– Consultant, Tech Lead / Developer</span>
          </li>
          <li className="project-item">
            <h2>Vivaldi – Telenor</h2>
            <span>– Internal Admin System – Django / CSV Export</span>
          </li>
          <li className="project-item">
            <h2>Enhanced Drone Autopilot</h2>
            <span>– School Project – Python / Hardware Integration</span>
          </li>
          <li className="project-item">
            <h2>Event App (WIP)</h2>
            <span>– Web + Mobile Application – Full Stack</span>
          </li>
          <li className="project-item">
            <h2>Knowit Karlskrona</h2>
            <span>– Backend Developer – Python (Flask) + React</span>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Work;
