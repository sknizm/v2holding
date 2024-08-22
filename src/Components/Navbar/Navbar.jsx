import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { FaBars, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="desktop-menu">
        
      <div className="search-box">
      <FaSearch className='icon'/>
      <input type="text" placeholder='Search by City, Address or Neighborhood' />
      </div>
      <Link to={'/properties'} >PROPERTIES</Link>
      <Link to={'/properties'} >HOME SEARCH</Link>
      <Link to={'/properties'} >CONTACT US</Link>
      <Link to={'/properties'} >805-905-1243</Link>
      </div>
     <FaBars className='menu-on-btn'/>
      <div className="mobile-menu">

      </div>
    </nav>
  )
}

export default Navbar