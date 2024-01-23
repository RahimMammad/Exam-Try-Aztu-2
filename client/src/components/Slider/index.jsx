import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss"

const Slider = () => {
  return (
    <Swiper className="mySwiper">
        <SwiperSlide>
            <div className='slider-page'>
                <div className="slider-main">
                    <div className="slider-text">
                        <h1>Select Your New Perfect Style</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem accusamus ipsa dignissimos laborel voluptate, pariatur, officiis hic? Unde, minus!</p>
                        <button>SHOP NOW</button>
                    </div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider
