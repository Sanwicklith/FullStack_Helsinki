import React, { useEffect, useState } from "react";

const Country = ({ countries }) => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API;
  const [weather, setWeather] = useState({});
  const [icons, setIcons] = useState({});

  const getWeather = async (city, countryName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      setWeather(prevWeather => ({ ...prevWeather, [countryName]: data }));
      setIcons(prevIcons => ({ ...prevIcons, [countryName]: iconUrl }));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    countries.forEach(country => {
      getWeather(country.capital[0], country.name.official);
    });
  }, [countries]);

  return countries.map((country, i) => {
    const languages = Object.values(country.languages);
    const countryWeather = weather[country.name.official];
    const iconUrl = icons[country.name.official];

    return (
      <div key={i}>
        <h2>{country.name.official}</h2>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <div>
          <h5>Languages:</h5>
          <ul>
            {languages.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={country.flags.png} alt={`Flag of ${country.name}`} style={{ width: '100px' }} />
        </div>
        {countryWeather && (
          <div className="weather">
            <h5>Weather in {country.capital[0]}:</h5>
            <p>Temperature: {countryWeather.main.temp}°C</p>
            <img src={iconUrl} alt="Weather icon" />
            <p>{countryWeather.weather[0].description}</p>
          </div>
        )}
      </div>
    );
  });
};

export default Country;
