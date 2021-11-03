import moment from 'moment';
import React from 'react';

export default function Daily({ daily }) {
  return (
    <>
      <div className="weekly">
        <div className="day">{moment(daily.dt * 1000).format('ddd')}</div>
        <div className="temp-am">{daily.temp.max}°C</div>
        <div className="temp-pm">{daily.temp.min}°C</div>
        <div className="sunrise">
          {moment(daily.sunrise * 1000).format('HH:mm a')}am
        </div>
        <div className="sunset">
          {moment(daily.sunset * 1000).format('HH:mm a')}am
        </div>
        <div className="humidity">
          {daily.weather.map((x) => {
            return (
              <img
                src={`http://openweathermap.org/img/wn/${x.icon}.png`}
                alt="icon"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
