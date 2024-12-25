// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
/*  */
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/bW573tS/carousel1.jpg"
            text="Order Your favorite food in Dine Craft"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/bW573tS/carousel2.jpg" // Replace with the actual URL for the second image
            text="We have the fastest home delivery service in the country"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/bW573tS/carousel3.jpg" // Replace with the actual URL for the third image
            text="On 50 orders a month, get 50% discount"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
