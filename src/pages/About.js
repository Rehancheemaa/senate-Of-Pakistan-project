import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-row">
          {/* Sidebar */}
          <div className="about-sidebar">
            <div className="about-card">
              <div className="about-card-header">
                <h5>About the Senate</h5>
              </div>
              <ul className="about-list">
                <li className="about-list-item">History</li>
                <li className="about-list-item">Purpose & Role</li>
                <li className="about-list-item">Mission Statement</li>
                <li className="about-list-item">Composition / Structure</li>
                <li className="about-list-item">Senate Elections</li>
                <li className="about-list-item">FAQs</li>
              </ul>
            </div>
          </div>

          {/* Overview Section */}
          <div className="about-content">
            <h3>Overview</h3>
            <p>
              The Senate of Pakistan is a body which represents the provinces/territories of the country and promotes a feeling of equality, peace and harmony, which is so essential for the growth and prosperity of a nation. Thus, the Senate in Pakistan, over the years, has emerged as an essential organ and a stabilizing factor of the federation.
            </p>
            <p>
              The role of the Senate is to promote national cohesion and harmony and to alleviate fears of the smaller provinces regarding domination by any one province because of its majority in the National Assembly.
            </p>
            <p>
              The main purpose for the creation of the Senate of Pakistan was to give equal representation to all the federating units since the membership of the National Assembly was based on the population of each Province. Equal provincial membership in the Senate, thus, balances the provincial inequality in the National Assembly and dispels doubts and apprehensions, if any, regarding deprivation and exploitation.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <a href="#glossary">Glossary</a> | <a href="#sitemap">Site Map</a> | <a href="#terms">Terms of Use</a> | <a href="#disclaimer">Disclaimer</a> | <a href="#privacy">Privacy Policy</a>
          <br />
          <br />
          Copyright © 2019-2024. All Rights Reserved. Senate of Pakistan.
        </p>
      </div>
    </>
  );
};

export default About;
