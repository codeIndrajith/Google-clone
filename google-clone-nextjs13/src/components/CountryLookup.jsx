"use client";

import React, {  useState } from 'react'


function CountryLookup() {
    const [country , setCountry] = useState("Sri Lanka");

    // useEffect(() => {
    //     we need to add ip api key and fetch the data.
    // },[])
  return (
    <div>{country}</div>
  )
}

export default CountryLookup