import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FaAngleDown, FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const loaction = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

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
      setDropdownOpen2(false)
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
    setDropdownOpen(false)
    setDropdownOpen2(false)
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownOpen2(false)
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2)
    setDropdownOpen(false);
  };

  return (
    <nav className={`${isSticky ? 'sticky' : ''} ${isHidden ? 'hide' : ''} ${menuOpen ? 'menu-active' : ''} ${loaction.pathname==="/v2-admin"?'dp-none':''}`}>
      <div className="logo">
        <Link to={'/'}><img src={logo} alt="Logo" /></Link>
      </div>

      <div className="menu">
        <ImCross className="menu-off-btn" onClick={toggleMenu} />
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <div className="dropdown">
          <Link to="#" onClick={toggleDropdown}>Projects <FaAngleDown/> </Link>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <Link to={`/category/${"residential"}`} onClick={toggleMenu}>Residential</Link>
            <Link to={`/category/${"commercial"}`} onClick={toggleMenu}>Commercial</Link>
            <Link to={`/category/${"ongoing"}`} onClick={toggleMenu}>Ongoing</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="#" onClick={toggleDropdown2}>About Us <FaAngleDown/> </Link>
          <div className={`dropdown-menu ${dropdownOpen2 ? 'show' : ''}`}>
            <Link to={`/leadership`} onClick={toggleMenu}>Leadership</Link>
            <Link to={`/awards`} onClick={toggleMenu}>Awards</Link>
          </div>
        </div>
        <a href='#contact-section' onClick={toggleMenu}>Contact Us</a>
      </div>

      <FaBars className="menu-on-btn" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
