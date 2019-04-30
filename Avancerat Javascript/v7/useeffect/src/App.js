import React, { useState, useEffect } from 'react';
import axios from 'axios';
const URL = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [countryList, updateCountryList] = useState(null);

  useEffect(() => {
    axios.get(URL).then(response => {

      updateCountryList(response.data);
    });
  }, []);
  //
  console.log(countryList);
  if (!countryList) {
    return <p>Loading countryList...</p>;
  }
  return (
    <>
    </>
  )
}
export default App;
