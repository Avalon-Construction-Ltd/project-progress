// client/src/components/ZohoData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ZohoData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/zoho-data');
        setData(response.data.data); // Adjust based on actual data structure
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Zoho CRM Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.Name}</li> // Adjust based on actual data structure
        ))}
      </ul>
    </div>
  );
};

export default ZohoData;
