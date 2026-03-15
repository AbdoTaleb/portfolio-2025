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
      <div className="right-side fade-in">
        <ul className="education-list">
          <li className="education-item">
            <h2>ONLINE COURSES</h2>
            <ul className="courses-list">
              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/F9U82GDZNHS7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advanced Django: Building a Blog ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/1S7S9FFZ0DHW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advanced Django: Introduction to Django REST Framework ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/Z5RN7HOHMYGZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developing Front-End Apps with React ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/MUW4D8ZWT27Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Containers w/ Docker, Kubernetes & OpenShift ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/DUDTARVWBJS9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS ECS & Fargate ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/LGP7FRD6EHAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Elastic Beanstalk:Deploy a Python(Flask) Web Application ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/95XMPG63XV86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Containerized Apps on AWS ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/GWL9QZ67NZCJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automation in AWS Cloud ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/5L6PC3TNGX4Z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to MongoDB ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/VDDV355JS93K"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Version Control ↗
                </a>
              </li>

              <li className="courses-item">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/LVRFFXNLU4W8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Integration & ETL with Talend ↗
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
