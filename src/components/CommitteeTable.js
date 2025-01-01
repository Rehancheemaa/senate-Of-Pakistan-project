import React, { useState } from "react";
import "./CommitteeTable.css";


// Sample data for each section
const data = {
    whatsOn: [
        {
            srNo: 1,
            committeeName: "Poverty Alleviation & Social Safety",
            notice: "(Postponement Notice)",
            date: "December 26, 2024",
            time: "02:00",
            venue: "BISP, ISB"
        },
        {
            srNo: 2,
            committeeName: "Finance and Revenue",
            notice: "(Notice)",
            date: "December 26, 2024",
            time: "02:00",
            venue: "Committee Room 1"
        }
    ],
    senateNews: [
        {
            imgSrc: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
            alt: "Senator Saleem Mandviwalla",
            text: "Senator Saleem Mandviwalla Chairman Senate Standing Committee on Finance and Revenue presiding over a meeting of the committee at Parliament House Islamabad...",
            link: "/"
        },
        {
            imgSrc: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
            alt: "Senator Saifullah Abro",
            text: "Senator Saifullah Abro, Chairman Senate Standing Committee on Economic Affairs presiding over a meeting of the committee at Parliament House Islamabad...",
            link: "/"
        },
        {
            imgSrc: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
            alt: "Senator Zeeshan Khanzada",
            text: "Senator Zeeshan Khanzada presiding over a meeting of the Senate Standing Committee on Overseas Pakistanis and Human Resource Development at Parliament...",
            link: "/"
        },
        {
            imgSrc: "https://www.senate.gov.pk/uploads/images/news_pic/1735218316_288.jpg",
            alt: "Chairman Senate Syed Yousaf Raza Gilani",
            text: "Chairman Senate, Syed Yousaf Raza Gilani Presiding over a Meeting of the Board of Governors of the Pakistan Institute for Parliamentary Services...",
            link: "/"
        }
    ],
    publicPetitions: {
        text: "Public petitions may be presented on any matter connected with the business pending before the House or a Committee, or any matter of general public interest which is primarily the concern of the Government, provided that it is not one which falls within the cognizance of a court of law or tribunal, and it shall not directly relate to a matter pending before any court or other authority performing judicial or quasi-judicial functions.",
        links: [
            { text: "File a Petition", link: "/" },
            { text: "Track a Petition", link: "/" }
        ]
    }
};

// Reusable component for "What's On" content
const WhatsOnContent = ({ data }) => (
    <div className="content">
        <h3>Thursday, 26 December 2024</h3>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Committee Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                </tr>
            </thead>
            <tbody>
                {data.whatsOn.map((item, index) => (
                    <tr key={index}>
                        <td data-label="Sr.No">{item.srNo}</td>
                        <td data-label="Committee Name">
                            {item.committeeName}
                            <a href="/"  className="notice">{item.notice}</a>
                        </td>
                        <td data-label="Date">{item.date}</td>
                        <td data-label="Time">{item.time}</td>
                        <td data-label="Venue">{item.venue}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="read-more">
            <a href="/">View More...</a>
        </div>
    </div>
);

// Reusable component for "Senate News" content
const SenateNewsContent = ({ data }) => (
    <div className="content">
        <div className="news-grid">
            {data.senateNews.map((news, index) => (
                <div className="news-item" key={index}>
                    <img src={news.imgSrc} alt={news.alt} />
                    <p>
                        {news.text} <a href={news.link}>Read More</a>
                    </p>
                </div>
            ))}
        </div>
        <div className="view-more">
            <a href="/">View More...</a>
        </div>
    </div>
);

// Reusable component for "Public Petitions" content
const PublicPetitionsContent = ({ data }) => (
    <div className="content">
        <p>{data.publicPetitions.text}</p>
        <div className="petition-links">
            {data.publicPetitions.links.map((link, index) => (
                <span key={index}>
                    <a href={link.link}>{link.text}</a>
                    {index < data.publicPetitions.links.length - 1 && " | "}
                </span>
            ))}
        </div>
    </div>
);

const CommitteeTable = () => {
    const [activeTab, setActiveTab] = useState("WhatsOn");

    return (
        <div className="container">
            <div className="tabs">
                <button
                    className={activeTab === "WhatsOn" ? "active" : ""}
                    onClick={() => setActiveTab("WhatsOn")}
                >
                    What's On
                </button>
                <button
                    className={activeTab === "SenateNews" ? "active" : ""}
                    onClick={() => setActiveTab("SenateNews")}
                >
                    Senate News
                </button>
                <button
                    className={activeTab === "PublicPetitions" ? "active" : ""}
                    onClick={() => setActiveTab("PublicPetitions")}
                >
                    Public Petitions
                </button>
            </div>
            <div className="tab-content">
                {activeTab === "WhatsOn" && <WhatsOnContent data={data} />}
                {activeTab === "SenateNews" && <SenateNewsContent data={data} />}
                {activeTab === "PublicPetitions" && <PublicPetitionsContent data={data} />}
            </div>
        </div>
    );
};

export default CommitteeTable;
