import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewBanks() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    // Fetch all banks from the backend
    axios.get(`${process.env.REACT_APP_API_URL}/api/banks`)
      .then((response) => setBanks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Banks</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank) => (
            <tr key={bank.id}>
              <td>{bank.id}</td>
              <td>{bank.name}</td>
              <td>{bank.city}</td>
              <td>
                <Link to={`/view-branches/${bank.id}`}>View Branches</Link>{" "}
                | <Link to={`/view-services/${bank.id}`}>View Services</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBanks;
