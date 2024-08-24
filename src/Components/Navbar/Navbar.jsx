import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = window.innerHeight * 0.2;

    if (currentScrollY > scrollThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      setIsHidden(true);
      setDropdownOpen(false)
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`${isSticky ? 'sticky' : ''} ${isHidden ? 'hide' : ''} ${menuOpen ? 'menu-active' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu">
        <ImCross className="menu-off-btn" onClick={toggleMenu} />
        <Link to="/home" onClick={toggleMenu}>Home</Link>
        <div className="dropdown">
          <Link to="#" onClick={toggleDropdown}>Projects {">"} </Link>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/properties/residential" onClick={toggleMenu}>Residential</Link>
            <Link to="/properties/commercial" onClick={toggleMenu}>Commercial</Link>
            <Link to="/properties/industrial" onClick={toggleMenu}>Upcoming</Link>
          </div>
        </div>
        <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
        <a href='#contact-section' onClick={toggleMenu}>Contact Us</a>
      </div>

      <FaBars className="menu-on-btn" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
