import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import moment from 'moment';

export default function Search() {
  const [cityName, setCityName] = useState();
  const [data, setData] = useState();
  const API = '9fea503e8177fd247f33fbb6357119d3';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);

  function handleChange(e) {
    e.preventDefault;
    setCityName(e.target.value);
  }

  //console.log(data);
  return (
    <>
      <Navbar />
      <h3>Search weather of any city</h3>
      <div className="search">
        <div>
          <input
            type="text"
            id="search"
            value={cityName}
            onChange={handleChange}
          />
          <label for="search">
            <i className="fas fa-search"></i>
          </label>
        </div>
        {data ? (
          <div className="result">
            <header>
              <h1>
                {data.name},{data.sys.country}
              </h1>
            </header>

            <div className="ti">
              <div id="temp">
                {data.main.temp}
                °C
                <h4>
                  {data.weather.map((x) => {
                    return x.main;
                  })}
                </h4>
              </div>
              <div id="icon">
                {data.weather.map((x) => {
                  return (
                    <img
                      src={`http://openweathermap.org/img/wn/${x.icon}.png`}
                    />
                  );
                })}
              </div>
            </div>

            <div id="para">
              <p>humidity: {data.main.humidity}%</p>
              <p>pressure: {data.main.pressure}hpa</p>
              <p>wind speed: {data.wind.speed}m/s</p>
              <p>visibility: {data.visibility} m</p>
            </div>
          </div>
        ) : (
          <div className="loadin-cnt">
            <div className="loading">Search City to view Data</div>
          </div>
        )}
      </div>
    </>
  );
}
