import React from 'react';
import Header from '../components/Header';
import './HouseBusiness.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const HouseBusiness = () => {


  return (
    <>
      <Header />

      <div className="content">
        <div className="content-grid">
          <div className="feature-card">
            <h1>House Business</h1>
            <p>House Business refers to all business of the House; and is classified as Government Business, Private Members’ Business, and Senate Business.</p>
          </div>
          <div className="info-card">
            <h2>Government Business</h2>
            <p>Government Business includes Bills, Resolutions, Amendments, and other Motions introduced/moved by a Minister.</p>
          </div>
          <div className="info-card">
            <h2>Private Members’ Business</h2>
            <p>Private Members’ Business includes Bills, Resolutions, Amendments, and other Motions introduced/moved by Private Members.</p>
          </div>
          <div className="highlight-card">
            <h2>Senate Business</h2>
            <p>Senate Business includes business relating to the Committees and such other business as classified by the Chairman. The Legislation Branch maintains records of all business carried out in the House that can be used as a ready reference by anyone who seeks detailed information regarding legislative processes carried out in the House. This section provides visitors with a glimpse of all the business undertaken by the Upper House.</p>
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

export default HouseBusiness;
