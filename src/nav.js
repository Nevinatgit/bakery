import React, { useState } from "react";
import './menu.css'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white ms-5 me-5 mt-3 mb-0">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ position: "relative", left: "10%" }} href="#">
          <img src="/images/klassy-logo.png" alt="Klassy Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link ${activeLink === "menu" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("menu")}
              >
                Menu
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link ${activeLink === "chefs" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("chefs")}
              >
                Chefs
              </a>
            </li>
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Features
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Feature 1</a></li>
                <li><a className="dropdown-item" href="#">Feature 2</a></li>
                <li><a className="dropdown-item" href="#">Feature 3</a></li>
              </ul>
            </li>
            <li className="nav-item me-3">
              <a
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
