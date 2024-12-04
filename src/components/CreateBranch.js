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
    <form
    onSubmit={handleSubmit}
    style={{
      display: "flex", // Enables flexbox
      flexDirection: "column", // Stacks items vertically
      justifyContent: "center", // Centers vertically
      alignItems: "center", // Centers horizontally
      height: "100vh", // Full viewport height
      margin: "0", // No default margin
    }}
  >
    <h2 style={{ marginBottom: "20px", color: "#333", textAlign: "center" }}>
      Create Branch
    </h2>
    <input
      type="text"
      placeholder="Branch Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      style={{
        width: "300px",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
    <input
      type="text"
      placeholder="City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      required
      style={{
        width: "300px",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
    <input
      type="number"
      placeholder="Bank ID"
      value={bankId}
      onChange={(e) => setBankId(e.target.value)}
      required
      style={{
        width: "300px",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
    <button
      type="submit"
      style={{
        width: "150px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Create Branch
    </button>
  </form>
  
  );
}

export default CreateBranch;
