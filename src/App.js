import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateBank from "./components/CreateBank";
import CreateBranch from "./components/CreateBranch";
import CreateService from "./components/CreateService";
import ViewBranches from "./components/ViewBranches";
import ViewServices from "./components/ViewServices";
import ViewBanks from "./components/ViewBanks";
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{color: "black"}}>Bank Management System</h1>
        <nav>
        <ul
  style={{
    display: "flex", // Flex row
    listStyleType: "none", // Remove bullets
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Align items vertically
    padding: "0", // Remove default padding
    margin: "20px 0", // Add margin above and below
  }}
>
  <li style={{ margin: "0 20px" }}> {/* Space between items */}
    <Link to="/create-bank" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
      Create Bank
    </Link>
  </li>
  <li style={{ margin: "0 20px" }}>
    <Link to="/create-branch" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
      Create Branch
    </Link>
  </li>
  <li style={{ margin: "0 20px" }}>
    <Link to="/create-service" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
      Create Service
    </Link>
  </li>
  <li style={{ margin: "0 20px" }}>
    <Link to="/view-banks" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
      View Banks
    </Link>
  </li>
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
