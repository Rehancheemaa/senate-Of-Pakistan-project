import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HouseBusiness from './pages/HouseBusiness';
import SenateCommittees from './pages/SenateCommittees';
import Senators from './pages/Senators';
import About from './pages/About';
import Publications from './pages/Senatepublications'; // Make sure the file name matches the import
import MediaCentre from './pages/MediaCentre';
import SenateInvolved from './pages/SenateInvolved';
import ProvisionalCalendar from './pages/provisionalcalendar';
import SummoningPage from './pages/SummoningPage';
import Orderoftheday from './pages/Orderoftheday';
import QuestionsAnswers from './pages/QuestionsAnswers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HouseBusiness" element={<HouseBusiness />} />
        <Route path="/provisionalcalendar" element={<ProvisionalCalendar />} />
        <Route path="/SummoningPage" element={<SummoningPage />} />
        <Route path="/Orderoftheday" element={<Orderoftheday />} />
        <Route path="/QuestionsAnswers" element={<QuestionsAnswers />} />

        <Route path="/SenateCommittees" element={<SenateCommittees />} />
        <Route path="/Senators" element={<Senators />} />
        <Route path="/About" element={<About />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/MediaCentre" element={<MediaCentre />} />
        <Route path="/SenateInvolved" element={<SenateInvolved />} />
      </Routes>
    </Router>
  );
};

export default App;
