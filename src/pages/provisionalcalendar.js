import React, { useState } from 'react';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./provisionalcalendar.css"; // Separate CSS for styling

const calendarData = [
    { session: "336th Session", summoning: "09-04-2024 (Tuesday)", prorogation: "09-04-2024 (Tuesday)", days: "01 day" },
    { session: "337th Session", summoning: "25-04-2024 (Thursday)", prorogation: "29-04-2024 (Monday)", days: "05 days" },
    { session: "338th Session", summoning: "21-05-2024 (Tuesday)", prorogation: "24-05-2024 (Friday)", days: "04 days" },
    { session: "339th Session (Budget Session)", summoning: "07-06-2024 (Friday)", prorogation: "21-06-2024 (Friday)", days: "15 days" },
    { session: "340th Session", summoning: "08-07-2024 (Monday)", prorogation: "19-07-2024 (Friday)", days: "12 days" },
    { session: "341st Session", summoning: "19-08-2024 (Monday)", prorogation: "30-08-2024 (Friday)", days: "12 days" },
    { session: "342nd Session", summoning: "09-09-2024 (Monday)", prorogation: "20-09-2024 (Friday)", days: "12 days" },
    { session: "343rd Session", summoning: "21-10-2024 (Monday)", prorogation: "30-10-2024 (Wednesday)", days: "10 days" },
    { session: "344th Session", summoning: "15-11-2024 (Friday)", prorogation: "22-11-2024 (Friday)", days: "08 days" },
    { session: "345th Session", summoning: "09-12-2024 (Monday)", prorogation: "20-12-2024 (Friday)", days: "12 days" },
    { session: "346th Session", summoning: "06-01-2025 (Monday)", prorogation: "13-01-2025 (Monday)", days: "08 days" },
    { session: "347th Session", summoning: "10-02-2025 (Monday)", prorogation: "17-02-2025 (Monday)", days: "08 days" },
    { session: "348th Session", summoning: "03-03-2025 (Monday)", prorogation: "10-03-2025 (Monday)", days: "08 days" },
];

const ProvisionalCalendar = () => {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();
    const totalDays = calendarData.reduce((acc, curr) => acc + parseInt(curr.days), 0);

    const goTo = (path, buttonName) => {
        setActiveButton(buttonName); // Set active button
        navigate(path);
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
            
            <div className="provisional-calendar">
                <header>
                    <h1>Provisional Calendar 2024-2025</h1>
                    <p>(12th March, 2024 to 11th March, 2025)</p>
                    <p>Duly approved by the Federal Cabinet</p>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Session Number</th>
                            <th>Date of Summoning</th>
                            <th>Date of Prorogation</th>
                            <th>Total Working Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendarData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.session}</td>
                                <td>{item.summoning}</td>
                                <td>{item.prorogation}</td>
                                <td>{item.days}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} style={{ textAlign: "right" }}>
                                Total:
                            </td>
                            <td>{totalDays} days</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProvisionalCalendar;
