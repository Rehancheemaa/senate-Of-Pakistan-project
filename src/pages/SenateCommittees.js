import React, { useState } from "react";
import Header from "../components/Header";
import "./SenateCommittees.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const SenateCommittees = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { id: 1, name: "Business Advisory Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 2, name: "Senate Finance Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 3, name: "Devolution", type: "Functional Committee", chairperson: "Dr Zarga Suharwardy Taimur", secretary: "Farhana Wagha" },
    { id: 4, name: "Government Assurances", type: "Functional Committee", chairperson: "Abdul Shakoor Khan", secretary: "Samuilah" },
    { id: 5, name: "Human Rights", type: "Functional Committee", chairperson: "Samina Mumtaz Zehri", secretary: "Muhammad Irfan Chaudhry" },
    { id: 6, name: "Problems of Less Developed Areas", type: "Functional Committee", chairperson: "Shahzadi Durrani", secretary: "Muhammad Asghar Gondal" },
    { id: 7, name: "Senate House Committee", type: "House Committee", chairperson: "Syedail Khan", secretary: "Tayyab Bin Tahir Khan" },
    { id: 8, name: "Delegated Legislation", type: "Other Committee", chairperson: "Naseema Ehsan", secretary: "Muhammad Tariq Mahmood" },
    { id: 9, name: "Aviation", type: "Standing Committee", chairperson: "Abdul Qudoos", secretary: "Shahana Iftikhar" },
    { id: 10, name: "Business Advisory Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 11, name: "Senate Finance Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 12, name: "Devolution", type: "Functional Committee", chairperson: "Dr Zarga Suharwardy Taimur", secretary: "Farhana Wagha" },
    { id: 13, name: "Government Assurances", type: "Functional Committee", chairperson: "Abdul Shakoor Khan", secretary: "Samuilah" },
    { id: 14, name: "Human Rights", type: "Functional Committee", chairperson: "Samina Mumtaz Zehri", secretary: "Muhammad Irfan Chaudhry" },
    { id: 15, name: "Problems of Less Developed Areas", type: "Functional Committee", chairperson: "Shahzadi Durrani", secretary: "Muhammad Asghar Gondal" },
    { id: 16, name: "Senate House Committee", type: "House Committee", chairperson: "Syedail Khan", secretary: "Tayyab Bin Tahir Khan" },
    { id: 17, name: "Delegated Legislation", type: "Other Committee", chairperson: "Naseema Ehsan", secretary: "Muhammad Tariq Mahmood" },
    { id: 18, name: "Aviation", type: "Standing Committee", chairperson: "Abdul Qudoos", secretary: "Shahana Iftikhar" },
  ];

  const itemsPerPage = 6;
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.chairperson.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <div className="table-container">
        <section className="committees-section">
          <div className="committees-header">
            <h1>Committees</h1>
            <p>
              Recognized as political nerve ends, the gatherers of information, the sifters of alternatives,
              the refiners of legislative detail, and the eyes and ears of the Parliament, much of the business
              of the House is handled by the Committees.
            </p>
          </div>
        </section>

        <input
          type="text"
          placeholder="Search by Name, Chairperson, or Type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="cards-container">
          {displayedData.map((item) => (
            <div key={item.id} className="committee-card">
              <h3 className="card-title">{item.name}</h3>
              <div className="card-details">
                <div className="card-detail-item">
                  <h4>Type</h4>
                  <p className="card-type">{item.type}</p>
                </div>
                <div className="card-detail-item">
                  <h4>Chairperson</h4>
                  <p className="card-chairperson">{item.chairperson}</p>
                </div>
                <div className="card-detail-item">
                  <h4>Secretary</h4>
                  <p className="card-secretary">{item.secretary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? "active-page" : ""
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
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

export default SenateCommittees;
