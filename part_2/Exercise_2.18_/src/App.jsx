import { useEffect, useState } from 'react';
import './App.css';
import getCountries from './services/countries';
import Countries from './components/countries';
import Country from './components/country';

function App() {
  const [countryList, setCountryList] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');

  const url = 'https://studies.cs.helsinki.fi/restcountries/api/all';

  useEffect(() => {
    const fetchCountries = async () => {
      const objArray = await getCountries(url);
      setCountryList(objArray);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countryList.filter(country => {
    return country.name.common.toLowerCase().includes(countryFilter.toLowerCase());
  });

  const handleChange = e => {
    setCountryFilter(e.target.value);
  };

  const display = () => {
    console.log(filteredCountries.length);
    switch (filteredCountries.length) {
      case 0:
        return <p>No countries found</p>;
      case 1:
        return <Country countries={filteredCountries} />;

      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return <Countries countries={filteredCountries} />;
      default:
        return <p>Too many matches, specify another filter</p>;
    }
  };

  return (
    <>
      <div>
        Find Countries: <input onChange={handleChange} value={countryFilter} />
      </div>
      <div>{display()}</div>
    </>
  );
}

export default App;
