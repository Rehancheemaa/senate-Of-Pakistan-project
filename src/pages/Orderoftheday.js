import React, { useState } from "react";
import "./Orderoftheday.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Orderoftheday = () => {
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

        { id: 11, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 19, 2024", file: "file1.pdf" },
        { id: 12, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 16, 2024", file: "file2.pdf" },
        { id: 13, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 13, 2024", file: "file3.pdf" },
        { id: 14, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 12, 2024", file: "file4.pdf" },
        { id: 15, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 11, 2024", file: "file5.pdf" },
        { id: 16, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 4, 2024", file: "file6.pdf" },
        { id: 17, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 1, 2024", file: "file7.pdf" },
        { id: 18, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 29, 2024", file: "file8.pdf" },
        { id: 19, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 28, 2024", file: "file9.pdf" },
        { id: 20, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 25, 2024", file: "file10.pdf" },

        { id: 21, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 19, 2024", file: "file1.pdf" },
        { id: 22, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 16, 2024", file: "file2.pdf" },
        { id: 23, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 13, 2024", file: "file3.pdf" },
        { id: 24, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 12, 2024", file: "file4.pdf" },
        { id: 25, year: "Twenty-Second Parliamentary Year 2024-2025", session: "344 Session", date: "December 11, 2024", file: "file5.pdf" },
        { id: 26, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 4, 2024", file: "file6.pdf" },
        { id: 27, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "November 1, 2024", file: "file7.pdf" },
        { id: 28, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 29, 2024", file: "file8.pdf" },
        { id: 29, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 28, 2024", file: "file9.pdf" },
        { id: 30, year: "Twenty-Second Parliamentary Year 2024-2025", session: "343 Session", date: "October 25, 2024", file: "file10.pdf" },
    ];

    const filteredData = data.filter((item) =>
        item.year.toLowerCase().includes(search.toLowerCase()) ||
        item.session.toLowerCase().includes(search.toLowerCase()) ||
        item.date.toLowerCase().includes(search.toLowerCase())
    );

    // Calculate the data to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
                    className={activeButton === 'ProvisionalCalendar' ? 'active' : ''}
                >
                    Provisional Calendar
                </button>
                |
                <button
                    onClick={() => goTo('/SummoningPage', 'SummoningPage')}
                    className={activeButton === 'SummoningPage' ? 'active' : ''}
                >
                    Summoning / Prorogation
                </button>
                |
                <button
                    onClick={() => goTo('/Orderoftheday', 'Orderoftheday')}
                    className={activeButton === 'Orderoftheday' ? 'active' : ''}
                >
                    Orders of the Day
                </button>
                |
                <button
                    onClick={() => goTo('/QuestionsAnswers', 'QuestionsAnswersAnswers')}
                    className={activeButton === 'QuestionsAnswersAnswers' ? 'active' : ''}
                >
                    Questions/Answers
                </button>
                |
                <button
                    onClick={() => goTo('/hansards', 'Hansards')}
                    className={activeButton === 'Hansards' ? 'active' : ''}
                >
                    Hansards
                </button>
                |
                <button
                    onClick={() => goTo('/acts', 'ActsOfParliament')}
                    className={activeButton === 'ActsOfParliament' ? 'active' : ''}
                >
                    Acts of Parliament
                </button>
                |
                <button
                    onClick={() => goTo('/resolutions', 'Resolutions')}
                    className={activeButton === 'Resolutions' ? 'active' : ''}
                >
                    Resolutions
                </button>
                |
                <button
                    onClick={() => goTo('/bills', 'Bills')}
                    className={activeButton === 'Bills' ? 'active' : ''}
                >
                    Bills
                </button>
                |
                <button
                    onClick={() => goTo('/amendments', 'ConstitutionalAmendments')}
                    className={activeButton === 'ConstitutionalAmendments' ? 'active' : ''}
                >
                    Constitutional Amendments
                </button>
                |
                <button
                    onClick={() => goTo('/webcasting', 'WebCasting')}
                    className={activeButton === 'WebCasting' ? 'active' : ''}
                >
                    Web Casting
                </button>
                |
                <button
                    onClick={() => goTo('/ordinances', 'Ordinances')}
                    className={activeButton === 'Ordinances' ? 'active' : ''}
                >
                    Ordinances
                </button>
            </div>

            <div className="orders-table-container">
                <h1>Orders of the Day</h1>
                <p>
                    Orders of the Day constitute business of the House to be transacted on a particular day. This schedule is prepared by the Secretary. Government business is arranged by the Secretary in such a manner as the Leader of the House or the Minister for Parliamentary Affairs or any other Minister authorized by the Leader of the House may intimate. Orders of the Day for Private Members’ Day are arranged and prepared by the Secretary Senate out of business given notices of by Private Members. Here we find the day’s schedule for Senate sittings.                </p>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <table>
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

export default Orderoftheday;
