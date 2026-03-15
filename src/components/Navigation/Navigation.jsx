import React from "react";
import "./Navigation.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  const navClass = pathname === "/work" || pathname === "/projects" || pathname === "/education" || pathname === "/contact" ? "white-nav" : "black-nav";

  return (
    <nav className={`main-nav ${navClass}`}>
      <div className="nav-wrapper">
        <div className="nav-home">
          {pathname !== "/" && (
            <Link
              to="/"
              className="vertical-text"
            >
              HOME
            </Link>
          )}

          {pathname !== "/work" && (
            <Link
              to="/work"
              className="vertical-text"
            >
              WORK
            </Link>
          )}

          {pathname !== "/projects" && (
            <Link
              to="/projects"
              className="vertical-text"
            >
              PROJECTS
            </Link>
          )}

          {pathname !== "/education" && (
            <Link
              to="/education"
              className="vertical-text"
            >
              EDUCATION
            </Link>
          )}

          {pathname !== "/contact" && (
            <Link
              to="/contact"
              className="vertical-text"
            >
              CONTACT
            </Link>
          )}

          {pathname !== "/about" && (
            <Link
              to="/about"
              className="vertical-text"
            >
              ABOUT
            </Link>
          )}

          <div className="nav-line" />
        </div>

        <p className="year">© / 2026</p>
      </div>
    </nav>
  );
};

export default Navigation;
