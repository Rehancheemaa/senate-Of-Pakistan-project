import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HouseBusiness from './pages/HouseBusiness';
import SenateCommittees from './pages/SenateCommittees';
import Senators from './pages/Senators';
import About from './pages/About';
import MediaCentre from './pages/MediaCentre';
import SenateInvolved from './pages/SenateInvolved';
import Senatepublications from './pages/Senatepublications';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HouseBusiness" element={<HouseBusiness />} />
        <Route path="/SenateCommittees" element={<SenateCommittees />} />
        <Route path="/Senators" element={<Senators />} />
        <Route path="/About" element={<About />} />
        <Route path="/Senatepublications" element={<Senatepublications />} />
        <Route path="/MediaCentre" element={<MediaCentre />} />
        <Route path="/SenateInvolved" element={<SenateInvolved />} />
      </Routes>
    </Router>
  );
};

export default App;
