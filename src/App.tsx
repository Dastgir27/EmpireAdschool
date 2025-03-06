import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './views/Home/Home';
import './App.css';
import ContactPage from './views/Contact/Contact';
import Header from './views/common/Header';
import Footer from './views/common/Footer'
import './styles/fonts/fonts.css'


function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;