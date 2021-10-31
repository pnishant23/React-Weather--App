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
          <div className="icon">icon</div>
        </div>
      </div>
    </>
  );
}
