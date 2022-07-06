import React from 'react';
import { useSelector } from 'react-redux';
import { Autoplay, Pagination, Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';

const Gallery = () => {
  const { productImages } = useSelector((state) => state.cart);
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#ff385c',
        '--swiper-pagination-color': '#ff385c',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={'auto'}
      centeredSlides={true}
      lazy={true}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Lazy, Pagination, Navigation, Autoplay]}
    >
      {productImages.map((image) => (
        <SwiperSlide key={image.url}>
          <img src={image.url} width={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
