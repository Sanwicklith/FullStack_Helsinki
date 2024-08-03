const Country = ({ countries }) => {
  return countries.map((country, i) => {
    const languages = Object.values(country.languages)
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
      </div>
    );
  });
};

export default Country;
