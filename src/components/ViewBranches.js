import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewBranches() {
  const { bankId } = useParams();
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    axios.get(` ${process.env.REACT_APP_API_URL}/api/banks/${bankId}/branches`)
      .then((response) => setBranches(response.data))
      .catch((error) => console.error(error));
  }, [bankId]);

  return (
    <div>
      <h2>Branches</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.id}</td>
              <td>{branch.name}</td>
              <td>{branch.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBranches;
