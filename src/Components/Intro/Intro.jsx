import React from 'react';

import Github from '../../img/github.png';
import LonkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';


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
            right
        </div>
    </div>
  );
}

export default Intro;