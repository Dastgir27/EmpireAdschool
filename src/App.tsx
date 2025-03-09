import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './views/Home/Home';
import './App.css';
import ContactPage from './views/Contact/Contact';
import Header from './views/common/Header';
import Footer from './views/common/Footer'
import './styles/fonts/fonts.css'
import Visualise from './views/courses/Visualise';
import DesignMastery from './views/courses/DesignMastery';
import CreativeMastery from './views/courses/CreativeMastery';
import PlacementPolicy from './views/PlacementPolicy'

function App() {
  return (
    <div>
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/creative-thinking" element={<Visualise />} />
        <Route path="/design-mastery" element={<DesignMastery />} />
        <Route path="/complete-creative-mastery" element={<CreativeMastery />} />
        <Route path="/placement-policy" element={<PlacementPolicy />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;