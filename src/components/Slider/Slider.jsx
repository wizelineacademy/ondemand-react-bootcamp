
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'
import Slide from './components/Slide/Slide'

const Slider = ({ items, slidesPerView=1, spaceBetween = 0 }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
    >
      {items.map((slide, index) => {
        return (
          <SwiperSlide key={`slide-${index}`}>
            <Slide slide={slide} />
          </SwiperSlide>
        )
      })}       
    </Swiper>
  )
}

Slider.propTypes = {
  items: PropTypes.array,
  slidesPerView: PropTypes.number
}


export default Slider