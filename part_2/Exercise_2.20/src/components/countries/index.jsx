const Countries = ({ countries, handleClick }) => {
  return countries.map((country, i) => {
    return (
      <div key={i} style={{display:'flex', alignItems:"center"}} >
        <p >{country.name.common}</p>
        <button style={{width:'60px', height:'35px', fontSize:'12px', margin:'10px', alignContent:'center'}} onClick={()=> handleClick(country.name.common)}>Show</button>
      </div>
    );
  });
};

export default Countries;
