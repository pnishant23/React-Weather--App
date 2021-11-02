import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import CurrentApi from './API/CurrentApi';
import Daily from './Daily';
import Hourly from './Hourly';
import Navbar from './Navbar';

export default function Current() {
  const [currData, setCurrData] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [height, setHeight] = useState(0);
  const info_cnt = useRef(null);
  const [hourly, setHourly] = useState();
  const [weekly, setWeekly] = useState();

  const API_KEY = '9fea503e8177fd247f33fbb6357119d3';

  const url = `        https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((x) => {
      setLongitude(x.coords.longitude);
      setLatitude(x.coords.latitude);
    });

    axios
      .get(url)
      .then((res) => {
        setCurrData(res.data.current);
        setHourly(res.data.hourly);
        setWeekly(res.data.daily);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  //console.log(currData);
  //console.log(hourly);

  /*function map() {
    hourly.map((x) => {
      console.log(x.temp);
    });
  }
  map();*/

  console.log(weekly);

  return (
    <>
      {currData ? (
        <>
          <h1>Mumbai</h1>

          <Navbar />
          <div className="container">
            <div className="weather">
              <div className="temp">{/*currData.temp*/}</div>
              <div className="icon">
                <img
                  src={
                    './weather-icon-set/CLOUS/png clous/001lighticons-05.png'
                  }
                  alt="icon"
                />
              </div>
            </div>
            <div className="info-cnt" ref={info_cnt}>
              <div className="info">
                <div className="icon">icon</div>
                <div className="value">{/*currData.humidity*/}</div>
              </div>
              <div className="info">
                <div className="icon">icon</div>
                <div className="value">{/*currData.pressure*/}</div>
              </div>
              <div className="info">
                <div className="icon">icon</div>
                <div className="value">{/*currData.visibility*/}m</div>
              </div>
              <div className="info">
                <div className="icon">icon</div>
                <div className="value">{/*currData.uvi*/}</div>
              </div>
            </div>
          </div>
          <div className="hourly-cnt">
            {hourly ? (
              <>
                {hourly.map((x, idx) => {
                  return (
                    <>
                      <Hourly value={x} key={idx} />
                    </>
                  );
                })}
              </>
            ) : (
              <div className="loading-cnt">
                <div className="loading">loading....</div>
              </div>
            )}
          </div>
          <div className="weekly-cnt">
            <div className="weekly">
              <div className="day">DAY</div>
              <div className="temp-am">temp-am</div>
              <div className="temp-pm">temp-pm</div>
              <div className="sunrise">sunrise</div>
              <div className="sunset">sunset</div>
              <div className="humidity">humidity</div>
            </div>
            {weekly ? (
              <>
                {weekly
                  .filter((value, idx) => idx < 3)
                  .map((i, idx) => {
                    return <Daily item={i} key={idx} />;
                  })}
              </>
            ) : (
              <div className="loading-cnt">
                <div className="loading">loadin...</div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="loading-cnt">
          <div className="loading">loading...</div>
        </div>
      )}
    </>
  );
}
