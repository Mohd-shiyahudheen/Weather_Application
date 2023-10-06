import React from 'react';
import './Home.css';
import sunIcon from '../Assets/Images/sun-icon-6-256.png'
import cloud from '../Assets/Images/cloudIcon-removebg-preview.png'
import cloudSun from '../Assets/Images/4571473.png'



const Home = () => {
  return (
    <div className='main'>
      <div className='background-img'>
        <div className='search-bar'>
          <input type='text' className='search' placeholder='Enter youe city' />
        </div>

        <div className='box-div'>
          <div className='box'>
            <div className='sun-icon'>
              <img src={sunIcon} alt='' />
            </div>
            <div className='place-temp'>
              <div className='datas'>
                <h3>Today</h3>
                <h1>Chennai</h1>
                <h3>Temperature : 18°C</h3>
                <h4>Clear sky</h4>
              </div>
            </div>
          </div>

          <div className='list-box'>
            <div className='small-box1'>
              <div className='next-day-content'>
                <h3>Wednesday</h3>
                <img src={sunIcon} alt='' />
                <h3>30°C</h3>
              </div>
            </div>
            <div className='small-box2'>
              <div className='next-day-content'>
                <h3>Thursday</h3>
                <img src={cloud} alt='' />
                <h3>20°C</h3>
              </div>
            </div>
            <div className='small-box3'>
              <div className='next-day-content'>
                <h3>Friday</h3>
                <img src={sunIcon} alt='' />
                <h3>24°C</h3>
              </div>
            </div>
            <div className='small-box4'>
              <div className='next-day-content'>
                <h3>Saturday</h3>
                <img src={cloudSun} alt='' />
                <h3>28°C</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
