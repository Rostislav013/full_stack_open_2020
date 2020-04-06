import React from "react";

const Country = ({ data }) => {
  return (
    <div>
      {data.length === 1
        ? data.map((el) => (
            <div key={el.numericCode}>
              <h1>{el.name}</h1>
              <p>Capital: {el.capital}</p>
              <p>Population: {el.population}</p>
              <h1>Spoken language(s)</h1>
              <ul>
                {el.languages.map((lang, i) => (
                  <li key={i}>{lang.name}</li>
                ))}
                </ul>
                <img src={el.flag} alt={el.name} style={{width: "150px", border:"1px solid black"}}/>
            </div>
          ))
        : data.length > 10
        ? "Too many matches, specify another filter"
        : data.map((el) => <h1 key={el.numericCode}>{el.name}</h1>)}
    </div>
  );
};
export default Country;
