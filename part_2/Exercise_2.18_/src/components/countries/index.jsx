

const Countries = ({ countries }) => {
  return countries.map((country, i) => {
    return <p key={i}>{country.name.common}</p>;
  });
};

export default Countries;
