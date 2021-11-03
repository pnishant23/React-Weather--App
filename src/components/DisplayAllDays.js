import React from 'react';
import moment from 'moment';

export default function DisplayAllDays({ value }) {
  console.log(value);
  return (
    <>
      {value ? (
        <div className="day">
          <div id="temp">{value.temp.day}°C</div>
          <div className="icon">
            {value.weather.map((x) => {
              return (
                <img src={`http://openweathermap.org/img/wn/${x.icon}.png`} />
              );
            })}
          </div>
          <div>{moment(value.dt * 1000).format('ddd')}</div>
          <div>{moment(value.dt * 1000).format('DD/MM')}</div>
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
