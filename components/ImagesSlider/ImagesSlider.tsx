import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import env from "../../API/ApiUrl";

interface ImagesSliderProps {
  images: any;
}
export default function ImagesSlider({ images }: ImagesSliderProps) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          images?.map((image: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={`${env.ImageUrl}${image}` || ''}
                  alt="Product Image"
                  width={70}
                  height={70}
                  className="cursor-pointer"
                  layout="responsive"
                  objectFit="cover"
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
