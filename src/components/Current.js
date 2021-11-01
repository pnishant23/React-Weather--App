import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import CurrentApi from './API/CurrentApi';
import Navbar from './Navbar';

export default function Current() {
  const [currData, setCurrData] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  /const [height, setHeight] = useState(0);
  const info_cnt = useRef(null);

  const API_KEY = '9fea503e8177fd247f33fbb6357119d3';

  const url = `        https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`;

  /*useEffect(() => {
    navigator.geolocation.getCurrentPosition((x) => {
      setLongitude(x.coords.longitude);
      setLatitude(x.coords.latitude);
    });

    axios
      .get(url)
      .then((res) => {
        setCurrData(res.data.current);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);*/

  console.log(currData);

  useEffect(() => {
    const height = info_cnt.current.offsetHeight;

    handleClick(height);
  }, []);
  console.log(height);

  function handleClick(x) {
    if (x === 78) {
      info_cnt.style.height = '210px';
    } else {
      info_cnt.style.height = '78px';
    }
  }

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
            <div className="info-cnt" onClick={handleClick} ref={info_cnt}>
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
        </>
      ) : (
        <div className="loading-cnt">
          <div className="loading">loading...</div>
        </div>
      )}
    </>
  );
}
