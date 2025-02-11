import React, { useEffect, useState } from 'react';
import { GoogleMap, StreetViewPanorama, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

function GamePage({ language }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAWxx_vuG1-zPYyT8zrhNKEM92jsmIKGwc',
  });

  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); 

  useEffect(() => {
    const randomLat = Math.random() * 180 - 90;
    const randomLng = Math.random() * 360 - 180;
    setLocation({ lat: randomLat, lng: randomLng });
  }, []);

  if (!isLoaded) return <div>{language === 'zh' ? '載入中...' : 'Loading...'}</div>;

  return (
    <div>
      <h1 className="text-center p-3">
        {language === 'zh' ? '歡迎進入GeoGuessr Clone！' : 'Welcome to the GeoGuessr!'}
      </h1>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={14}>
        <StreetViewPanorama position={location} visible />
      </GoogleMap>
    </div>
  );
}

export default GamePage;
