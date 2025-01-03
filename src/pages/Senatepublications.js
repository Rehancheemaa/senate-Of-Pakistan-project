import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import './SenatePublications.css';

const SenatePublications = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6; // Number of cards per page

  // Fetch data dynamically (replace this with your actual API endpoint or data)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: "Parliamentary Year Report (12th March 2023 - 11th March 2024)",
          date: "11th March, 2024",
          downloadLink: "/path/to/report1.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1710149189_419.jpeg",
        },
        {
          id: 2,
          title: "Parliamentary Year Report (12th March 2022 - 11th March 2023)",
          date: "13th March, 2023",
          downloadLink: "/path/to/report2.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1721286595_859.jpg",
        },
        {
          id: 3,
          title: "Parliamentary Year Report (12th March 2020 - 11th March 2022)",
          date: "11th March, 2022",
          downloadLink: "/path/to/report3.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1615460979_661.jpeg",
        },
        {
          id: 4,
          title: "Parliamentary Year Report (12th March 2021 - 11th March 2021)",
          date: "11th March, 2021",
          downloadLink: "/path/to/report4.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/PY2021-2022.png",
        },
        {
          id: 5,
          title: "Parliamentary Year Report (12th March 2023 - 11th March 2024)",
          date: "11th March, 2024",
          downloadLink: "/path/to/report1.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1710149189_419.jpeg",
        },
        {
          id: 6,
          title: "Parliamentary Year Report (12th March 2022 - 11th March 2023)",
          date: "13th March, 2023",
          downloadLink: "/path/to/report2.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1721286595_859.jpg",
        },
        {
          id: 7,
          title: "Parliamentary Year Report (12th March 2020 - 11th March 2022)",
          date: "11th March, 2022",
          downloadLink: "/path/to/report3.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1615460979_661.jpeg",
        },
        {
          id: 8,
          title: "Parliamentary Year Report (12th March 2021 - 11th March 2021)",
          date: "11th March, 2021",
          downloadLink: "/path/to/report4.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/PY2021-2022.png",
        },
        {
          id: 9,
          title: "Parliamentary Year Report (12th March 2023 - 11th March 2024)",
          date: "11th March, 2024",
          downloadLink: "/path/to/report1.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1710149189_419.jpeg",
        },
        {
          id: 10,
          title: "Parliamentary Year Report (12th March 2022 - 11th March 2023)",
          date: "13th March, 2023",
          downloadLink: "/path/to/report2.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1721286595_859.jpg",
        },
        {
          id: 11,
          title: "Parliamentary Year Report (12th March 2020 - 11th March 2022)",
          date: "11th March, 2022",
          downloadLink: "/path/to/report3.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/1615460979_661.jpeg",
        },
        {
          id: 12,
          title: "Parliamentary Year Report (12th March 2021 - 11th March 2021)",
          date: "11th March, 2021",
          downloadLink: "/path/to/report4.pdf",
          coverImage: "https://www.senate.gov.pk/uploads/documents/PY2021-2022.png",
        },
      ];
      setPublications(data);
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(publications.length / entriesPerPage);

  // Get the current page's data
  const currentPublications = publications.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header />
      <div className="publications-container">
        <h1>Publications</h1>
        <p>
          A large collection of publications is available on this forum of the
          upper House of Parliament of Pakistan, providing information on
          parliamentary practices, procedures, and matters of interest.
        </p>

        <div className="publications-cards">
          {currentPublications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <img
                src={pub.coverImage}
                alt={`Cover of ${pub.title}`}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{pub.title}</h3>
                <p className="card-date">{pub.date}</p>
                <a
                  href={pub.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  <FontAwesomeIcon icon={faFilePdf} /> Download
                </a>
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
          <a href="/glossary">Glossary</a> |
          <a href="/sitemap">Site Map</a> |
          <a href="/terms">Terms of Use</a> |
          <a href="/disclaimer">Disclaimer</a> |
          <a href="/privacy">Privacy Policy</a>
          <br />
          <br />
          Copyright © 2019-2024. All Rights Reserved. Senate of Pakistan.
        </p>
      </div>
    </>
  );
};

export default SenatePublications;
