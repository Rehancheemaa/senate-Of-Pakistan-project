import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./SummoningTable.css";
import { useNavigate } from "react-router-dom";

const SummoningPage = () => {
    const [data, setData] = useState([]);
    const [activeButton, setActiveButton] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const goTo = (path, buttonName) => {
        setActiveButton(buttonName); // Set active button
        navigate(path);
    };

    // Simulated data fetch with full dataset
    useEffect(() => {
        const fetchData = () => {
            const mockData = [
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "344 Session",
                    summonedOn: "11-12-2024",
                    proroguedOn: "19-12-2024",
                    actualSittings: "-",
                    workingDays: "-"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "343 Session",
                    summonedOn: "17-10-2024",
                    proroguedOn: "04-11-2024",
                    actualSittings: "10",
                    workingDays: "19"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "342 Session",
                    summonedOn: "27-08-2024",
                    proroguedOn: "16-09-2024",
                    actualSittings: "11",
                    workingDays: "21"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "341 Session",
                    summonedOn: "05-08-2024",
                    proroguedOn: "09-08-2024",
                    actualSittings: "3",
                    workingDays: "4"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "340 Session",
                    summonedOn: "04-07-2024",
                    proroguedOn: "05-07-2024",
                    actualSittings: "2",
                    workingDays: "2"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "339 Session",
                    summonedOn: "07-06-2024",
                    proroguedOn: "25-06-2024",
                    actualSittings: "10",
                    workingDays: "18"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "338 Session",
                    summonedOn: "21-05-2024",
                    proroguedOn: "24-05-2024",
                    actualSittings: "3",
                    workingDays: "4"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "337 Session",
                    summonedOn: "25-04-2024",
                    proroguedOn: "29-04-2024",
                    actualSittings: "3",
                    workingDays: "5"
                },
                {
                    parliamentaryYear: "Twenty-Second Parliamentary Year 2024-2025",
                    sessionNo: "336 Session",
                    summonedOn: "09-04-2024",
                    proroguedOn: "09-04-2024",
                    actualSittings: "1",
                    workingDays: "1"
                }
            ];
            setData(mockData);
        };
        fetchData();
    }, []);

    const filteredData = data.filter((row) =>
        row.sessionNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

            <div className="table-container">
                <h2 className="title">Summoning and Prorogation of the Senate Sessions</h2>
                <input
                    type="text"
                    placeholder="Search by Session Number"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {/* Table Layout */}
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parliamentary Year</th>
                            <th>Session No.</th>
                            <th>Summoned On</th>
                            <th>Prorogued On</th>
                            <th>Actual Sittings</th>
                            <th>Working Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                <td data-label="#"> {index + 1}</td> {/* Dynamic Serial Number */}
                                <td data-label="Parliamentary Year">{row.parliamentaryYear}</td>
                                <td data-label="Session No.">{row.sessionNo}</td>
                                <td data-label="Summoned On">{row.summonedOn}</td>
                                <td data-label="Prorogued On">{row.proroguedOn}</td>
                                <td data-label="Actual Sittings">{row.actualSittings}</td>
                                <td data-label="Working Days">{row.workingDays}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Card Layout for Smaller Screens */}
                <div className="card-layout">
                    {filteredData.map((row, index) => (
                        <div className="card" key={index}>
                            <div className="card-row">
                                <div className="card-label">S. No</div>
                                <div className="card-value">{index + 1}</div> {/* Dynamic Serial Number */}
                            </div>
                            <div className="card-row">
                                <div className="card-label">Parliamentary Year</div>
                                <div className="card-value">{row.parliamentaryYear}</div>
                            </div>
                            <div className="card-row">
                                <div className="card-label">Session No</div>
                                <div className="card-value">{row.sessionNo}</div>
                            </div>
                            <div className="card-row">
                                <div className="card-label">Summoned On</div>
                                <div className="card-value">{row.summonedOn}</div>
                            </div>
                            <div className="card-row">
                                <div className="card-label">Prorogued On</div>
                                <div className="card-value">{row.proroguedOn}</div>
                            </div>
                            <div className="card-row">
                                <div className="card-label">Actual Sittings</div>
                                <div className="card-value">{row.actualSittings}</div>
                            </div>
                            <div className="card-row">
                                <div className="card-label">Working Days</div>
                                <div className="card-value">{row.workingDays}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SummoningPage;
