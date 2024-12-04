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
    <form onSubmit={handleSubmit}>
      <h2>Create Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Bank ID"
        value={bankId}
        onChange={(e) => setBankId(e.target.value)}
        required
      />
      <button type="submit">Create Service</button>
    </form>
  );
}

export default CreateService;
