import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';



  
// ZonePoster Component
export const ZonePoster = () => {
    // const mapContainerRef = useRef<HTMLDivElement>(null);
    // const mapRef = useRef<Object>(null);
    // const mapContainerRef = useRef<Map|null>(null); 
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnk5MTEiLCJhIjoiY201YmQwNm5qNHE3ZjJqcTcxdHI2b25vaCJ9.8YV7TLlKyTNy3aotnB7FLg';
    // useEffect(() => {
    //   // Initialize map
    //   const map = new mapboxgl.Map({
    //     container: mapContainerRef.current, // reference to the map container
    //     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    //     center: [-74.5, 40], // starting position [lng, lat]
    //     zoom: 9, // starting zoom
    //   });
  
    //   return () => {
    //     map.remove(); // Cleanup on unmount
    //   };
    // }, []);
    

  return (
    <div className="zone-poster">
        {/* <img src={imageUrl} alt={title} className="zone-poster-image" /> */}
        <h2 className="zone-poster-title">Zone Poster</h2>
        <p className="zone-poster-description">This is Zone Poster.</p>
        {/* <div
            style={{ height: '100%' }}
            ref={mapContainerRef}
            className="map-container"
        /> */}
    </div>
  );
};