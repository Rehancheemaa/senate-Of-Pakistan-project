import React, { useState } from "react";
import Header from "../components/Header";
import "./SenateCommittees.css"; // Add custom CSS for styling
import ReactPaginate from "react-paginate";

const SenateCommittees = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

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
    { id: 1, name: "Business Advisory Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 2, name: "Senate Finance Committee", type: "Domestic Committee", chairperson: "Syed Yousaf Raza Gilani", secretary: "Syed Hasnain Haider" },
    { id: 3, name: "Devolution", type: "Functional Committee", chairperson: "Dr Zarga Suharwardy Taimur", secretary: "Farhana Wagha" },
    { id: 4, name: "Government Assurances", type: "Functional Committee", chairperson: "Abdul Shakoor Khan", secretary: "Samuilah" },
    { id: 5, name: "Human Rights", type: "Functional Committee", chairperson: "Samina Mumtaz Zehri", secretary: "Muhammad Irfan Chaudhry" },
    { id: 6, name: "Problems of Less Developed Areas", type: "Functional Committee", chairperson: "Shahzadi Durrani", secretary: "Muhammad Asghar Gondal" },
    { id: 7, name: "Senate House Committee", type: "House Committee", chairperson: "Syedail Khan", secretary: "Tayyab Bin Tahir Khan" },
    { id: 8, name: "Delegated Legislation", type: "Other Committee", chairperson: "Naseema Ehsan", secretary: "Muhammad Tariq Mahmood" },
    { id: 9, name: "Aviation", type: "Standing Committee", chairperson: "Abdul Qudoos", secretary: "Shahana Iftikhar" },
  ];

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Header />
      <div className="table-container">
        <section className="committees-section">
          <div className="committees-header">
            <h1>Committees</h1>
            <p>
              Recognized as political nerve ends, the gatherers of information, the
              sifters of alternatives, the refiners of legislative detail, and the
              eyes and ears of the Parliament, much of the business of the House is
              handled by the Committees. The Senate of Pakistan has an efficient
              Committee System which has established traditions of sovereignty of
              the Parliament over the years and has dealt with a wide range of
              issues of national importance and public interest.
            </p>
          </div>
          <div className="committees-content">
            <div className="committees-list">
              <h2>Senate Committees</h2>
              <ul>
                <li>Standing Committees</li>
                <li>Functional Committees</li>
                <li>Domestic Committees</li>
                <li>Other Committees</li>
                <li>Special Committees</li>
                <li>Select Committees on Bills</li>
              </ul>
            </div>
            <div className="committees-image">
              <img
                src="https://www.senate.gov.pk/en/images/committeeroom.jpg" // Replace with your image URL
                alt="Senate Committee Room"
              />
            </div>
          </div>
          <div className="committees-footer">
            <p>
              Under the Senate rules, there shall be a Standing Committee that
              deals with the business of the Government relating to the Ministry
              with which it is concerned or any other matter referred to it by the
              Senate or the Chairman Senate. A Committee is authorized to examine
              suo moto the budgetary allocation, administration, legislation,
              public petitions, and the policies of the Ministry concerned and its
              attached Divisions.
            </p>
            <p>
              Besides Standing Committees, there are the functional Committees,
              (i) <strong>Committee on Government Assurances,</strong> (ii) <strong> Committee on Problems of
                Less Developed Areas, </strong> (iii) <strong> Committee on Devolution, and </strong>
              (iv)  <strong>Committee on Human Rights.</strong>
            </p>
            <p>
              In addition to the above Committees, there are other Committees,
              namely the Committee on Rules of Procedure and Privileges and the
              Committee on Delegated Legislation. While, <strong>House Committee</strong> and{" "}
              <strong>Library Committee</strong> are the domestic committees of the Senate of
              Pakistan concerning issues, requirements, and provision of a wide
              range of facilities & modern solutions to the Senators from the
              facilitation of accommodations to ensuring access to members to a
              vast range of books and international journals.
            </p>
          </div>
        </section>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <table className="table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Committee Name</th>
              <th>Committee Type</th>
              <th>Chairperson</th>
              <th>Secretary</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(offset, offset + itemsPerPage).map((item, index) => (
              <tr key={item.id}>
                <td>{offset + index + 1}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.chairperson}</td>
                <td>{item.secretary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
      <div className="footer-bottom">
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

export default SenateCommittees;
