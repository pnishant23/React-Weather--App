import React from 'react';
import Navbar from './Navbar';

export default function SevenDays() {
  return (
    <>
      <Navbar />
      <div class="container-seven">
        <div class="day">
          <div id="temp">28C</div>
          <div class="icon">icon</div>
          <div>day</div>
          <div>23/03</div>
          <div>Rain</div>
        </div>
      </div>
    </>
  );
}
