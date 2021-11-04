import React from 'react';
import moment from 'moment';
import uuid from 'react-uuid';

export default function Hourly({ value }) {
  return (
    <>
      {value ? (
        <div className="hourly">
          <div className="date">{moment(value.dt * 1000).format('HH a')}</div>
          <div className="icon">
            {value.weather.map((x) => {
              return (
                <img
                  src={`http://openweathermap.org/img/wn/${x.icon}.png`}
                  key={uuid()}
                />
              );
            })}
          </div>
          <div className="temp">{value.temp.toFixed(0)}°C</div>
        </div>
      ) : (
        <div className="loading-cnt">
          <div className="loading">load..</div>
        </div>
      )}
    </>
  );
}
