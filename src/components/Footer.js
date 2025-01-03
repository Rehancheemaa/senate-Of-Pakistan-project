// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
    faCalendar,
    faBell,
    faBookOpen,
    faQuestionCircle,
    faFileAlt,
    faFileContract,
    faPenFancy,
    faVideo,
    faGavel,
    faJournalWhills,
    faBook,
    faUsers,
    faUserTie,
    faUserShield,
    faUserFriends,
    faCheckSquare,
    faHandshake,
    faLandmark,
    faBuilding,
    faSearch,
    // faDatabase,
    // faBroadcastTower,
    faFileDownload,
    faChartBar,
    // faComments,
    faHandsHelping,
    faBullhorn,
    faImages,
    faAd,
    faExclamationCircle,
    faSitemap,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>House Business</h4>
                    <ul>
                        <li><a href="#calendar"><FontAwesomeIcon icon={faCalendar} /> Provisional Calendar</a></li>
                        <li><a href="#summoning"><FontAwesomeIcon icon={faBell} /> Summoning/Prorogation</a></li>
                        <li><a href="#orders"><FontAwesomeIcon icon={faBookOpen} /> Orders of the Day</a></li>
                        <li><a href="#QuestionsAnswers"><FontAwesomeIcon icon={faQuestionCircle} /> Questions/Answers</a></li>
                        <li><a href="#hansards"><FontAwesomeIcon icon={faFileAlt} /> Hansards</a></li>
                        <li><a href="#acts"><FontAwesomeIcon icon={faFileContract} /> Acts of Parliament</a></li>
                        <li><a href="#resolutions"><FontAwesomeIcon icon={faPenFancy} /> Resolutions</a></li>
                        <li><a href="#bills"><FontAwesomeIcon icon={faFileAlt} /> Bills</a></li>
                        <li><a href="#amendments"><FontAwesomeIcon icon={faGavel} /> Constitutional Amendments</a></li>
                        <li><a href="#webcasting"><FontAwesomeIcon icon={faVideo} /> Web Casting</a></li>
                        <li><a href="#ordinances"><FontAwesomeIcon icon={faFileAlt} /> Ordinances</a></li>
                        <li><a href="#rulings"><FontAwesomeIcon icon={faGavel} /> Rulings of the Chair</a></li>
                        <li><a href="#journals"><FontAwesomeIcon icon={faJournalWhills} /> Synopsis Journals</a></li>
                        <li><a href="#dailyjournals"><FontAwesomeIcon icon={faBook} /> Daily Journals</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Committees</h4>
                    <ul>
                        <li><a href="#senate"><FontAwesomeIcon icon={faUsers} /> Senate Committees</a></li>
                        <li><a href="#meetings"><FontAwesomeIcon icon={faCalendar} /> Committee Meetings</a></li>
                        <li><a href="#reports"><FontAwesomeIcon icon={faBookOpen} /> Committee Reports</a></li>
                        <li><a href="#whole"><FontAwesomeIcon icon={faUsers} /> Committee of the Whole</a></li>
                        <li><a href="#secretary"><FontAwesomeIcon icon={faUserTie} /> Secretary Committees</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Senators</h4>
                    <ul>
                        <li><a href="#chairman"><FontAwesomeIcon icon={faUserTie} /> Chairman Senate</a></li>
                        <li><a href="#deputychairman"><FontAwesomeIcon icon={faUserShield} /> Deputy Chairman</a></li>
                        <li><a href="#leaderhouse"><FontAwesomeIcon icon={faUserTie} /> Leader of the House</a></li>
                        <li><a href="#leaderopposition"><FontAwesomeIcon icon={faUserShield} /> Leader of the Opposition</a></li>
                        <li><a href="#members"><FontAwesomeIcon icon={faUserFriends} /> Members Senate</a></li>
                        <li><a href="#attendance"><FontAwesomeIcon icon={faCheckSquare} /> Members Attendance</a></li>
                        <li><a href="#friendshipgroups"><FontAwesomeIcon icon={faHandshake} /> Parliamentary Friendship Groups</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>About the Senate</h4>
                    <ul>
                        <li><a href="#federation"><FontAwesomeIcon icon={faLandmark} /> House of Federation</a></li>
                        <li><a href="#secretariat"><FontAwesomeIcon icon={faBuilding} /> Senate Secretariat</a></li>
                        <li><a href="#research"><FontAwesomeIcon icon={faSearch} /> Research Directorate</a></li>
                        <li><a href="#library"><FontAwesomeIcon icon={faBookOpen} /> Senate Library</a></li>
                        <li><a href="#international"><FontAwesomeIcon icon={faUsers} /> International Parliamentary Affairs</a></li>
                        <li><a href="#development"><FontAwesomeIcon icon={faChartBar} /> Parliamentary Development Unit</a></li>
                        <li><a href="#drafting"><FontAwesomeIcon icon={faPenFancy} /> Legislative Drafting Unit</a></li>
                        <li><a href="#house"><FontAwesomeIcon icon={faLandmark} /> Parliament House</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Publications</h4>
                    <ul>
                        <li><a href="#publications"><FontAwesomeIcon icon={faFileDownload} /> Publications</a></li>
                        <li><a href="#rules"><FontAwesomeIcon icon={faGavel} /> Rules and Acts</a></li>
                        <li><a href="#committee"><FontAwesomeIcon icon={faBookOpen} /> Committee Reports</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Media Centre</h4>
                    <ul>
                        <li><a href="#releases"><FontAwesomeIcon icon={faBullhorn} /> Press Releases</a></li>
                        <li><a href="#gallery"><FontAwesomeIcon icon={faImages} /> Picture Gallery</a></li>
                        <li><a href="#ads"><FontAwesomeIcon icon={faAd} /> Advertisements</a></li>
                        <li><a href="#notifications"><FontAwesomeIcon icon={faExclamationCircle} /> Notifications</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Get Involved</h4>
                    <ul>
                        <li><a href="#come"><FontAwesomeIcon icon={faHandsHelping} /> Come to Senate</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-contact-row">
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
                <div className="footer-contact">
                    <h2>Contact Us </h2>
                    <p>
                        <a href="mailto:info@senate.gov.pk" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faEnvelope} /> Email: info@senate.gov.pk
                        </a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> Phone: +92-51-1234567
                    </p>
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
        </footer>
    );
};

export default Footer;
