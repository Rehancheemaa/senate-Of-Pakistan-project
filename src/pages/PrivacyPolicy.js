import React from 'react';
import Header from '../components/Header';
import './PrivacyPolicy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faSitemap,
    faGavel,
    faExclamationTriangle,
    faUserShield,
  } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="privacy-policy">
                <div className="content-wrapper">
                    <h1>Privacy and Security Policy</h1>

                    <section>
                        <h2>Personal Information</h2>
                        <p>
                            Personal information (e.g. name, phone number, e-mail address etc) is not automatically collected. This information is only obtained if provided through usage of contact forms or by sending an e-mail, and will only be used to respond to your message(s) and to provide you with information requested, if available. No personal information is collected or used for commercial marketing.
                        </p>
                    </section>

                    <section>
                        <h2>Cookies</h2>
                        <p>
                            A cookie is a piece of data that contains information about your activities on the Internet. The Senate of Pakistan’s website does not use cookies to collect personal identifiable information or track site usage. The only cookies used on this site are session cookies. These cookies are used to facilitate navigation through the site and do not collect personal information on the user. Session cookies are not stored on your computer’s hard drive and are erased from memory as soon as you leave our website or close your browser.
                        </p>
                    </section>

                    <section>
                        <h2>Security</h2>
                        <p>
                            The Senate of Pakistan’s website uses commercial software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage. The software records the Internet Protocol (IP) address and Internet domain from which you accessed our website, the type of browser used, the date and time of your access, the pages you access, and the address of the website from which you accessed the Senate of Pakistan’s website (https://www.senate.gov.pk).
                        </p>
                        <p>
                            The information collected is used to administer the site and analyze trends and demographic information related to site usage. IP addresses are not used to determine the identity of users of the site unless an attempt to damage the site has been detected.
                        </p>
                    </section>

                    <section>
                        <h2>Links</h2>
                        <p>
                            This website contains links to other websites created and maintained by other public or private organizations. These are provided for the convenience of our users. When users link to these sites, they leave the Senate of Pakistan’s website, and are subject to the privacy and security policies of the relevant websites accessed.
                        </p>
                        <p>
                            Links to non-Senate of Pakistan websites do not mean that the Senate of Pakistan endorses the organizations sponsoring the linked websites, the views expressed, or services offered by these organizations.
                        </p>
                    </section>

                    <section>
                        <h2>Notification of Changes</h2>
                        <p>
                            The Senate of Pakistan reserves the right in its sole discretion to amend this privacy statement at any time, and you should regularly check this privacy statement for any amendment.
                        </p>
                    </section>

                    <section className="contact">
                        <h2>Contact Information</h2>
                        <address>
                            Senate of Pakistan<br />
                            Parliament House, Islamabad, Pakistan<br />
                            IT Directorate<br />
                            Ground Floor, Parliament House Building<br />
                            Senate Secretariat<br />
                            Telephone: (+92) 51 9022581<br />
                            E-mail: <a href="mailto:websenate@senate.gov.pk">websenate@senate.gov.pk</a>
                        </address>
                    </section>
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

export default PrivacyPolicy;
