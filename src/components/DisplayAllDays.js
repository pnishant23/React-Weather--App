import React from 'react';

export default function DisplayAllDays(value) {
  return (
    <>
      <div className="day">
        <div id="temp">{value.sunri}</div>
        <div className="icon">icon</div>
        <div>day</div>
        <div>23/03</div>
        <div>Rain</div>
      </div>
    </>
  );
}
