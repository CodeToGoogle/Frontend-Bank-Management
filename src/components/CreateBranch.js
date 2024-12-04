import React, { useState } from "react";
import axios from "axios";

function CreateBranch() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [bankId, setBankId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/branches`, {
        name,
        city,
        bank: { id: bankId },
      });
      alert("Branch created successfully: " + response.data.name);
    } catch (error) {
      console.error(error);
      alert("Error creating branch.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Branch</h2>
      <input
        type="text"
        placeholder="Branch Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Bank ID"
        value={bankId}
        onChange={(e) => setBankId(e.target.value)}
        required
      />
      <button type="submit">Create Branch</button>
    </form>
  );
}

export default CreateBranch;
