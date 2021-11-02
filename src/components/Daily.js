import React from 'react';
import ThreeDays from './ThreeDays';
import { Link } from 'react-router-dom';
import SevenDays from './SevenDays';

export default function Daily({ daily }) {
  return (
    <>
      {daily ? (
        <>
          <div className="day">day</div>
          <div className="temp-am">{daily.temp.max}</div>
          <div className="temp-pm">{daily.temp.min}</div>
          <div className="sunrise">{daily.sunrise}</div>
          <div className="sunset">{daily.sunset}</div>
          <div className="humidity">
            {daily.weather.map((x) => {
              return x.main;
            })}
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
