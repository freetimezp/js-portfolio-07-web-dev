import React, { useContext } from 'react';
import './Portfolio.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';

import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
            <img src={Sidebar} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Musicapp} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Hoc} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio;
