import React, { useState } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported correctly
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isActive = (path) => window.location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false); // State for House Business sub-nav

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen); // Toggle sub-navigation for House Business
  };
  
  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'House Business', path: '/HouseBusiness', hasSubNav: true },
    { name: 'Committees', path: '/SenateCommittees' },
    { name: 'Senators', path: '/Senators' },
    { name: 'About the Senate', path: '/About' },
    { name: 'Publications', path: '/Senatepublications' },
    { name: 'Media Centre', path: '/MediaCentre' },
    { name: 'Get Involved', path: '/SenateInvolved' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Emblem_of_Senate_of_Pakistan.png"
          alt="Pakistan Senate Logo"
          className="logo-image"
        />
        <div className="logo-text">
          <h1>SENATE of PAKISTAN</h1>
          <p>House of the Federation</p>
        </div>

        <div className="search-container">
          <form>
            <input
              type="text"
              className="searchtxt"
              placeholder="Search.."
              name="search"
            />
            <button className="searchbtn" type="submit">
              🔍
            </button>
          </form>
        </div>

        <div className="social-icons">
          <a href="https://mail.senate.gov.pk/" target="_blank" rel="noopener noreferrer" title="Senate Official Email" className="social-icon">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/Pakistansenate/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://x.com/Senatepakistan" target="_blank" rel="noopener noreferrer" title="X" className="social-icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/c/senateofpakistanofficial" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-icon">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <div className="close-drawer" onClick={toggleMenu}>
          <i className="fa fa-times"></i>
        </div>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className={isActive(link.path) ? 'active' : ''}
                href={link.path}
                onClick={link.hasSubNav ? toggleSubNav : () => navigate(link.path)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
