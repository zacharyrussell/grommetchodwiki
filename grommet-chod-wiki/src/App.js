import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './homepage'; // Your main page component
import CreaturesPage from './creatures'; // Your creatures page component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1 className="center-title">Grommet Chod</h1>
          <div className="nav-options">
            {/* Use React Router's Link instead of <a> */}
            <Link to="/">About</Link>
            <Link to="/creatures">Creatures</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/creatures" element={<CreaturesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
