import { Link } from "react-router-dom"
import { mainHeader } from "../data"
import Image from "../images/vfpbox.jpg"
import {  Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainHeader = () => {
  return (
    <header className="main__header">
      <Swiper className="container main__header-container" modules={[ Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      >

      { 
        mainHeader.map(({id,heading,desc,image}) => {
          return(
            <SwiperSlide key={id} className="main__header-swiper">
              <div className="main__header-left">
                <div className="main__header-image">
                  <img src={Image} alt="Main Header Image" />
                </div>
              </div>
              <div className="main__header-right">
                <h1>Shree Sava - Accounting Software</h1>
                <h3>{heading}</h3>
                <img src={image} />
                <p>
                  {desc}
                </p> 
                <Link to="/plans" className="btn sm">Get Started</Link>
              </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </header>
  )
}

export default MainHeader