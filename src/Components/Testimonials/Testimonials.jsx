import React from 'react';
import './Testimonials.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: 
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam impedit libero alias inventore dolorem eius itaque iure harum dolor recusandae facilis, soluta quasi voluptate incidunt quaerat, quibusdam quisquam error."
        },
        {
            img: profilePic2,
            review: 
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam impedit libero alias inventore dolorem eius itaque iure harum dolor recusandae facilis, soluta quasi voluptate incidunt quaerat, quibusdam quisquam error."
        },
        {
            img: profilePic3,
            review: 
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam impedit libero alias inventore dolorem eius itaque iure harum dolor recusandae facilis, soluta quasi voluptate incidunt quaerat, quibusdam quisquam error."
        },
        {
            img: profilePic4,
            review: 
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam impedit libero alias inventore dolorem eius itaque iure harum dolor recusandae facilis, soluta quasi voluptate incidunt quaerat, quibusdam quisquam error."
        },
    ];

    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>

                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            <Swiper
                modules={[Pagination]} pagination={{clickable: true}}
                slidesPerView={1}
                loop={true}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="client" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;
