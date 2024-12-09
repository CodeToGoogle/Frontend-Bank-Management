import React, { useState } from "react";
import axios from "axios";

function CreateBank() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/banks`, {
        name,
        city,
      });
      alert("Bank created successfully: " + response.data.name);
    } catch (error) {
      console.error(error);
      alert("Error creating bank.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  style={{
    display: "flex", // Enable flexbox
    flexDirection: "column", // Stack items vertically
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    height: "100vh", // Full viewport height to center the form
    margin: "0", // Remove default margin
  }}
>
  <h2 style={{ marginBottom: "20px", color: "#333", textAlign: "center" }}>
    Create Bank
  </h2>
  <input
    type="text"
    placeholder="Bank Name"
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
    Create Bank
  </button>
</form>

  );
}

export default CreateBank;
