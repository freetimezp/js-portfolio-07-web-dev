import React, { useContext } from 'react';
import './Services.css';

import Card from '../Card/Card';

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import ServiceDoc from '../Services/ServiceDoc.pdf';

import { themeContext } from '../../Context';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='services'>
      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Voluptatum vero corrupti illo ex adipisci possimus rerum <br />
          in molestias, repellat voluptatem!
        </span>

        <a href={ServiceDoc} download>
          <button className='button s-button'>Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <div style={{ left: '14rem' }}>
          <Card 
            emoji={HeartEmoji} 
            heading={'Design'} 
            detail={'Figma, Sketch, Photoshop, Adobe, Photoshop XD'}
          />
        </div>
        <div style={{ left: '-4rem', top: '12rem' }}>
          <Card 
            emoji={Glasses} 
            heading={'Developer'} 
            detail={'Html, Css, Javascript, React'}
          />
        </div>
        <div style={{ left: '12rem', top: '19rem' }}>
          <Card 
            emoji={Humble} 
            heading={'UI/UX'} 
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
          />
        </div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services;