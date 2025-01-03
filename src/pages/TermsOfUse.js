import React from "react";
import "./TermsOfUse.css"; // Optional: To add custom styling to the page.
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faSitemap,
    faGavel,
    faExclamationTriangle,
    faUserShield,
  } from '@fortawesome/free-solid-svg-icons';

const TermsOfUse = () => {
    return (
        <>
            <Header />
            <div className="terms-of-use">
                <h1>Terms of Use Agreement</h1>
                <p>
                    Users of the Senate of Pakistan’s website agree to observe the terms and
                    conditions of use in force. The terms and conditions for these internet
                    services apply to the internet services produced and maintained by the Senate
                    Secretariat. The internet services in these terms and conditions refer to all
                    the internet services produced or maintained on the internet by the Senate
                    Secretariat.
                </p>

                <h2>Changes to Terms and Conditions</h2>
                <p>
                    The Senate Secretariat reserves the right to amend, without prior notice, the
                    terms and conditions for use, the layout, the content, and the accessibility of
                    the website, and to withdraw a service. The Senate Secretariat also reserves
                    the right to suspend the provision of a service during those times when it is
                    being serviced or updated.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    The Senate Secretariat shall not be held liable for any material published by
                    a third party, to which there are links on these Internet pages.
                </p>

                <h2>Questions/Comments</h2>
                <p>
                    If you have any questions about the practices of this site, or your dealings
                    with this site, please send us an email using the Contact Us feature of the
                    website.
                </p>
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

export default TermsOfUse;
