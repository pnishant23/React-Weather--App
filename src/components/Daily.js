import React from 'react';

export default function Daily({ item, }) {
  return (
    <>
      {item ? (
        <>
          <div className="weekly">
            <div className="day">day</div>
            <div className="temp-am">{item.temp.day}</div>
            <div className="temp-pm">{item.temp.night}</div>
            <div className="sunrise">{item.sunrise}</div>
            <div className="sunset">{item.sunset}</div>
            <div className="humidity">
              {item.weather.map((x) => {
                return x.main;
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="loading-cnt">
          <div className="loading">loading....</div>
        </div>
      )}
    </>
  );
}
