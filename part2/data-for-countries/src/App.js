import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import Country from "./Components/Country";
const App = () => {
  const [countries, setSountries] = useState([]);
  const [filt_name, setFilt_name] = useState("");

  const handleFilter = (event) => {
    setFilt_name(event.target.value);
  };

  const result = countries.filter((country) =>
    country.name.toLowerCase().includes(filt_name.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("Promise fulfilled");
      setSountries(response.data);
    });
  }, []);

  return (
    <div>
      <Filter filt_name={filt_name} handleFilter={handleFilter} />
      <Country data={result} />
    </div>
  );
};

export default App;
