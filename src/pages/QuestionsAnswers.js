import React, { useState } from "react";
import "./QuestionsAnswers.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const QuestionsAnswers = () => {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();

    const goTo = (path, buttonName) => {
        setActiveButton(buttonName); // Set active button
        navigate(path);
    };
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 10; // Number of items per page

    const data = [
        { id: 1, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 19, 2024", file: "file1.pdf" },
        { id: 2, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 16, 2024", file: "file2.pdf" },
        { id: 3, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 13, 2024", file: "file3.pdf" },
        { id: 4, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 12, 2024", file: "file4.pdf" },
        { id: 5, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 11, 2024", file: "file5.pdf" },
        { id: 6, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 4, 2024", file: "file6.pdf" },
        { id: 7, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 1, 2024", file: "file7.pdf" },
        { id: 8, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 29, 2024", file: "file8.pdf" },
        { id: 9, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 28, 2024", file: "file9.pdf" },
        { id: 10, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 25, 2024", file: "file10.pdf" },

        { id: 11, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 19, 2024", file: "file11.pdf" },
        { id: 12, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 16, 2024", file: "file12.pdf" },
        { id: 13, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 13, 2024", file: "file13.pdf" },
        { id: 14, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 12, 2024", file: "file14.pdf" },
        { id: 15, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 11, 2024", file: "file15.pdf" },
        { id: 16, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 4, 2024", file: "file16.pdf" },
        { id: 17, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 1, 2024", file: "file17.pdf" },
        { id: 18, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 29, 2024", file: "file18.pdf" },
        { id: 19, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 28, 2024", file: "file19.pdf" },
        { id: 20, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 25, 2024", file: "file20.pdf" },

        { id: 21, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 19, 2024", file: "file21.pdf" },
        { id: 22, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 16, 2024", file: "file22.pdf" },
        { id: 23, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 13, 2024", file: "file23.pdf" },
        { id: 24, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 12, 2024", file: "file24.pdf" },
        { id: 25, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 11, 2024", file: "file25.pdf" },
        { id: 26, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 4, 2024", file: "file26.pdf" },
        { id: 27, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 1, 2024", file: "file27.pdf" },
        { id: 28, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 29, 2024", file: "file28.pdf" },
        { id: 29, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 28, 2024", file: "file29.pdf" },
        { id: 30, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 25, 2024", file: "file30.pdf" },
    ];

    const filteredData = data.filter((item) =>
        item.year.toLowerCase().includes(search.toLowerCase()) ||
        item.session.toLowerCase().includes(search.toLowerCase()) ||
        item.date.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <>
            <Header />
            <div className="sub-navigation">
                <button
                    onClick={() => goTo('/provisionalcalendar', 'ProvisionalCalendar')}
                    className={activeButton === 'ProvisionalCalendar' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Provisional Calendar
                </button>
                |
                <button
                    onClick={() => goTo('/SummoningPage', 'SummoningPage')}
                    className={activeButton === 'SummoningPage' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Summoning / Prorogation
                </button>
                |
                <button
                    onClick={() => goTo('/Orderoftheday', 'Orderoftheday')}
                    className={activeButton === 'Orderoftheday' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Orders of the Day
                </button>
                |
                <button
                    onClick={() => goTo('/QuestionsAnswers', 'QuestionsAnswersAnswers')}
                    className={activeButton === 'QuestionsAnswersAnswers' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Questions/Answers
                </button>
                |
                <button
                    onClick={() => goTo('/hansards', 'Hansards')}
                    className={activeButton === 'Hansards' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Hansards
                </button>
                |
                <button
                    onClick={() => goTo('/acts', 'ActsOfParliament')}
                    className={activeButton === 'ActsOfParliament' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Acts of Parliament
                </button>
                |
                <button
                    onClick={() => goTo('/resolutions', 'Resolutions')}
                    className={activeButton === 'Resolutions' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Resolutions
                </button>
                |
                <button
                    onClick={() => goTo('/bills', 'Bills')}
                    className={activeButton === 'Bills' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Bills
                </button>
                |
                <button
                    onClick={() => goTo('/amendments', 'ConstitutionalAmendments')}
                    className={activeButton === 'ConstitutionalAmendments' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Constitutional Amendments
                </button>
                |
                <button
                    onClick={() => goTo('/webcasting', 'WebCasting')}
                    className={activeButton === 'WebCasting' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Web Casting
                </button>
                |
                <button
                    onClick={() => goTo('/ordinances', 'Ordinances')}
                    className={activeButton === 'Ordinances' ? 'sub-navigation__button--active' : 'sub-navigation__button'}
                >
                    Ordinances
                </button>
            </div>

            <div className="orders-table-container">
                <h2 className="title">Questions and Answers</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <table className="orders-table-container__table">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Parliamentary Year</th>
                            <th>Session</th>
                            <th>Date</th>
                            <th>File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.year}</td>
                                    <td>{item.session}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <a href={item.file} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFilePdf} style={{color: "#8b0000",}}  />
                                        </a>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={handleFirstPage} disabled={currentPage === 1}>
                        First
                    </button>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                    <button onClick={handleLastPage} disabled={currentPage === totalPages}>
                        Last
                    </button>
                </div>
            </div>

        </>
    );
};

export default QuestionsAnswers;
