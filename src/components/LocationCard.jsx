import React from 'react';

const LocationCard = ( props ) => {
  const { city, country } = props;
  return (
    <div>
      <p>{`We have identified your location at ${city}, ${country}!`}</p>
    </div>
  );
};

export default LocationCard;