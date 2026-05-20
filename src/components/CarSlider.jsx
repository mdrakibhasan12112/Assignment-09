'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const cars = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200',
];

const CarSlider = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={car}
                alt="car"
                className="h-[250px] w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSlider;
