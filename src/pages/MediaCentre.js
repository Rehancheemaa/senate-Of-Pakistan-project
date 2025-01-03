import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import './MediaCentre.css';
import {
  faBook,
  faSitemap,
  faGavel,
  faExclamationTriangle,
  faUserShield,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

const MediaCentre = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6; // Number of cards per page

  // Fetch data dynamically (replace this with your actual API endpoint or data)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: "Senator Naseema Ehsan, Chairperson Senate Committee on Delegated Legislation presiding over a meeting of the Committee at Parliament House Islamabad",
          date: "1st January, 2025",
          committee: "Delegated Legislation",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735731878_857.jpg",
        },
        {
          id: 2,
          title: "Senator Palwasha Mohammad Zai Khan, Chairperson Senate Standing Committee on Information Technology and Telecommunication presiding over a meeting of the Committee at Parliament Lodges Islamabad",
          date: "1st January, 2025",
          committee: "Information Technology and Telecommunication",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735732434_728.jpg",
        },
        {
          id: 3,
          title: "Senator Atta Ur Rehman, Chairman Senate Standing Committee on Religious Affairs and Inter-Faith Harmony Presiding over a Meeting of The Committee at Parliament House Islamabad",
          date: "31st December, 2024",
          committee: "Religious Affairs and Inter-Faith Harmony",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735646174_718.jpg",
        },
        {
          id: 4,
          title: "Senator Muhammad Hamayun Mohmand, Chairman Senate Standing Committee on Parliamentary Affairs presiding over a Meeting of the Committee at Parliament House, Islamabad",
          date: "31st December, 2024",
          committee: "Parliamentary Affairs",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735646121_576.jpg",
        },
        {
          id: 5,
          title: "Senator Saleem Mandviwalla Chairman Senate Standing Committee on Finance and Revenue presiding over a meeting of the committee at Parliament House Islamabad",
          date: "26th December, 2024",
          committee: "Finance and Revenue",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
        },
        {
          id: 6,
          title: "Senator Saleem Mandviwalla Chairman Senate Standing Committee on Finance and Revenue presiding over a meeting of the committee at Parliament House Islamabad",
          date: "24th December, 2024",
          committee: "Finance and Revenue",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
        },
        {
          id: 7,
          title: "Senator Saifullah Abro, Chairman Senate Standing Committee on Economic Affairs presiding over a meeting of the committee at Parliament House Islamabad",
          date: "24th December, 2024",
          committee: "Economic Affairs",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1735032869_591.jpg",
        },
        {
          id: 8,
          title: "Senator Zeeshan Khanzada presiding over a meeting of the Senate Standing Committee on Overseas Pakistanis and Human Resource Development at Parliament House Islamabad",
          date: "23rd December, 2024",
          committee: "Overseas Pakistanis and Human Resource Development",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1734947654_441.jpg",
        },
        {
          id: 9,
          title: "Chairman Senate, Syed Yousaf Raza Gilani Presiding over a Meeting of the Board of Governors of the Pakistan Institute for Parliamentary Services (PIPS) In Islamabad",
          date: "20th December, 2024",
          committee: "N/A",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1734700505_136.jpg",
        },
        {
          id: 10,
          title: "Chairman Senate of Pakistan, Syed Yousaf Raza Gilani, Addresses the 18th Speakers Conference at Parliament House, Islamabad",
          date: "20th December, 2024",
          committee: "N/A",
          coverImage: "https://www.senate.gov.pk/uploads/images/news_pic/1734700973_696.jpg",
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
      <div className="media-container">
        <h1>Media Centre</h1>
        <div className="media-cards">
          {currentPublications.map((pub) => (
            <div key={pub.id} className="media-card">
              <img
                src={pub.coverImage}
                alt={`Cover of ${pub.title}`}
                className="card-img"
              />
              <div className="card-content">
                {/* <p className="card-id">{pub.id}</p> */}
                <h3 className="card-title">{pub.title}</h3>
                <p className="card-committee">{pub.committee}</p>
                <h4 className="card-date">{pub.date}</h4>
                <a
                  href={pub.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
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

export default MediaCentre;
