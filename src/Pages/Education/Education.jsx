import React from "react";
import "./Education.scss";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";

function Education() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`education-page ${animate ? "animate" : ""}`}>
      {/* <Navigation /> */}

      <div className="background-overlay"></div>

      <div className="left-side fade-in">
        <p className="label">Education</p>

        <p className="desc">My academic background in software engineering and modern development.</p>

        <p className="desc">These programs helped me build strong foundations in backend development, system architecture, and full-stack technologies.</p>
      </div>

      <div className="right-side fade-in">
        <ul className="education-list">
          <li className="education-item">
            <h2>System developer .NET</h2>
            <span>Lexicon Malmö — May 2025 – Feb 2026</span>
          </li>

          <li className="education-item">
            <h2>Full-Stack Development with Java</h2>
            <span>Noroff / Experis Academy — Jan 2023 – Mar 2023</span>
          </li>

          <li className="education-item">
            <h2>B.Sc. in Software Engineering</h2>
            <span>Blekinge Institute of Technology — Jun 2018 – Jun 2022</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
