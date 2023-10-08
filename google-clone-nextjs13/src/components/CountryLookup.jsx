"use client";

import React, { useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState('Sri Lanka');

  // useEffect(() => {
  //     // fetch user;s current location
  //     const fetchUserLocation = () => {
  //       if(navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           async (position) => {
  //             const {latitude , longitude} = position.coords;

  //             try {
  //               const response = await fetch(
  //                 `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${NEXT_IP_API_KEY}`

  //               );
  //               const data = await response.json();

  //               if (data.results.length > 0) {
  //                 // Assuming that the country is in the first result
  //                 const userCountry = data.results[0].components.country;
  //                 setCountry(userCountry);                
  //               } else {
  //                 console.error("Geolocation is not supported in this browser.");
  //               }
  //             } catch (error) {
  //               console.log(error);
  //             }
  //           }
  //         )
  //       }
  //     }
  //     fetchUserLocation();
  // }, []);
  return <div>{country}</div>;
}

export default CountryLookup;
