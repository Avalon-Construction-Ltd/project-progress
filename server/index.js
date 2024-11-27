// server/index.js
const express = require('express');
const axios = require('../node_modules/axios/index.d.cts');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define a route to fetch data from Zoho CRM
app.get('/api/zoho-data', async (req, res) => {
  try {
    const response = await axios.get('https://www.zohoapis.com/crm/v2/Leads', {
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from Zoho CRM');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
