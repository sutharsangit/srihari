import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Pens from './pens';          // lowercase
import Notebooks from './Notebook'; // lowercase
import Accessories from './Accessories'; // lowercase


function App() {
  return (
    <Router>
      <header>
        <h1>Stationery Store</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pens">Pens</Link></li>
            <li><Link to="/Notebooks">Notebooks</Link></li>
            <li><Link to="/Accessories">Accessories</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pens" element={<Pens />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/Accessories" element={<Accessories />} />
      </Routes>
    </Router>
  );
}

export default App;