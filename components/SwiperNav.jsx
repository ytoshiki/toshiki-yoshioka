import Image from 'next/image';
import React from 'react'
import { useSwiper } from 'swiper/react';

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <div className="c-works-block-swiper__nav">
            <div onClick={() => swiper.slidePrev()} className={swiper.activeIndex === 0 ? "is-disabled" : ""}>
              <Image
                src="/icon-prev.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
            <div onClick={() => swiper.slideNext()} className={swiper.activeIndex === swiper.slides.length - 1 ? "is-disabled": ""}>
              <Image
                src="/icon-next.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
  )
}

export default SwiperNav
