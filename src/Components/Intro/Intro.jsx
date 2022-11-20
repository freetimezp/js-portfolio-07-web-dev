import React, { useContext } from 'react';

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

import { themeContext } from '../../Context';

import { motion } from 'framer-motion';

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration: 2, type: 'spring'};

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? 'white' : ''}}>Hi, I Am Evgen</span>
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
                <motion.img 
                    initial={{ x: '-46%', y: '50px' }}
                    animate={{ x: '24%' }}
                    transition={transition}
                    src={Glassesimoji} alt="Glassesimoji" 
                />

                <motion.div
                    initial={{ y: '-4%', x: '74%' }}
                    animate={{ x: '-4%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ y: '5px', x: '-74%' }}
                    animate={{ x: '78px' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0' }}
                >
                    <FloatingDiv image={Thumbup} txt1="Your" txt2="Best Design" />
                </motion.div>

                <div className="blur"></div>
                <div className="blur blur2"></div>
            </div>
        </div>
    );
}

export default Intro;