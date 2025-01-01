import React, { useState } from 'react';
import Header from '../components/Header';
import './HouseBusiness.css';
import { useNavigate } from 'react-router-dom';

const HouseBusiness = () => {
  const [activeButton, setActiveButton] = useState('');
  const navigate = useNavigate();

  const goTo = (path, buttonName) => {
    setActiveButton(buttonName); // Set active button
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="sub-navigation">
        <button
          onClick={() => goTo('/provisionalcalendar', 'ProvisionalCalendar')}
          className={activeButton === 'ProvisionalCalendar' ? 'active' : ''}
        >
          Provisional Calendar
        </button>
        |
        <button
          onClick={() => goTo('/SummoningPage', 'SummoningPage')}
          className={activeButton === 'SummoningPage' ? 'active' : ''}
        >
          Summoning / Prorogation
        </button>
        |
        <button
          onClick={() => goTo('/Orderoftheday', 'Orderoftheday')}
          className={activeButton === 'Orderoftheday' ? 'active' : ''}
        >
          Orders of the Day
        </button>
        |
        <button
          onClick={() => goTo('/QuestionsAnswers', 'QuestionsAnswersAnswers')}
          className={activeButton === 'QuestionsAnswersAnswers' ? 'active' : ''}
        >
          Questions/Answers
        </button>
        |
        <button
          onClick={() => goTo('/hansards', 'Hansards')}
          className={activeButton === 'Hansards' ? 'active' : ''}
        >
          Hansards
        </button>
        |
        <button
          onClick={() => goTo('/acts', 'ActsOfParliament')}
          className={activeButton === 'ActsOfParliament' ? 'active' : ''}
        >
          Acts of Parliament
        </button>
        |
        <button
          onClick={() => goTo('/resolutions', 'Resolutions')}
          className={activeButton === 'Resolutions' ? 'active' : ''}
        >
          Resolutions
        </button>
        |
        <button
          onClick={() => goTo('/bills', 'Bills')}
          className={activeButton === 'Bills' ? 'active' : ''}
        >
          Bills
        </button>
        |
        <button
          onClick={() => goTo('/amendments', 'ConstitutionalAmendments')}
          className={activeButton === 'ConstitutionalAmendments' ? 'active' : ''}
        >
          Constitutional Amendments
        </button>
        |
        <button
          onClick={() => goTo('/webcasting', 'WebCasting')}
          className={activeButton === 'WebCasting' ? 'active' : ''}
        >
          Web Casting
        </button>
        |
        <button
          onClick={() => goTo('/ordinances', 'Ordinances')}
          className={activeButton === 'Ordinances' ? 'active' : ''}
        >
          Ordinances
        </button>
      </div>

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

      <div className="footer-section">
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

export default HouseBusiness;
