import React, { useState, useEffect } from 'react';

const GoogleMap = ( props ) => {
  const { apiKey, latitude, longitude } = props;
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0" style={{ 'border': '0' }}
      src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}
    &center=${latitude},${longitude}&zoom=12&maptype=satellite`} allowFullScreen>
    </iframe>
  );
};

export default GoogleMap;