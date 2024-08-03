import axios from 'axios';

const getCountries = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data; // Axios already parses the response as JSON
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default getCountries;
