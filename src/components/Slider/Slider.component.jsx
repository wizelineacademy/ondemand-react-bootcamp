import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import BannerCard from '../BannerCard/BannerCard.component';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';

const Slider = () => {
  const { data: banners } = useFeaturedBanners();
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#ff385c',
        '--swiper-pagination-color': '#ff385c',
      }}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <BannerCard
            text={banner.text}
            height={banner.height}
            url={banner.url}
            alt={banner.alt}
            title={banner.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
