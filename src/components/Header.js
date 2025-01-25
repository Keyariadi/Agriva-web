import React, { useState, useEffect } from "react"; // Make sure useEffect is imported


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // Navbar berubah saat scroll lebih dari 50px
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <nav>
        <div className="logo">
        <img src="./images/agriva-removebg-preview.png" alt=""></img>
        </div>
        <ul className={`menu ${menuActive ? "active" : ""}`}>
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Portofolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
