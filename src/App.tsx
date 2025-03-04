import React from 'react';
import './App.css';
import './styles/fonts/fonts.css'
import "react-datepicker/dist/react-datepicker.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "./views/Adschool/Main";
import ContactPage from "./views/Adschool/ContactUs";

function App() {
  return (
      <div className={"my-3"}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;