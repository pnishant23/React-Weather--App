import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Daily from './Daily';
import Hourly from './Hourly';
import Navbar from './Navbar';
import { FaTemperatureHigh, FaWind } from 'react-icons/fa';
import { FaTemperatureLow } from 'react-icons/fa';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { FaRadiationAlt } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';
import { BsFillCloudsFill } from 'react-icons/bs';
import { GiDew } from 'react-icons/gi';

export default function Current() {
  const [currData, setCurrData] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [height, setHeight] = useState(0);
  const info_cnt = useRef(null);
  const [hourly, setHourly] = useState();
  const [weekly, setWeekly] = useState();
  const [city, setCity] = useState();

  const API_KEY = '9fea503e8177fd247f33fbb6357119d3';

  const url = `        https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`;

  const cityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=8&appid=${API_KEY}`;

  //fetching weather data
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

  //fetching city name fromm coordinates
  useEffect(() => {
    axios
      .get(cityUrl)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [latitude, longitude]);

  console.log(city);

  //console.log(currData);
  //console.log(hourly);

  /*function map() {
    hourly.map((x) => {
      console.log(x.temp);
    });
  }
  map();*/

  //console.log(weekly);

  return (
    <>
      {currData.weather ? (
        <>
          <h1>{city ? <>{city[1].name}</> : <>----------</>}</h1>

          <Navbar />
          <div className="container">
            <div className="weather">
              <div className="temp">
                {currData.temp}°C
                {currData.weather.map((x) => {
                  return <span>{x.main}</span>;
                })}
              </div>
              <div className="icon">
                {currData.weather.map((x) => {
                  return (
                    <>
                      <img
                        src={`http://openweathermap.org/img/wn/${x.icon}.png`}
                      />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="info-cnt" ref={info_cnt}>
              <div className="info">
                <div className="icon">
                  {/* sunrise */}
                  <FiSunrise />
                </div>
                <div className="value" id="sunrise">
                  {moment(currData.sunrise * 1000).format('HH:mm a')}
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* humidity */}
                  <WiHumidity />
                </div>
                <div className="value">{currData.humidity}%</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* sunset */}
                  <FiSunset />
                </div>
                <div className="value" >
                  {moment(currData.sunset * 1000).format('HH:mm a')}
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* uvi */}
                  <FaRadiationAlt />
                </div>
                <div className="value">{currData.uvi}</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* wind_speed */}
                  <FaWind />
                </div>
                <div className="value">{currData.wind_speed}</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* visibility */}
                  <MdVisibility />
                </div>
                <div className="value">{currData.visibility}</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* feels like */}
                  <FaTemperatureHigh />
                  feels like
                </div>
                <div className="value">{currData.feels_like}°C</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* clouds */}
                  <BsFillCloudsFill />
                </div>
                <div className="value">{currData.clouds}%</div>
              </div>
              <div className="info">
                <div className="icon">
                  {/* dew point */}
                  <GiDew />
                </div>
                <div className="value">{currData.dew_point}°C</div>
              </div>
            </div>
          </div>
          <div className="hourly-cnt">
            {hourly ? (
              <>
                {hourly.map((x, idx) => {
                  return (
                    <>
                      <Hourly value={x} key={x.dt} />
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
              <div className="temp-am">
                <FaTemperatureHigh />
              </div>
              <div className="temp-pm">
                <FaTemperatureLow />
              </div>
              <div className="sunrise">
                <FiSunrise />
              </div>
              <div className="sunset">
                <FiSunset />
              </div>
              <div className="humidity">
                <TiWeatherWindyCloudy />
              </div>
            </div>
            {weekly ? (
              <>
                {weekly.slice(0, 3).map((x) => {
                  return <Daily daily={x} />;
                })}
              </>
            ) : (
              <div
                className="loading
                -cnt"
              >
                <div className="loading">loading....</div>
              </div>
            )}
            <div className="seven-day">
              <Link to="sevendays">7 days</Link>
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
