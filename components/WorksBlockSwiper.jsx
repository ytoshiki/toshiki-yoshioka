import React, { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

SwiperCore.use([Navigation]);

const WorksBlockSwiper = (props) => {
  const { title, texts, images } = props;
  const prev = useRef(null);
  const next = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="c-works-block-swiper">
      {title && <h2>{title}</h2>}

      <div>
        <div className="c-works-block-swiper__gallery">
          <Swiper
            slidesPerView={1}
            speed=".6s"
            navigation={{
              nextEl: prev.current,
              prevEl: next.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prev.current;
              swiper.params.navigation.nextEl = next.current;
            }}
            onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
          >
            {images.map((image, i) => (
              <SwiperSlide key={image}>
                <div
                  className="is-bg"
                  style={{
                    backgroundImage: `url(/${image})`,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="c-works-block-swiper__nav">
            <div ref={prev}>
              <Image
                src="/icon-prev.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
            <div ref={next}>
              <Image
                src="/icon-next.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="c-works-block-swiper__captions">
          <p>{texts[currentIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksBlockSwiper;
