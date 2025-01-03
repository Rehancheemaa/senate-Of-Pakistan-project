import React from "react";
import "./Glossary.css"; // Importing styles
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const glossaryData = [
    { term: "Act", definition: "A Bill passed by the Parliament or the National Assembly and assented to by the President." },
    { term: "Adjournment of Debate", definition: "Postponement of a debate on a Motion/Resolution/Bill on which the House is then engaged to some other time or date." },
    { term: "Adjournment of the sitting of the House", definition: "An adjournment terminates the sitting of the House, which meets again at the time appointed for the next sitting." },
    { term: "Adjournment sine die", definition: "Termination of a sitting of the House without specifying a date for the next sitting." },
    { term: "Amendment", definition: "Means a motion to amend an earlier motion before that earlier motion is put to the House for its decision." },
    { term: "Assembly", definition: "Means the National Assembly." },
    { term: "Bill", definition: "Bill means a motion for making a law." },
    { term: "Budget", definition: "Annual financial statement of the estimated receipts and expenditures of the Government of Pakistan in respect of a financial year." },
    { term: "Calendar of Sittings", definition: "A provisional calendar of sittings showing the days on which Senate is to sit and the nature of business to be transacted by it." },
    { term: "Casting Vote", definition: "The vote cast by the Chairman, or a person acting as such in the House or by a Chairman Committee or a person acting as such in a Committee meeting, in case of an equality of votes on a matter." },
    { term: "Chairman", definition: "Means the Chairman of the Senate and includes the Deputy Chairman or, in relation to a particular Committee, a member who is performing the functions of the Chairman." },
    { term: "Chamber", definition: "The place where the Senate meets to transact its business." },
    { term: "Closure", definition: "It is one of the means by which a debate may be brought to a close by a majority decision of the House, even though all members wishing to speak have not done so." },
    { term: "Committee", definition: "Means a Committee constituted under the Rules of Procedure and Conduct of Business in the Senate, 1988." },
    { term: "Crossing floor of the House", definition: "Passing between a member holding the floor of the House and the Chair. To cross the floor is a breach of Parliamentary rules." },
  ];
  

const Glossary = () => {
  return (
    <><Header/>
    <div className="glossary-container">
      <h1 className="glossary-title">Glossary</h1>
      <div className="glossary-list">
        {glossaryData.map((item, index) => (
          <div key={index} className="glossary-item">
            <h2 className="glossary-term">{item.term}</h2>
            <p className="glossary-definition">{item.definition}</p>
          </div>
        ))}
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

export default Glossary;
