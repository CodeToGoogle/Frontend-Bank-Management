import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewServices() {
  const { bankId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(` ${process.env.REACT_APP_API_URL}/api/banks/${bankId}/services`)
      .then((response) => setServices(response.data))
      .catch((error) => console.error(error));
  }, [bankId]);

  return (
    <div>
      <h2>Services</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.serviceName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewServices;
