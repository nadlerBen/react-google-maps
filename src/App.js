import './App.css';
import React, { useState, useEffect } from 'react';

import GoogleMap from './components/GoogleMap';
import LocationCard from './components/LocationCard';

function App() {

  const apiKey = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk';
  const ipDataKey = 'dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e';
  const [city, setCity] = useState( '' );
  const [country, setCountry] = useState( '' );
  const [latitude, setLatitude] = useState( '' );
  const [longitude, setLongitude] = useState( '' );

  useEffect( () => {
    let request = new XMLHttpRequest();
    request.open( 'GET', `https://api.ipdata.co/?api-key=${ipDataKey}` );
    request.setRequestHeader( 'Accept', 'application/json' );

    request.onreadystatechange = function () {
      if ( this.readyState === 4 && this.status == 200 ) {
        const response = JSON.parse( this.response );
        setCountry( response['country_name'] );
        setCity( response['city'] );
        setLatitude( response['latitude'] );
        setLongitude( response['longitude'] )
      }
    };

    request.send();
  } );

  return (
    <div className="App">
      <h1>React Google Maps</h1>
      <GoogleMap
        apiKey={apiKey}
        latitude={latitude}
        longitude={longitude}
      />
      <LocationCard
        city={city}
        country={country} />
    </div>
  );
}

export default App;
