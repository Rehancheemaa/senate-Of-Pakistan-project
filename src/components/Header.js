import React, { useState } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported correctly
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faGavel,
  faUsers,
  faUserTie,
  faInfoCircle,
  faBook,
  faCamera,
  faHandshake,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
    { name: 'Home', path: '/home', icon: faHome },
    { name: 'House Business', path: '/HouseBusiness', hasSubNav: true, icon: faGavel },
    { name: 'Committees', path: '/SenateCommittees', icon: faUsers },
    { name: 'Senators', path: '/Senators', icon: faUserTie },
    { name: 'About the Senate', path: '/About', icon: faInfoCircle },
    { name: 'Publications', path: '/Senatepublications', icon: faBook },
    { name: 'Media Centre', path: '/MediaCentre', icon: faCamera },
    { name: 'Get Involved', path: '/SenateInvolved', icon: faHandshake },
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
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="social-icons">
          <a href="https://mail.senate.gov.pk/" target="_blank" rel="noopener noreferrer" title="Senate Official Email" className="social-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.facebook.com/Pakistansenate/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/Senatepakistan" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com/c/senateofpakistanofficial" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
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
                <FontAwesomeIcon icon={link.icon} className="nav-icon" /> {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
