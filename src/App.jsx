import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './pages/About';
import Stock from './pages/Stock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Navbar/>
      <div id="content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
