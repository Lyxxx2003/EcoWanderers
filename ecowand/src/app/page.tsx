"use client";
import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token here
mapboxgl.accessToken = "pk.eyJ1IjoieXhsY3UwMyIsImEiOiJjbHM3azM4YmMxZG15MmpyeGtkazFqd3lyIn0.zkVLUAApeW4y9kPEzH31SQ";

const Home: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      mapContainer.innerHTML = ''; // Clear the container before initializing

      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.0066, 40.7135], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });

      // Clean up on unmount
      return () => map.remove();
    } else {
      console.error('Map container not found');
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitting:', { origin, destination });
    // Implement your submission logic here, such as geocoding the addresses
    // or setting up a route on the map.
  };

  return (
    <div className="relative h-screen">
      {/* Map Container */}
      <div id="map" className="absolute inset-0 w-full h-full z-0"></div>

      {/* Overlay Container for Input Fields */}
      <form className="absolute top-0 left-0 right-0 z-10 p-4" onSubmit={handleSubmit}>
        {/* First Input Bar - Origin */}
        <div className="relative mb-4">
          <label htmlFor="origin" className="block text-sm font-medium leading-6 text-gray-900">
            Origin
          </label>
          <input
            type="text"
            name="origin"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="Enter origin"
          />
        </div>

        {/* Second Input Bar - Destination */}
        <div className="relative mb-4">
          <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">
            Destination
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            placeholder="Enter destination"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
