import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateBank from "./components/CreateBank";
import CreateBranch from "./components/CreateBranch";
import CreateService from "./components/CreateService";
import ViewBranches from "./components/ViewBranches";
import ViewServices from "./components/ViewServices";
import ViewBanks from "./components/ViewBanks";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bank Management System</h1>
        <nav>
          <ul>
            <li><Link to="/create-bank">Create Bank</Link></li>
            <li><Link to="/create-branch">Create Branch</Link></li>
            <li><Link to="/create-service">Create Service</Link></li>
            <li><Link to="/view-banks">View Banks</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create-bank" element={<CreateBank />} />
          <Route path="/create-branch" element={<CreateBranch />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/view-banks" element={<ViewBanks />} />
          <Route path="/view-branches/:bankId" element={<ViewBranches />} />
          <Route path="/view-services/:bankId" element={<ViewServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
