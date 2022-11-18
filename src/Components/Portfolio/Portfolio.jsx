import React from 'react';
import './Portfolio.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
