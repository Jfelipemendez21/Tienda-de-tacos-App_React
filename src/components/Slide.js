import React from 'react'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../imgs/1.jpeg"
import img2 from "../imgs/2.jpeg"
import img3 from "../imgs/3.jpeg"
import img4 from "../imgs/4.jpeg"
import img5 from "../imgs/5.jpeg"
import img6 from "../imgs/6.webp"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000, // Duración de cada diapositiva en milisegundos
        disableOnInteraction: false, // Permitir pausar la reproducción automática al interactuar con el slider
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

function Slide() {

  return (
    <div className="swiper container m-4">
        <div className="swiper-wrapper container">
            <div className="swiper-slide"><img className='imgSwiper' src={img1} alt=''/></div>
            <div className="swiper-slide"><img className='imgSwiper' src={img2} alt=''/></div>
            <div className="swiper-slide"><img className='imgSwiper' src={img3} alt=''/></div>
            <div className="swiper-slide"><img className='imgSwiper' src={img4} alt=''/></div>
            <div className="swiper-slide"><img className='imgSwiper' src={img5} alt=''/></div>
            <div className="swiper-slide"><img className='imgSwiper' src={img6} alt=''/></div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
    </div>
  )
}

export default Slide
