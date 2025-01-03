import React from "react";
import "./SiteMap.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faSitemap,
    faGavel,
    faExclamationTriangle,
    faUserShield,
  } from '@fortawesome/free-solid-svg-icons';

const SiteMap = () => {
    return (
        <><Header />
            <div className="site-map-container">
                <h1 className="site-map-title">Site Map</h1>
                <div className="site-map">
                    <div className="site-map-column">
                        <h3>House Business</h3>
                        <ul>
                            <li>Provisional Calendar</li>
                            <li>Summoning/Prorogation</li>
                            <li>Orders of the Day</li>
                            <li>Questions/Answers</li>
                            <li>Hansards</li>
                            <li>Acts of Parliament</li>
                            <li>Resolutions</li>
                            <li>Bills</li>
                            <li>Constitutional Amendments</li>
                            <li>Web Casting</li>
                            <li>Ordinances</li>
                            <li>Rulings of the Chair</li>
                            <li>Synopsis Journals</li>
                            <li>Daily Journals</li>
                        </ul>
                    </div>
                    <div className="site-map-column">
                        <h3>Committees</h3>
                        <ul>
                            <li>Senate Committees</li>
                            <li>Committee Meetings</li>
                            <li>Committee Reports</li>
                            <li>Committee of the Whole</li>
                            <li>Secretary Committees</li>
                        </ul>
                    </div>
                    <div className="site-map-column">
                        <h3>Senators</h3>
                        <ul>
                            <li>Chairman Senate</li>
                            <li>Deputy Chairman</li>
                            <li>Leader of the House</li>
                            <li>Leader of the Opposition</li>
                            <li>Members Senate</li>
                            <li>Members Attendance</li>
                            <li>Parliamentary Friendship Groups</li>
                        </ul>
                    </div>
                    <div className="site-map-column">
                        <h3>About the Senate</h3>
                        <ul>
                            <li>House of Federation</li>
                            <li>Senate Secretariat</li>
                            <li>Research Directorate</li>
                            <li>Senate Library</li>
                            <li>International</li>
                            <li>Parliamentary Affairs</li>
                            <li>Parliamentary Development Unit</li>
                            <li>Legislative Drafting Unit</li>
                            <li>Parliament House</li>
                        </ul>
                    </div>
                    <div className="site-map-column">
                        <h3>Publications</h3>
                        <ul>
                            <li>Publications</li>
                            <li>Rules and Acts</li>
                            <li>Committee Reports</li>
                        </ul>
                        <h3>Get Involved</h3>
                        <ul>
                            <li>Come to Senate</li>
                        </ul>
                    </div>
                    <div className="site-map-column">
                        <h3>Media Centre</h3>
                        <ul>
                            <li>Press Releases</li>
                            <li>Picture Gallery</li>
                            <li>Advertisements</li>
                            <li>Notifications</li>
                        </ul>
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

export default SiteMap;
