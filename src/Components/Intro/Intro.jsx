import React from 'react';

import FloatingDiv from '../FloatingDiv/FloatingDiv';

import Github from '../../img/github.png';
import LonkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';

import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi, I Am Evgen</span>
                <span>Web Developer</span>
                <span>
                    Frontend Developer with high level of experience in web designing
                    and development, love to build Beautiful and Quality site
                </span>
            </div>

            <button className="button i-button">Hire Me</button>

            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={LonkedIn} alt="LonkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="vector" />
            <img src={Vector2} alt="vector" />
            <img src={Boy} alt="boy" />
            <img src={Glassesimoji} alt="Glassesimoji" />

            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
            </div>
            <div style={{top: '18rem', left: '0'}}>
                <FloatingDiv image={Thumbup} txt1="Your" txt2="Best Design" />
            </div>

            <div className="blur"></div>
            <div className="blur blur2"></div>
        </div>
    </div>
  );
}

export default Intro;