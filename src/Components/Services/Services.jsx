import React, { useContext } from 'react';
import './Services.css';

import Card from '../Card/Card';

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import ServiceDoc from '../Services/ServiceDoc.pdf';

import { themeContext } from '../../Context';

import { motion } from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 2, type: 'spring'};

  return (
    <div className='services' id='Services'>
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
        <motion.div 
          initial={{ x: '28rem' }}
          animate={{ x: '8rem' }}
          transition={transition}
          style={{ left: '14rem' }}
        >
          <Card 
            emoji={HeartEmoji} 
            heading={'Design'} 
            detail={'Figma, Sketch, Photoshop, Adobe, Photoshop XD'}
          />
        </motion.div>
        <motion.div
          initial={{ x: '-18rem', y: '1rem' }}
          animate={{ x: '-4rem' }}
          transition={transition}
          style={{ left: '-4rem', top: '12rem' }}
        >
          <Card 
            emoji={Glasses} 
            heading={'Developer'} 
            detail={'Html, Css, Javascript, React'}
          />
        </motion.div>
        <motion.div 
          initial={{ x: '28rem', y: '0' }}
          animate={{ x: '2rem' }}
          transition={transition}
          style={{ left: '12rem', top: '19rem' }}
        >
          <Card 
            emoji={Humble} 
            heading={'UI/UX'} 
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
          />
        </motion.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services;