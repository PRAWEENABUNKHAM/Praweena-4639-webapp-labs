const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8082;

let ipAddress = null;

const fetchIpAddress = async () => {
  const response = await axios.get('https://httpbin.org/ip');
  ipAddress = response.data.origin;
  console.log(`IP address fetched: ${ipAddress}`);
};

app.get('/ip', async (req, res) => {
  try {
    if (!ipAddress) {
      await fetchIpAddress();
    }
    res.json({ ip: ipAddress, source: 'httpbin.org' });
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
    res.status(500).json({
      error: 'Failed to fetch IP address',
      message: error.message,
    });
  }
});

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  try {
    await fetchIpAddress();
  } catch (error) {
    console.error(`Failed to fetch IP at startup: ${error.message}`);
  }
};

startServer();