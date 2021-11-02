import React from 'react';

export default function DisplayAllDays(value) {
  console.log(value);
  return (
    <>
      {value ? (
        <div className="day">
          <div id="temp">{value.pressure}</div>
          <div className="icon">icon</div>
          <div>day</div>
          <div>23/03</div>
          <div>
            {value.weather.map((x) => {
              return x.main;
            })}
          </div>
        </div>
      ) : (
        <div className="loading-cnt">
          <div className="loading">loading..</div>
        </div>
      )}
    </>
  );
}
