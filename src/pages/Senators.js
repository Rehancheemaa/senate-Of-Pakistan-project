import React from 'react';
import Header from '../components/Header';
import './Senators.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const Senators = () => {
  return (
    <>
      <Header />
      <div className="senators-container">
        <h1>Senators</h1>
        <p className="senators-description">
          Senators are political representatives in the Senate, which is the upper house of the Legislature of Pakistan. They discuss proposed laws and vote on them like other representatives do, but Senators may have different powers than those in the National Assembly of Pakistan. The way they are chosen is also different:
          In Pakistan, elections to fill seats in the Senate allocated to each Province shall be held under the system of proportional representation through the single transferable vote. The Senate is not subject to dissolution but the term of its members is six years. Half of the Senate members retire after every three years and new ones are elected to replace them.
        </p>
        <h3 className="senators-subtitle">
          The role of a Senator is to:
        </h3>
        <ul className="senators-list">
          <li className="senators-list-item">Represent the views of their state in the Senate</li>
          <li className="senators-list-item">Scrutinize the work of the Government</li>
          <li className="senators-list-item">Introduce and debate legislation</li>
          <li className="senators-list-item">
            Work on Senate Committees to analyze information from community organisations, lobby groups, and members of the public on specific issues or legislation
          </li>
          <li className="senators-list-item">Present petitions</li>
          <li className="senators-list-item">Make recommendations on the Financial Bill</li>
        </ul>
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

export default Senators;
