import React, { useState } from "react";
import axios from "axios";

function CreateBank() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(` ${process.env.REACT_APP_API_URL}/api/banks`, {
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
    <form onSubmit={handleSubmit}>
      <h2>Create Bank</h2>
      <input
        type="text"
        placeholder="Bank Name"
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
      <button type="submit">Create Bank</button>
    </form>
  );
}

export default CreateBank;
