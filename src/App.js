import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import ExpertDashboard from './components/Expert/ExpertDashboard';
import UserDashboard from './components/User/UserDashboard';
import './App.css';

function App() {

  return (

    <div className="App">

      <Router>

        <Navbar />

          <Routes>

            <Route path="/" element={<Navigate to="/expert" />} />

            <Route path="/expert/*" element={<ExpertDashboard />} />

            <Route path="/user" element={<UserDashboard />} />

          </Routes>

      </Router>

    </div>
    
  );
}

export default App;
