import React from 'react';
import './Disclaimer.css';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const Disclaimer = () => {
    return (
        <>
            <Header />
            <div className="disclaimer">
                <h1>Disclaimer</h1>
                <section>
                    <h2>1. Structure</h2>
                    <h3>General:</h3>
                    <p>
                        The Senate Secretariat’s Automation Cell, part of the Senate of Pakistan, is responsible for the website and its maintenance.
                    </p>

                    <h3>Service Content:</h3>
                    <p>
                        The material presented on this site is provided solely for information purposes. The website gives information about the members of parliament, the sessions, legislative matters, committees, parliamentary groups, and international activities. The service is provided in two different languages, and both the structure and layout of the English and Urdu language pages correspond with each other.
                    </p>
                    <p>
                        Please note that the electronic versions of the legislation presented on this site are not regarded as the official version of the legislation. The users of this site must verify the accuracy and completeness of the information presented.
                    </p>
                    <p>
                        Some of the information and services found on this website have been provided by external sources. The Senate of Pakistan is not responsible for the accuracy, reliability, or timeliness of the information or services provided by external sources. Users wishing to rely upon this information or services should consult directly with the appropriate source.
                    </p>
                </section>

                <section>
                    <h2>2. Technical Data</h2>
                    <h3>Programs and Data Connections:</h3>
                    <p>
                        The website has been designed to reach as many user groups as possible in terms of operating system and browser combinations. The table below shows the operating system and browser requirements:
                    </p>

                    <h3>Operating System and Browser:</h3>
                    <h4>Windows:</h4>
                    <ul>
                        <li>Internet Explorer 5 or higher</li>
                        <li>Netscape Navigator 7 or higher</li>
                        <li>Opera 7 or higher</li>
                        <li>Mozilla 3.0 or higher</li>
                    </ul>
                    <h4>Mac:</h4>
                    <ul>
                        <li>Internet Explorer 5.2</li>
                        <li>Netscape 7</li>
                        <li>Opera 7</li>
                        <li>Mozilla 1</li>
                        <li>Safari 1.0</li>
                    </ul>
                    <h4>Linux:</h4>
                    <ul>
                        <li>Netscape 7</li>
                        <li>Mozilla 1</li>
                    </ul>
                    <p>
                        The website includes pdf documents that require Adobe Acrobat Reader to display them (downloadable free of charge from the Adobe website: <a href="https://www.adobe.com" target="_blank" rel="noopener noreferrer">www.adobe.com</a>). All the video presentations are in .flv (Flash Video Format) and .mp3 (MPEG Layer-3 Audio) formats. In order to watch these presentations, your computer must have a media player that supports one of these formats.
                    </p>
                </section>

                <section>
                    <h2>3. Further Information</h2>
                    <p>
                        If you have any questions or comments on our disclaimer, please contact the Senate Secretariat, Automation Office for further information on the Internet service:
                    </p>
                    <address>
                        IT Directorate<br />
                        Ground Floor, Parliament House Building<br />
                        Senate Secretariat<br />
                        Telephone: (+92) 51 9022581<br />
                        E-mail: <a href="mailto:websenate@senate.gov.pk">websenate@senate.gov.pk</a>
                    </address>
                </section>
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

export default Disclaimer;
