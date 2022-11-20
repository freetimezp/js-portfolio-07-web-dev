import React, { useContext } from 'react';
import './Works.css';

import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

import { themeContext } from '../../Context';

import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptatum vero corrupti illo ex adipisci possimus rerum
                    <br />
                    in molestias, repellat voluptatem! in molestias!
                </span>

                <button className='button s-button'>Hire Me</button>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="w-right">
                <motion.div 
                    className="w-mainCircle"
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring', repeat: Infinity }}
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="circle" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="circle" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="circle" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="circle" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="circle" />
                    </div>
                </motion.div>

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works;
