"use client";

import React, { useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState('Sri Lanka');

  // useEffect(() => {
  //     fetch(`http://api.ipstack.com/134.201.250.155?key=${process.env.NEXT_IP_API_KEY}`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  // }, []);
  return <div>{country}</div>;
}

export default CountryLookup;
