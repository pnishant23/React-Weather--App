import React from 'react';
import CurrentApi from './API/CurrentApi';
import Navbar from './Navbar';

export default function Current() {
  return (
    <>
      <h1>Mumbai</h1>

      <Navbar />
      <div className="container">
        <div className="weather">
          <div className="temp">23C</div>
          <div className="icon">
            <img
              src={'./weather-icon-set/CLOUS/png clous/001lighticons-05.png'}
              alt="icon"
            />
          </div>
        </div>
        
      </div>
    </>
  );
}
