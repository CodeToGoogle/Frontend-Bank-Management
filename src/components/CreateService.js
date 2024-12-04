import React, { useState } from "react";
import axios from "axios";

function CreateService() {
  const [serviceName, setServiceName] = useState("");
  const [bankId, setBankId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( `${process.env.REACT_APP_API_URL}/api/services`, {
        serviceName,
        bank: { id: bankId },
      });
      alert("Service created successfully: " + response.data.serviceName);
    } catch (error) {
      console.error(error);
      alert("Error creating service.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  style={{
    display: "flex", // Enables flexbox
    flexDirection: "column", // Aligns children vertically
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    height: "100vh", // Full viewport height
    margin: "0", // Resets default margin
  }}
>
  <h2 style={{ marginBottom: "20px", color: "#333", textAlign: "center" }}>
    Create Service
  </h2>
  <input
    type="text"
    placeholder="Service Name"
    value={serviceName}
    onChange={(e) => setServiceName(e.target.value)}
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
    Create Service
  </button>
</form>

  );
}

export default CreateService;
