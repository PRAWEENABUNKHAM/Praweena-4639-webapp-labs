const axios = require('axios');

const API_KEY = '27d9a4aaa00d4c32899134630260610';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { key: API_KEY, q: city },
    });
    const { location, current } = response.data;
    console.log(`Current temperature in ${location.name} is ${current.temp_c}°C`);
    console.log(`Weather condition: ${current.condition.text}`);
  } catch (error) {
    if (error.response) {
      const msg = error.response.data?.error?.message || 'Unknown API error';
      console.error(`Error: ${msg}`);
    } else if (error.request) {
      console.error('Error: Network error. Please check your internet connection.');
    } else {
      console.error(`Error: ${error.message}`);
    }
    process.exit(1);
  }
};

const city = process.argv.slice(2).join(' ').trim();

if (!city) {
  console.error('Error: Please provide city name');
  console.error('Usage: node weather.js <city_name>');
  console.error("Example: node weather.js 'Khon Kaen'");
  console.error('Note: Use quotes for city names with spaces');
  process.exit(1);
}

getWeather(city);