import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayAllDays from './DisplayAllDays';
import Navbar from './Navbar';

export default function SevenDays({ }) {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [daily, setDaily] = useState();

  const API_KEY = '9fea503e8177fd247f33fbb6357119d3';

  const url = `        https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((x) => {
      setLatitude(x.coords.latitude);
      setLongitude(x.coords.longitude);
    });

    axios
      .get(url)
      .then((res) => {
        setDaily(res.data.daily);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);
  return (
    <>
      <Navbar />
      <div className="container-seven">
        {daily ? (
          <>
            {daily.map((x, idx) => {
              return (
                <>
                  <DisplayAllDays value={x} key={idx} />
                </>
              );
            })}
          </>
        ) : (
          <div className="loading-cnt">
            <div classNames="loading">loading....</div>
          </div>
        )}
      </div>
    </>
  );
}
