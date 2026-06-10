"use client";

import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const defaultBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const SectionSlider = ({
  children,
  className = "",
  slideClassName = "",
  breakpoints = defaultBreakpoints,
  navId,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={breakpoints}
      // grabCursor
      navigation={
        navId
          ? {
              prevEl: `.swiper-${navId}-prev`,
              nextEl: `.swiper-${navId}-next`,
            }
          : false
      }
      pagination={false}
      className={`pb-10 ${className}`}
    >
      {Children.toArray(children).map((child, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SectionSlider;
