import React from "react";
import Header from "../components/Header";
import CommitteeTable from "../components/CommitteeTable";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-container">


                {/* Carousel */}
                <div className="container mt-4">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://www.senate.gov.pk/uploads/images/news_pic/1734700505_136.jpg"
                                    className="d-block w-100"
                                    alt="First Slide"
                                />
                                <div className="carousel-caption d-block">
                                    <p>
                                        Chairman Senate, Syed Yousaf Raza Gilani Presiding over a
                                        Meeting of the Board of Governors of the Pakistan Institute
                                        for Parliamentary Services (PIPS) In Islamabad
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.senate.gov.pk/uploads/images/news_pic/1734947654_441.jpg"
                                    className="d-block w-100"
                                    alt="Second Slide"
                                />
                                <div className="carousel-caption d-block">
                                    <p>
                                        Senator Zeeshan Khanzada presiding over a meeting of the
                                        Senate Standing Committee on Overseas Pakistanis and Human
                                        Resource Development at Parliament House Islamabad
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.senate.gov.pk/uploads/images/news_pic/1735318715_234.jpg"
                                    className="d-block w-100"
                                    alt="Third Slide"
                                />
                                <div className="carousel-caption d-block">
                                    <p>
                                        Senator Saleem Mandviwalla Chairman Senate 
                                        Standing Committee on Finance and Revenue 
                                        presiding over a meeting of the committee at Parliament House Islamabad
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                {/* Main Container */}
                <div class="container">
                    <div class="row">
                        <p class="text-muted">
                            Senate of Pakistan is the Upper House of the Parliament. Being the House of the Federation, the
                            Senate of Pakistan gives equal representation to all the federating units in order to promote
                            national cohesion and harmony.
                        </p>
                        <div class="main-content">
                            <div class="row">
                                <div class="section">
                                    <h2 class="title">Governance of the Senate</h2>
                                    <img src="https://www.app.com.pk/wp-content/uploads/2024/02/senate_pakistan_cover-1024x688.jpeg" alt="Governance of the Senate" class="image" />
                                    <br/>
                                    <p>
                                        Chairman Senate, Finance Committee, Business Advisory Committee and Secretary Senate are collectively
                                        responsible for the Senate Administration.
                                    </p>
                                    <ul class="list">
                                        <li class="list-item"><a href="/senate-administration" target="_blank">Senate Administration</a></li>
                                        <li class="list-item"><a href="/financial-information" target="_blank">Financial Information</a></li>
                                        <li class="list-item"><a href="/senate-secretariat" target="_blank">Senate Secretariat</a></li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="title">The Work of the Senate</h2>
                                    <img src="https://www.senate.gov.pk/en/images/fos.png" alt="Governance of the Senate" class="image" />
                                    <br/>
                                    <p>
                                        The Senate is the second chamber of the Parliament. It is independent from, and complements the work
                                        of, the National Assembly.
                                    </p>
                                    <ul class="list">
                                        <li class="list-item"><a href="/role-of-senate" target="_blank">Role of Senate</a></li>
                                        <li class="list-item"><a href="/legislation" target="_blank">Legislation</a></li>
                                        <li class="list-item"><a href="/accountability" target="_blank">Accountability / Oversight of the Executive</a></li>
                                        <li class="list-item"><a href="/representation" target="_blank">Representation of Federating Units</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="section">
                                    <h2 class="title">The Chairman</h2>
                                    <img src="https://newsimage.radio.gov.pk/20240424/15039440651713951605.jpg" alt="Governance of the Senate" class="image" />
                                    <br/>
                                    <p>Understand the role, history and current activities of the Chairman.</p>
                                    <ul class="list">
                                        <li class="list-item"><a href="/chairman" target="_blank">The Chairman</a></li>
                                        <li class="list-item"><a href="/role-of-chairman" target="_blank">Role of the Chairman</a></li>
                                        <li class="list-item"><a href="/press-releases" target="_blank">Press Releases of the Chair</a></li>
                                        <li class="list-item"><a href="/rulings-of-chair" target="_blank">Rulings of the Chair</a></li>
                                        <li class="list-item"><a href="/picture-gallery" target="_blank">Picture Gallery of the Chair</a></li>
                                    </ul>

                                </div>

                                <div class="section">
                                    <h2 class="title">Members of the Senate</h2>
                                    <img src="https://i.tribune.com.pk/media/images/senate-app-file1705238293-0/senate-app-file1705238293-0.jpg" alt="Governance of the Senate" class="image" />
                                    <br/>
                                    <p>Members of Senate are elected to represent, defend and promote national interests.</p>
                                    <ul class="list">
                                        <li class="list-item"><a href="/senators-list" target="_blank">List of Senators</a></li>
                                        <li class="list-item"><a href="/attendance-house" target="_blank">Attendance of Members (House)</a></li>
                                        <li class="list-item"><a href="/attendance-committee" target="_blank">Attendance of Members (Committee)</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>


                        <div class="sidebar">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Highlights</h3>
                                    <ul class="list-unstyled">
                                        <li><a href="/orders-of-day" target="_blank">Perform for Drafting of Private Member's Bills</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Quick Links</h3>
                                    <ul class="list-unstyled">
                                        <li><a href="/orders-of-day" target="_blank">Orders of Day</a></li>
                                        <li><a href="/QuestionsAnswers-answers" target="_blank">QuestionsAnswers and Answers</a></li>
                                        <li><a href="/house-debates" target="_blank">Hansards/House Debates</a></li>
                                        <li><a href="/bills" target="_blank">Bills</a></li>
                                        <li><a href="/acts" target="_blank">Acts</a></li>
                                        <li><a href="/resolutions" target="_blank">Resolutions</a></li>
                                        <li><a href="/daily-journals" target="_blank">Daily Journals</a></li>
                                        <li><a href="/senate-library" target="_blank">Senate Library</a></li>
                                        <li><a href="/faqs" target="_blank">FAQs</a></li>
                                        <li><a href="/contact-us" target="_blank">Write to Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Get Involved</h3>
                                    <ul class="list-unstyled">
                                        <li><a href="/public-petition" target="_blank">Public Petition</a></li>
                                        <li><a href="/virtual-tour" target="_blank">Virtual Tour</a></li>
                                        <li><a href="/when-in-senate" target="_blank">When in Senate</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Parliamentary Resources</h3>
                                    <ul class="list-unstyled">
                                        <li><a href="/asian-parliamentary-assembly" target="_blank">Asian Parliamentary Assembly</a></li>
                                        <li><a href="/inter-parliamentary-union" target="_blank">Inter-Parliamentary Union</a></li>
                                        <li><a href="/commonwealth-parliamentary-association" target="_blank">Commonwealth Parliamentary Association</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Information Office</h3>
                                    <p>
                                        The Senate Information Office provides information on the work, history and membership of the Senate.
                                    </p>
                                    <p>
                                        Telephone: +92-51-9022022
                                        <br />
                                        Email: <a href="mailto:info@senate.gov.pk">info@senate.gov.pk</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CommitteeTable */}
                <CommitteeTable />

            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
