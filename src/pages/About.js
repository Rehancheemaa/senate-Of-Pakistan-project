import React, { useState } from 'react';
import Header from '../components/Header';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  // Function to handle the selection of a section
  const handleSelection = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Header />
      <div className="about-container">
        <div className="row about-row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 col-sm-12 about-sidebar">
            <div className="about-card">
              <div className="about-card-header">
                <h5>About the Senate</h5>
              </div>
              <ul className="about-list">
                <li
                  className={`about-list-item ${selectedSection === 'history' ? 'active' : ''}`}
                  onClick={() => handleSelection('history')}
                >
                  History
                </li>
                <li
                  className={`about-list-item ${selectedSection === 'purpose' ? 'active' : ''}`}
                  onClick={() => handleSelection('purpose')}
                >
                  Purpose & Role
                </li>
                <li
                  className={`about-list-item ${selectedSection === 'mission' ? 'active' : ''}`}
                  onClick={() => handleSelection('mission')}
                >
                  Mission Statement
                </li>
                <li
                  className={`about-list-item ${selectedSection === 'composition' ? 'active' : ''}`}
                  onClick={() => handleSelection('composition')}
                >
                  Composition / Structure
                </li>
                <li
                  className={`about-list-item ${selectedSection === 'elections' ? 'active' : ''}`}
                  onClick={() => handleSelection('elections')}
                >
                  Senate Elections
                </li>
                <li
                  className={`about-list-item ${selectedSection === 'faqs' ? 'active' : ''}`}
                  onClick={() => handleSelection('faqs')}
                >
                  FAQs
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9 col-md-8 col-sm-12 about-content">
            {/* Always show the Overview first */}
            {selectedSection === null && (
              <>
                <h2>Overview</h2>
                <p>
                  The Senate of Pakistan is a body which represents the provinces/territories of the country and promotes a feeling of equality, peace and harmony, which is so essential for the growth and prosperity of a nation. Thus, the Senate in Pakistan, over the years, has emerged as an essential organ and a stabilizing factor of the federation.
                  <br />
                  The role of the Senate is to promote national cohesion and harmony and to alleviate fears of the smaller provinces regarding domination by any one province because of its majority in the National Assembly.
                  <br />
                  The main purpose for the creation of the Senate of Pakistan was to give equal representation to all the federating units since the membership of the National Assembly was based on the population of each Province. Equal provincial membership in the Senate, thus, balances the provincial inequality in the National Assembly and dispels doubts and apprehensions, if any, regarding deprivation and exploitation.
                </p>
              </>
            )}

            {/* Show content based on the selected section */}
            {selectedSection && (
              <>
                <h2>{selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}</h2>
                {selectedSection === 'history' && (
                  <p>
                    The Senate of Pakistan has a rich history, starting from its inception as a key legislative body to its role in promoting national cohesion and harmony. It represents the federating units and balances the disparities between the provinces.
                  </p>
                )}
                {selectedSection === 'purpose' && (
                  <p>
                    The purpose of the Senate is to provide equal representation to all provinces in Pakistan and to ensure that no single province can dominate the others in the legislative process.
                  </p>
                )}
                {selectedSection === 'mission' && (
                  <p>
                    The mission of the Senate is to foster national unity, protect the interests of smaller provinces, and contribute to the peaceful and democratic governance of the country.
                  </p>
                )}
                {selectedSection === 'composition' && (
                  <p>
                    The Senate is composed of members elected from each province, ensuring that every province has an equal voice in the legislative process. The structure is designed to promote harmony among diverse regions.
                  </p>
                )}
                {selectedSection === 'elections' && (
                  <p>
                    Senate elections are held to elect members from each province. The election process ensures fair representation and is a key component of Pakistan's democratic system.
                  </p>
                )}
                {selectedSection === 'faqs' && (
                  <p>
                    Frequently Asked Questions about the Senate, its functions, and its role in Pakistan's democracy.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
                <p>
                    <a href="/glossary"><FontAwesomeIcon icon={faBook} /> Glossary</a> |
                    <a href="/sitemap"><FontAwesomeIcon icon={faSitemap} /> Site Map</a> |
                    <a href="/terms"><FontAwesomeIcon icon={faGavel} /> Terms of Use</a> |
                    <a href="/disclaimer"><FontAwesomeIcon icon={faExclamationTriangle} /> Disclaimer</a> |
                    <a href="/privacy"><FontAwesomeIcon icon={faUserShield} /> Privacy Policy</a>
                    <br />
                    <br />
                    Copyright © 2019-2024. All Rights Reserved. Senate of Pakistan.
                </p>
            </div>
    </>
  );
};

export default About;
