import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import Zaon from './Zaon';
import Footer from './Component/Footer';

const Header = () => {
  return (
    <>
      <div className="Headers">
        <div className="left">
          <h2>
            Get Healthy Body with <br /> Excercise
          </h2>

          <p>
            {' '}
            Regular exercise has been shown to increase lifespan and reduce the
            risk of early death from a variety of cause. Regular exercise can
            help improve sleep quality and duration, which can lead to better
            overall health and improved mental and physical performance.Exercise
            can strengthen your heart and lungs, improving your body's ability
            to circulate oxygen and nutrients throughout your body.
          </p>
          <Link to="/read">
            {' '}
            <button>Read More</button>
          </Link>
        </div>
        <div className="right">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_960_720.jpg"
            alt="fitness-image"
          />
        </div>
      </div>
      <Zaon />
      <Footer />
    </>
  );
};

export default Header;
