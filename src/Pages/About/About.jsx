import React, { useEffect, useState } from "react";
import "./About.scss";
import aboutImg2 from "../../assets/images/profile-preview.png";
import Navigation from "../../components/Navigation/Navigation";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navigation />
      <section className={`about-page ${animate ? "animate" : ""}`}>
        <div className="about-hero">
          <h1 className="about-word">About</h1>
          <img
            src={aboutImg2}
            alt="Abdo Taleb"
            className="about-img"
          />
        </div>

        <p className="about-me">I'm Abdo Taleb. A software engineer, tech lead, and full-stack developer based in Malmö, Sweden.</p>
        <p className="about-intro">
          I'm a passionate software engineer and tech lead with experience in full-stack development, backend systems, and DevOps. My journey spans over years
          of building real-world systems — from developing internal admin tools at Telenor using Django, to managing data compliance with BigID, and creating
          scalable solutions on AWS.
        </p>

        <p className="about-intro">
          I'm driven by curiosity, problem-solving, and a constant desire to improve whether it's optimizing cloud infrastructure, collaborating across frontend
          and backend teams, or mentoring juniors in agile teams. I value clean code, efficient architecture, and impactful products that serve real user needs.
        </p>

        <p className="about-intro">
          My academic foundation in Software Engineering (BTH), along with an intensive full-stack bootcamp at Experis Academy, gave me both the theoretical
          depth and hands-on skills to handle complex projects across the stack.
        </p>

        <p className="about-intro">
          “I don’t just write code—I solve problems.” <br />
          This is one of my favourite quotes (by Alan Kay):
        </p>

        <p className="quotes">"The best way to predict the future is to invent it."</p>

        <h3>Experience</h3>

        <h4>
          Tech Lead & Developer — Telenor (via Experis) <br />
          May 2023 – Nov 2024, Karlskrona
        </h4>

        <p className="bullet-list">
          – Maintained and optimized BigID system for data scanning and compliance.
          <br />
          – Patched and managed AWS instances for high availability.
          <br />– Developed the Vivaldi system from scratch with Django to manage seasonal activities and export features for POs and analysts.
        </p>

        <h4>
          Backend Developer — Knowit Karlskrona (School Project) <br />
          May 2023 – Nov 2024, Karlskrona
        </h4>
        <p className="bullet-list">
          – Built backend architecture using Flask in a 12-person team.
          <br />– Collaborated across roles including frontend, QA, and UX.
        </p>

        <h4>
          Full-stack Developer — WIP (Summer Internship) <br />
          Summer 2019, Karlskrona
        </h4>
        <p className="bullet-list">
          – Developed an event management system across web and mobile platforms.
          <br />– Implemented user-generated event apps with real-time sync.
        </p>

        <h3>Skills</h3>

        <h4>Programming languages & Frameworks:</h4>
        <p className="bullet-list">
          – JavaScript (React), Python (Django, Flask), C++, Java
          <br />– HTML, SCSS, Angular
        </p>

        <h4>DevOps & Tools:</h4>
        <p className="bullet-list">
          – AWS, Docker, Kubernetes, Git, Postgres, MySQL, MongoDB
          <br />– Automation, Version Control, Deployment pipelines
        </p>

        <h4>Soft Skills:</h4>
        <p className="bullet-list">
          – Team Collaboration, Mentoring, Agile Methods
          <br />– Problem Solving, Eye for Detail, Consistent Delivery
        </p>

        <h3>Education</h3>

        <div className="education-list">
          <div className="education-item">
            <span className="education-date">5/2025 - 2/2026</span>

            <div className="education-content">
              <h4>System Developer .NET</h4>
              <p>Full-time vocational training in advanced software development and AI, focusing on C#, .NET, databases, and system architecture.</p>
            </div>

            <span className="education-school">Lexicon</span>
          </div>

          <div className="education-item">
            <span className="education-date">1/2023 - 4/2023</span>

            <div className="education-content">
              <h4>Full-Stack Development with Java</h4>
              <p>12-week intensive full-time program covering Java, backend, frontend, and deployment practices.</p>
            </div>

            <span className="education-school">Experis Academy</span>
          </div>

          <div className="education-item">
            <span className="education-date">6/2018 - 6/2022</span>

            <div className="education-content">
              <h4>B.Sc. in Software Engineering</h4>
              <p>Thesis: DevOps adoption benefits and challenges</p>
            </div>

            <span className="education-school">Blekinge Institute of Technology</span>
          </div>
        </div>

        {/* <h3>Notable Projects</h3>
        <p className="bullet-list">
          – BigID & Vivaldi Systems (Telenor)
          <br />
          – Enhanced Drone Autopilot (BTH project)
          <br />
          – Event App (Wireless Independent Provider WIP internship)
          <br />– Portfolio & E-commerce Side Projects
        </p> */}

        <h3>Languages</h3>
        <p className="bullet-list">
          – Arabic: Native
          <br />
          – English: Fluent
          <br />– Swedish: Fluent
        </p>
      </section>
    </>
  );
}

export default About;
