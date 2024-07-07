import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const navbg = document.querySelector(".nav-bg");

    const handleMenuClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
      navbg.classList.toggle("active");
    };

    menuIcon.addEventListener("click", handleMenuClick);

    // Cleanup event listener on component unmount
    return () => {
      menuIcon.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          Punam Yadav
        </a>
        <i className="bx bx-menu" id="menu-icon" aria-label="Menu"></i>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <Link to="/project" className="dropdown-btn">
              Projects
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/project/1">Project 1</Link>
              </li>
              <li>
                <Link to="/project/2">Project 2</Link>
              </li>
            </ul>
          </div>
          <Link to="/about">About Us</Link>
          <Link to="/event">Event</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="donate-btn">
            <a href="#">Donate</a>
          </button>
        </nav>
      </header>
      <div className="nav-bg"></div>
    </div>
  );
}
