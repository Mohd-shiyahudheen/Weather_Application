import React, { useState } from 'react';
import './Home.css';
import sunIcon from '../Assets/Images/sun-icon-6-256.png';
import cloud from '../Assets/Images/cloudIcon-removebg-preview.png';
import cloudSun from '../Assets/Images/4571473.png';

const Home = () => {
  const api = {
    key: '4f8e795dcd6dbf7b9f5276bff095ffc1',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  const [query, setQuery] = useState('');
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({});
  const [box1, setBox1] = useState({});
  const [box2, setBox2] = useState({});
  const [box3, setBox3] = useState({});
  const [box4, setBox4] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}forecast?q=${query}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setCity(result);
          setWeather(result?.list[0]);
          setBox1(result?.list[1]);
          setBox2(result?.list[2]);
          setBox3(result?.list[3]);
          setBox4(result?.list[4]);
        })
        .catch((err) => {
          alert('Please enter valid city');
        });
    }
  };

  return (
    <div className='main'>
      <div className='background-img'>
        <div className='search-bar'>
          <input
            type='text'
            className='search'
            placeholder='Enter youe city'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        <div className='box-div'>
          <div className='box'>
            <div className='sun-icon'>
              <img src={sunIcon} alt='' />
            </div>
            <div className='place-temp'>
              <div className='datas'>
                <h3>Today</h3>
                <h1>{city?.city?.name ?? 'City'}</h1>
                <h3>
                  Temperature : {Math.round(weather?.main?.temp ?? '21')}°C
                </h3>
                <h4>
                  Feel like : {Math.round(weather?.main?.feels_like ?? '24')}°C
                </h4>
              </div>
            </div>
          </div>

          <div className='list-box'>
            <div className='small-box1'>
              <div className='next-day-content'>
                <h3>Sunday</h3>
                <img src={sunIcon} alt='' />
                <h3>{Math.round(box1?.main?.temp ?? '30')}°C</h3>
              </div>
            </div>
            <div className='small-box2'>
              <div className='next-day-content'>
                <h3>Monday</h3>
                <img src={cloud} alt='' />
                <h3>{Math.round(box2?.main?.temp ?? '26')}°C</h3>
              </div>
            </div>
            <div className='small-box3'>
              <div className='next-day-content'>
                <h3>Tuseday</h3>
                <img src={sunIcon} alt='' />
                <h3>{Math.round(box3?.main?.temp ?? '24')}°C</h3>
              </div>
            </div>
            <div className='small-box4'>
              <div className='next-day-content'>
                <h3>Wednesday</h3>
                <img src={cloudSun} alt='' />
                <h3>{Math.round(box4?.main?.temp ?? '22')}°C</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
